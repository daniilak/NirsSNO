<?php
if (!isset($_POST['get_list']) && !isset($_POST['type'])) {
    echo json_encode(["msg" => "Нет POST запроса: get_list, type"]);
    die();
}

$response = [];
$type = strip_tags(trim($_POST['type']));

switch ($type) {
    case "menu":
        echo json_encode(["response" => API::getMenu()]);
        break;
    case "news":
        echo json_encode(["response" => API::getNews(FALSE)]);
        break;
    case "year":
        echo json_encode(["response" => API::getYears()]);
        break;
    case "auth":
        echo json_encode(["response" => API::auth($_POST['login'], $_POST['password'])]);
        break;
    case "fac":
        echo json_encode(["response" => API::getFacs(FALSE)]);
        break;
    case "award":
        echo json_encode(["response" => API::getAwards(FALSE)]);
        break;
    case "event_type":
        echo json_encode(["response" => API::getEventTypes(FALSE)]);
        break;
    case "event_level":
        echo json_encode(["response" => API::getEventLevels(FALSE)]);
        break;
    case "event":
        echo json_encode(["response" => API::getEvents(intval($_POST['year']), FALSE)]);
        break;
    default:
        echo json_encode(["msg" => "Неправильный параметр type"]);
        break;
}

die();
