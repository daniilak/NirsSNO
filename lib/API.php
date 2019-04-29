<?php
/**
 * API (на коленке или для подгрузки со стороны JS)
 * Хотя, это больше список запросов в БД
 */
class API
{
    static function auth($login, $pass)
    {
        $tmp = DataBase::SQL(
            "SELECT  `pass_hash`, `ID`, `GUID` FROM `users` WHERE `id_vk` = ?",
            '',
            [$login]
        );
        if (password_verify(trim($pass), $tmp[0]['pass_hash'])) {
            Cookies::setCookie($tmp[0]['GUID'], $tmp[0]['ID']);
            return ["code" => 0];
        } else {
            return ["code" => 1, "msg" => "Неправильный логин или пароль!"];
        }
    }
    static function getFacs($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT 
             `ID`,
             `id_lk_chuvsu` AS `idLkChuvsu`,
             `name`,
             `count_users` AS `countStudents`,
             `count_teachers` AS `countTeachers`,
             `description`,
             `full_name` AS `fullName`,
             `decan`,
             `photo_url` AS `photoURL`
             FROM `facs`",
            ($isObject) ? 'Fac' : ''
        );
    }

    static function getAwards($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`,`award` 
             FROM `awards`",
            ($isObject) ? 'Award' : ''
        );
    }

    static function getChairs($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`, `id_fac` AS `idFac`, `name` 
             FROM `chairs`",
            ($isObject) ? 'Chair' : ''
        );
    }

    static function getEventTypes($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`, `events_nirs_type` AS `type` 
             FROM `events_nirs_types`",
            ($isObject) ? 'EventType' : ''
        );
    }

    static function getEventLevels($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`, `events_nirs_level` AS `level` 
             FROM `events_nirs_levels`",
            ($isObject) ? 'EventLevel' : ''
        );
    }

    static function getEvents($year, $isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT 
                `ID`,
                `id_type_event` AS `idType`,
                `id_level_event` AS `idLevel`,
                `year`,
                `name`,
                `date_start` AS `dateStart`,
                `date_end` AS `dateEnd`,
                `location`,
                `organization`,
                `is_order` AS `isOrder`
             FROM `events_nirs`
             WHERE `year` = ?",
            ($isObject) ? 'Event' : '',
            [intval($year)]
        );
    }

    static function getYears()
    {
        $tmp = [];
        for ($i = 2018; $i <= 2025; $i++) {
            $tmp[] = $i;
        }
        return ["code" => 0, "years" => $tmp];
    }

    static function getNews($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT 
                `ID`,
                `text`
             FROM `news`",
            ($isObject) ? 'News' : ''
        );
    }
}
