<?php
if (!isset($_POST['get_list']) && !isset($_POST['type'])) {
    echo json_encode(["msg" => "Нет POST запроса: get_list, type"]);
    die();
}

$response = [];
$type = strip_tags(trim($_POST['type']));

switch ($type) {
    case "fac":
        echo json_encode(["response" => API::getFacs(FALSE) ]);
        break;
    default:
        echo json_encode(["msg" => "Неправильный параметр type"]);
        break;
}

die();
