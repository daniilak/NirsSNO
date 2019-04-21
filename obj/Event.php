<?php
/**
 * Класс мероприятий по показателям НИРС
 * Структура в БД:
 * 1 ID Индекс int(11)
 * 2 id_type_event Индекс int(11)
 * 3 id_level_event Индекс int(11)
 * 4 year int(4)
 * 5 date_start date
 * 6 date_end date
 * 7 location text
 * 8 organization text
 * 9 is_order tinyint(1)
 */
class Event
{
    private $ID;
    private $idType;
    private $idLevel;
    private $year;
    private $dateStart;
    private $dateEnd;
    private $location;
    private $organization;
    private $isOrder;

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
     * Get the value of idType
     */
    public function getIdType()
    {
        return $this->idType;
    }

    /**
     * Set the value of idType
     *
     * @return  self
     */
    public function setIdType($idType)
    {
        $this->idType = $idType;

        return $this;
    }

    /**
     * Get the value of idLevel
     */
    public function getIdLevel()
    {
        return $this->idLevel;
    }

    /**
     * Set the value of idLevel
     *
     * @return  self
     */
    public function setIdLevel($idLevel)
    {
        $this->idLevel = $idLevel;

        return $this;
    }

    /**
     * Get the value of year
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Set the value of year
     *
     * @return  self
     */
    public function setYear($year)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * Get the value of dateStart
     */
    public function getDateStart()
    {
        return $this->dateStart;
    }

    /**
     * Set the value of dateStart
     *
     * @return  self
     */
    public function setDateStart($dateStart)
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    /**
     * Get the value of dateEnd
     */
    public function getDateEnd()
    {
        return $this->dateEnd;
    }

    /**
     * Set the value of dateEnd
     *
     * @return  self
     */
    public function setDateEnd($dateEnd)
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    /**
     * Get the value of location
     */
    public function getLocation()
    {
        return $this->location;
    }

    /**
     * Set the value of location
     *
     * @return  self
     */
    public function setLocation($location)
    {
        $this->location = $location;

        return $this;
    }

    /**
     * Get the value of organization
     */
    public function getOrganization()
    {
        return $this->organization;
    }

    /**
     * Set the value of organization
     *
     * @return  self
     */
    public function setOrganization($organization)
    {
        $this->organization = $organization;

        return $this;
    }

    /**
     * Get the value of isOrder
     */
    public function getIsOrder()
    {
        return $this->isOrder;
    }

    /**
     * Set the value of isOrder
     *
     * @return  self
     */
    public function setIsOrder($isOrder)
    {
        $this->isOrder = $isOrder;

        return $this;
    }
}
