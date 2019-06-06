<?php
/**
 * API (на коленке или для подгрузки со стороны JS)
 * Хотя, это больше список запросов в БД
 */
class API
{
    static function getMenu()
    {
        $data = json_decode(file_get_contents(__DIR__ . '/../config.json'));
        $roleID = 4;
        $response = ["sitename" => $data->sitename, "controllers" => []];
        foreach ($data->controllers as $key => $controller) {
            if (isset($controller->data->menu) && $controller->data->status <= $roleID) {
                $response["controllers"][] = [
                    "name" => $controller->data->title,
                    "icon" => (isset($controller->data->icon)) ? $controller->data->icon : "",
                    "url" => $key,
                ];
            }
        }
        return $response;
    }

    static function auth($login, $pass)
    {
        // чуть позже сделаю
        //
        // if (isset($_POST['g-recaptcha-response']) && Ref::verifyCaptcha($_POST['g-recaptcha-response'])) {
        //     return ["code" => 1, "msg" => "Произошла ошибка при авторизации <br> Попробуйте еще раз."];
        // }
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
             FROM `facs` ORDER BY `ID`",
            ($isObject) ? 'Fac' : ''
        );
    }

    static function getAwards($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`,`award` 
             FROM `award_list` ORDER BY `ID`",
            ($isObject) ? 'Award' : ''
        );
    }

    static function getChairs($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`, `id_fac` AS `idFac`, `name` 
             FROM `chairs` ORDER BY `ID`",
            ($isObject) ? 'Chair' : ''
        );
    }

    static function getEventTypeByID($id)
    {
        return DataBase::SQL(
            "SELECT `ID`, `events_nirs_type` AS `type` 
            FROM `events_nirs_types` WHERE `ID`= ?",
            'EventType',
            [$id]
        );
    }

    static function getEventLevelByID($id)
    {
        return DataBase::SQL(
            "SELECT `ID`, `events_nirs_level` AS `type` 
            FROM `events_nirs_levels` WHERE `ID`= ?",
            'EventLevel',
            [$id]
        );
    }


    static function getEventTypes($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`, `events_nirs_type` AS `type` 
             FROM `events_nirs_types` ORDER BY `ID`",
            ($isObject) ? 'EventType' : ''
        );
    }

    static function getEventLevels($isObject = TRUE)
    {
        return DataBase::SQL(
            "SELECT `ID`, `events_nirs_level` AS `level` 
             FROM `events_nirs_levels` ORDER BY `ID`",
            ($isObject) ? 'EventLevel' : ''
        );
    }

    static function getEvents($year, $level, $types, $isObject = TRUE)
    {
        $str = "";
        $arr = [intval($year)];
        if ($level != 0 && $level != '') {
            $str = " AND `id_level_event` = ?";
            $arr[] = $level;
        }
        if ($types != 0  && $level != '') {
            $str = " AND `id_type_event` = ?";
            $arr[] = $types;
        }
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
             WHERE `year` = ?  " . $str . " ORDER BY `ID`",
            ($isObject) ? 'Event' : '',
            $arr
        );
    }

    static function getYears()
    {
        $tmp = [];
        for ($i = 2019; $i <= 2025; $i++) {
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
             FROM `news` ORDER BY `ID`",
            ($isObject) ? 'News' : ''
        );
    }

    static function getNewsByID($id)
    {
        return DataBase::SQL(
            "SELECT 
                `ID`,
                `text`
             FROM `news`
             WHERE `ID` = ?",
            'News',
            [$id]
        );
    }

    static function getEventByID($id)
    {
        return DataBase::SQL(
            "   SELECT 
                `ID`,
                `id_fac` AS `idFac`,
                `id_type_event` AS `idType`,
                `id_level_event` AS `idLevel`,
                `year`,
                `name`,
                `date_start` AS `dateStart`,
                `date_end` AS `dateEnd`,
                `location`,
                `organization`,
                `is_order` AS `isOrder`
                FROM `events_nirs`",
            'Event',
            [$id]
        );
    }



    static function addNews()
    {
        DataBase::SQL(
            "INSERT INTO `news`(`text`) VALUES ('')",
            "NO"
        );
        $tmp = DataBase::SQL(
            "SELECT MAX(`ID`) FROM `news`",
            ''
        );
        return $tmp[0]["MAX(`ID`)"];
    }

    static function addTypeEvent()
    {
        DataBase::SQL(
            "INSERT INTO `events_nirs_types` (`events_nirs_type`) VALUES ('')",
            "NO"
        );
        $tmp = DataBase::SQL(
            "SELECT MAX(`ID`) FROM `events_nirs_types`",
            ''
        );
        return $tmp[0]["MAX(`ID`)"];
    }

    static function addLevelEvent()
    {
        DataBase::SQL(
            "INSERT INTO `events_nirs_levels` (`events_nirs_level`) VALUES ('')",
            "NO"
        );
        $tmp = DataBase::SQL(
            "SELECT MAX(`ID`) FROM `events_nirs_levels`",
            ''
        );
        return $tmp[0]["MAX(`ID`)"];
    }


    static function addEvent($arr)
    {
        $name = "";
        $year = "";
        $level = "";
        $type = "";
        $date_start = "";
        $date_end = "";
        $organization = "";
        $location = "";
        foreach ($arr as $elem) {
            switch ($elem['name']) {
                case "name":
                    $name = $elem['value'];
                    break;
                case "year":
                    $year = $elem['value'];
                    break;
                case "level":
                    $level = $elem['value'];
                    break;
                case "type":
                    $type = $elem['value'];
                    break;
                case "date_start":
                    $date_start = $elem['value'];
                    break;
                case "date_end":
                    $date_end = $elem['value'];
                    break;
                case "organization":
                    $organization = $elem['value'];
                    break;
                case "location":
                    $location = $elem['value'];
                    break;
            }
        }
        DataBase::SQL(
            "INSERT INTO `events_nirs`(`id_fac`, `id_type_event`, `id_level_event`, `year`, `name`, `date_start`, `date_end`, `location`, `organization`, `is_order`)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            "NO",
            [0, $type, $level, $year, $name, $date_start, $date_end,  $location, $organization, 0]
        );
        $tmp = DataBase::SQL(
            "SELECT MAX(`ID`) FROM `events_nirs`",
            ''
        );
        return $tmp[0]["MAX(`ID`)"];
    }

    static function addChair()
    {
        DataBase::SQL(
            "INSERT INTO `chairs`(`id_fac`, `name`) VALUES (0, '')",
            "NO"
        );
        $tmp = DataBase::SQL(
            "SELECT MAX(`ID`) FROM `chairs`",
            ''
        );
        return $tmp[0]["MAX(`ID`)"];
    }

    static function addWork($idFac, $idEvent)
    {
        DataBase::SQL(
            "INSERT INTO `works`(`id_fac`, `id_event_all`, `place`, `cost`) VALUES (?, ?, 0,0)",
            "NO",
            [$idFac, $idEvent]
        );
        $tmp = DataBase::SQL(
            "SELECT MAX(`ID`) FROM `works`",
            ''
        );
        return $tmp[0]["MAX(`ID`)"];
    }



    static function addAward()
    {
        DataBase::SQL(
            "INSERT INTO `award_list` (`award`) VALUES ('')",
            "NO"
        );
        $tmp = DataBase::SQL(
            "SELECT MAX(`ID`) FROM `award_list`",
            ''
        );
        return $tmp[0]["MAX(`ID`)"];
    }
}
