<?php

/**
 * Класс типов мероприятий

 * Структура в БД:
 * 1 ID Индекс int(11)
 * 2 events_nirs_type varchar(255)
 */
class EventType
{
    private $ID;
    private $type;


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
     * Get the value of type
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Update the value of type
     *
     * @return  self
     */
    public function updateType()
    {
        DataBase::SQL(
            "UPDATE `events_nirs_types` SET `events_nirs_type` = ? WHERE `ID` = ?",
            [$this->type, $this->ID]
        );

        return $this;
    }
}
