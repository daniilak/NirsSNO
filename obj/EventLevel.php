<?php

/**
 * Класс уровней мероприятий

 * Структура в БД:
 * 1 ID Индекс int(11)
 * 2 events_nirs_level varchar(255)
 */
class EventLevel
{
    private $ID;
    private $level;

    /**
     * Get the value of ID
     */ 
    public function getID()
    {
        return $this->ID;
    }

    /**
     * Set the value of ID
     *
     * @return  self
     */ 
    public function setID($ID)
    {
        $this->ID = $ID;

        return $this;
    }

    /**
     * Get the value of level
     */ 
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * Set the value of level
     *
     * @return  self
     */ 
    public function setLevel($level)
    {
        $this->level = $level;

        return $this;
    }


    /**
     * Update the value of level
     *
     * @return  self
     */
    public function updateLevel()
    {
        DataBase::SQL(
            "UPDATE `events_nirs_levels` SET `events_nirs_level` = ? WHERE `ID` = ?",
            [$this->type, $this->ID]
        );

        return $this;
    }
}
