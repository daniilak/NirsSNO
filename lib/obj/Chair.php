<?php
/**
 * Справочник кафедр

 * Структура в БД:
 * 1 ID Индекс int(11)
 * 2 id_fac Индекс int(11)
 * 2 chair_name text
 */
class Chair
{
    private $ID;
    private $name;
    private $idFac;

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
     * Get the value of name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }
    /**
     * Update the value of chair name
     *
     * @return  self
     */
    public function updateChairName()
    {
        DataBase::SQL(
            "UPDATE `chairs` SET `chair_name` = ? WHERE `ID` = ?",
            [$this->name, $this->ID]
        );

        return $this;
    }

    /**
     * Get the value of idFac
     */ 
    public function getIdFac()
    {
        return $this->idFac;
    }

    /**
     * Set the value of idFac
     *
     * @return  self
     */ 
    public function setIdFac($idFac)
    {
        $this->idFac = $idFac;

        return $this;
    }

    /**
     * Update the value of idFac
     *
     * @return  self
     */
    public function updateIdFac()
    {
        DataBase::SQL(
            "UPDATE `chairs` SET `chair_name` = ? WHERE `ID` = ?",
            [$this->name, $this->ID]
        );

        return $this;
    }
}
