<?php
class Fac
{
    private $ID;
    private $idLkChuvsu;
    private $name;
    private $countStudents;
    private $countTeachers;
    private $description;
    private $fullName;
    private $decan;
    private $photoURL;
    private $pass;

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
     * Get the value of idLkChuvsu
     */
    public function getIdLkChuvsu()
    {
        return $this->idLkChuvsu;
    }

    /**
     * Set the value of idLkChuvsu
     *
     * @return  self
     */
    public function setIdLkChuvsu($idLkChuvsu)
    {
        $this->idLkChuvsu = $idLkChuvsu;

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
     * Get the value of countStudents
     */
    public function getCountStudents()
    {
        return $this->countStudents;
    }

    /**
     * Set the value of countStudents
     *
     * @return  self
     */
    public function setCountStudents($countStudents)
    {
        $this->countStudents = $countStudents;

        return $this;
    }

    /**
     * Get the value of countTeachers
     */
    public function getCountTeachers()
    {
        return $this->countTeachers;
    }

    /**
     * Set the value of countTeachers
     *
     * @return  self
     */
    public function setCountTeachers($countTeachers)
    {
        $this->countTeachers = $countTeachers;

        return $this;
    }

    /**
     * Get the value of description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of fullName
     */
    public function getFullName()
    {
        return $this->fullName;
    }

    /**
     * Set the value of fullName
     *
     * @return  self
     */
    public function setFullName($fullName)
    {
        $this->fullName = $fullName;

        return $this;
    }

    /**
     * Get the value of decan
     */
    public function getDecan()
    {
        return $this->decan;
    }

    /**
     * Set the value of decan
     *
     * @return  self
     */
    public function setDecan($decan)
    {
        $this->decan = $decan;

        return $this;
    }

    /**
     * Get the value of photoURL
     */
    public function getPhotoURL()
    {
        return $this->photoURL;
    }

    /**
     * Set the value of photoURL
     *
     * @return  self
     */
    public function setPhotoURL($photoURL)
    {
        $this->photoURL = $photoURL;

        return $this;
    }

    /**
     * Get the value of pass
     */
    public function getPass()
    {
        return $this->pass;
    }

    /**
     * Set the value of pass
     *
     * @return  self
     */
    public function setPass($pass)
    {
        $this->pass = $pass;

        return $this;
    }
}
