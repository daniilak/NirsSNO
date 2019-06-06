<?php
if (isset($_POST['get_list'])) {
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
        case "chair":
            echo json_encode(["response" => API::getChairs(FALSE)]);
            break;
        case "event":
            echo json_encode(["response" => API::getEvents(intval($_POST['year']), $_POST['level'], $_POST['types'], FALSE)]);
            break;
        default:
            echo json_encode(["msg" => "Неправильный параметр type"]);
            break;
    }
}
if (isset($_POST['byid'])) {
    $type = strip_tags(trim($_POST['type']));
    $id = strip_tags(trim($_POST['byid']));
    switch ($type) {
        case "event":
            echo json_encode(["response" => API::getEventByID($id)]);
            break;
    }
}

if (isset($_POST['add'])) {
    $type = strip_tags(trim($_POST['type']));
    switch ($type) {
        case "event":
            echo json_encode(["response" => API::addEvent($_POST['data'])]);
            break;
        case "news":
            echo json_encode(["response" => API::addNews()]);
            break;
        case "work":
            echo json_encode(["response" => API::addWork($_POST['id_fac'], $_POST['id_event'])]);
            break;
        case "type-event":
            echo json_encode(["response" => API::addTypeEvent()]);
            break;
        case "level-event":
            echo json_encode(["response" => API::addLevelEvent()]);
            break;
        case "chair":
            echo json_encode(["response" => API::addChair()]);
            break;
        case "award":
            echo json_encode(["response" => API::addAward()]);
            break;
    }
}

if (isset($_POST['remove'])) {
    $type = strip_tags(trim($_POST['type']));
    $id = intval($_POST['id']);
    switch ($type) {
        case "news":
            $newNews = API::getNewsByID($id);
            $newNews[0]->remove();
            break;
    }
    echo json_encode(["response" => 0]);
}

if (isset($_POST['edit'])) {
    $type = strip_tags(trim($_POST['type']));
    $value = strip_tags(trim($_POST['value']));
    $id = intval($_POST['id']);
    switch ($type) {
        case "news":
            $e = API::getNewsByID($id);
            $e[0]->setText($value)->updateText();
            break;
        case "event":
            $e = API::getEventByID($id);
            $e[0]->updateValueDB($value, $_POST['as']);
            break;
        case "event_type":
            $e = API::getTypeEventByID($id);
            $e[0]->setType($value)->updateType();
            break;
        case "event_level":
            $e = API::getLevelEventByID($id);
            $e[0]->setLevel($value)->updateLevel();
            break;
        case "chair":
            $e = API::getChairByID($id);
            // chair id
            $e[0]->setName($value)->updateChairName();
            break;
        case "award":
            $e = API::getAwardByID($id);
            $e[0]->setAward($value)->updateAward();
            break;
        case "facs":
            $e = API::getFacsByID($id);
            // methods
            $e[0]->setText($value)->updateText();
            break;
    }
    echo json_encode(["response" => 0]);
}
die();
