<?php
$e = explode("/", $_GET['route']);
if (!isset($e[1])) {
    $template->templateCompile();
    $template->templateDisplay();
}


$event = API::getEventByID(intval($e[1]));
$event = $event[0];
$eventType = API::getEventTypeByID($event->getIdType());
$eventLevel = API::getEventLevelByID($event->getIdLevel());


$template->templateSetVar("name", $event->getName());
$template->templateSetVar("ID", $event->getID());
$template->templateSetVar("year", $event->getYear());
$template->templateSetVar("dateStart", $event->getDateStart());
$template->templateSetVar("dateEnd", $event->getDateEnd());
$template->templateSetVar("location", $event->getLocation());
$template->templateSetVar("organization", $event->getOrganization());
$template->templateSetVar("isOrder", $event->getIsOrder());

$template->templateCompile();
$template->templateDisplay();
