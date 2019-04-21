<?php

/**
 * Справочник типов наград

 * Структура в БД:
 * 1 ID Индекс int(11)
 * 2 award varchar(255)
 */
class Award
{
    private $ID;
    private $award;

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
     * Get the value of award
     */
    public function getAward()
    {
        return $this->award;
    }

    /**
     * Set the value of award
     *
     * @return  self
     */
    public function setAward($award)
    {
        $this->award = $award;

        return $this;
    }

    /**
     * Update the value of award
     *
     * @return  self
     */
    public function updateAward()
    {
        DataBase::SQL(
            "UPDATE `award_list` SET `award` = ? WHERE `ID` = ?",
            [$this->award, $this->ID]
        );

        return $this;
    }
}
