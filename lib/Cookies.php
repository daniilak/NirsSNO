<?php
class Cookies
{
    static function setCookie($token, $id)
    {
        // Пока не знаю, нужно ли это
        // $salt = getSalt();
        // $token = $salt . '_' . md5(join('_', array($token,  $salt)));
        setcookie("token", $token, 0x6FFFFFFF);
        setcookie("id", $id, 0x6FFFFFFF);
    }
    static function deleteCookies()
    {
        setcookie("token", "", time() - 3600);
        setcookie("id", "", time() - 3600);
    }
    static function redirectPage($page = '')
    {
        if (!empty($_COOKIE["token"]) || !empty($_COOKIE["id"])) {
            header('Location: /' . $page, true, 307);
            die();
        }
    }
    static function emptyCookie()
    {
        if (empty($_COOKIE["token"]) || empty($_COOKIE["id"])) {
            Cookies::deleteCookies();
            header('Location: /', true, 307);
            die();
        }
    }
}
