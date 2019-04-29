<?php
require_once(__DIR__ . '/ExceptionEngine.php');
$exceptionEngine = new ExceptionEngine();

if (version_compare(phpversion(), '5.4.0', '<')) {
    trigger_error('Нужен PHP версии 5.4 и выше');
}
require_once(__DIR__ . '/../config.php');
require_once(__DIR__ . '/DataBase.php');
require_once(__DIR__ . '/Ref.php');
require_once(__DIR__ . '/TemplateEngine.php');
require_once(__DIR__ . '/API.php');
require_once(__DIR__ . '/obj/EventLevel.php');
require_once(__DIR__ . '/obj/EventType.php');
require_once(__DIR__ . '/obj/Event.php');
require_once(__DIR__ . '/obj/Award.php');
require_once(__DIR__ . '/obj/Chair.php');
require_once(__DIR__ . '/obj/News.php');
require_once(__DIR__ . '/obj/Fac.php');
require_once(__DIR__ . '/Cookies.php');
require_once(__DIR__ . '/Controller.php');
