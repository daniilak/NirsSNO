<?php
/**
 * API (на коленке или для подгрузки со стороны JS)
 * Хотя, это больше список запросов в БД
 */
class API
{
    static function getFacs()
    {
        return DataBase::selectSQL(
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
            'Fac'
        );
    }

    static function getAwards()
    {
        return DataBase::selectSQL(
            "SELECT `ID`,`award` 
             FROM `awards`",
            'Award'
        );
    }

    static function getChairs()
    {
        return DataBase::selectSQL(
            "SELECT `ID`, `id_fac` AS `idFac`, `name` 
             FROM `chairs`",
            'Chair'
        );
    }

    static function getEventTypes()
    {
        return DataBase::selectSQL(
            "SELECT `ID`, `events_nirs_type` AS `type` 
             FROM `events_nirs_types`",
            'EventType'
        );
    }

    static function getEventLevels()
    {
        return DataBase::selectSQL(
            "SELECT `ID`, `events_nirs_level` AS `level` 
             FROM `events_nirs_levels`",
            'EventLevel'
        );
    }

    static function getEvents($year)
    {
        return DataBase::selectSQL(
            "SELECT 
                `ID`,
                `id_type_event` AS `idType`,
                `id_level_event` AS `idLevel`,
                `year`,
                `date_start` AS `dateStart`,
                `date_end` AS `dateEnd`,
                `location`,
                `organization`,
                `is_order` AS `isOrder`
             FROM `events_nirs`
             WHERE `year` = ?",
            'Event',
            [intval($year)]
        );
    }
}
