<?php
class Controller
{
    private $controllers;
    private $controller;
    private $controllerForID;
    private $controllerData;
    private $siteName;

    public function __construct($params)
    {
        $this->parseConfig();
        $this->parseLogout();

        $this->controller = 'main';

        if (empty($params['route'])) {
            $this->loadModel();
        }

        $controller = explode('/', $params['route']);
        $this->controller = $controller[0];
        if (isset($controller[1]))
            $this->controllerForID = $controller[1];

        if (isset($this->controllers[$this->controller])) {
            $this->controllerData = $this->controllers[$this->controller];
        } else {
            $this->controller = 404;
        }
        $this->loadModel();
    }

    private function parseLogout()
    {
        if (isset($_GET['logout'])) {
            Cookies::deleteCookies();
            Cookies::redirectPage();
        }
    }

    public function parseConfig()
    {
        $data = json_decode(file_get_contents(__DIR__ . '/../config.json'));
        $this->controllers = (array)$data->controllers;
        $this->siteName = $data->controllers;
    }

    private function loadModel()
    {
        if ($this->controller == "main") {
            Cookies::redirectPage('starter');
        }

        if ($this->controller == 404) {
            $template = new TemplateEngine("{$this->controller}.tpl");
            require_once("models/{$this->controller}.php");
        }

        if (!$this->controllers[$this->controller]->main[0]) {
            Cookies::emptyCookie();
            $template = new TemplateEngine("template.tpl");

            if (isset($this->controllerData->data->issetID) && mb_strlen($this->controllerForID) > 0) {
                $template->templateLoadSub("{$this->controller}_ID.tpl", "content");
            } else {
                $template->templateLoadSub("{$this->controller}.tpl", "content");
            }
        } else {
            $template = new TemplateEngine("{$this->controller}.tpl");
        }

        $template->templateSetVar(
            "title",
            $this->controllers[$this->controller]->data->title
        );
        $template->templateSetVar(
            "js",
            $this->controllers[$this->controller]->data->js
        );
        $template->templateSetVar(
            "css",
            $this->controllers[$this->controller]->data->css
        );

        require_once("models/{$this->controller}.php");
    }

    private function loadModel1($controller)
    {
        $user = new User();
        if (!$user->issetUserData()) {
            Cookies::deleteCookies();
            $this->mainPage();
        } else {
            $user->setUserData();
        }
        $ex = explode("_", $_COOKIE["token"]);
        if (md5(join('_', array($user->getUserData()->GUID, $ex[0]))) != $ex[1]) {
            Cookies::deleteCookies();
            Cookies::redirectPage('auth');
        }
        $GLOBALS['models'] = $controller;
        require_once('lib/TemplateEngine.php');
        $template = new TemplateEngine("page/template.tpl");
        $template->templateLoadSub("page/{$controller}.tpl", "content");
        $template->templateSetVar('photo_user', $user->getUserData()->photo);
        $template->templateSetVar('fName', $user->getUserData()->first_name);
        $template->templateSetVar('lName', $user->getUserData()->last_name);
        $template->connectMenu($user->getUserData()->id_role);
        require_once("models/{$controller}.php");
    }
}
