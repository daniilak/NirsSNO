<?php
class News
{
    private $ID;
    private $text;

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
     * Get the value of text
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Set the value of text
     *
     * @return  self
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Update the value of text
     *
     * @return  self
     */
    public function updateText()
    {
        DataBase::SQL(
            "UPDATE`news` SET `text` = ? WHERE `ID` = ?",
            "NO",
            [$this->text, $this->ID]
        );

        return $this;
    }

    /**
     * Remove
     *
     * @return  self
     */
    public function remove()
    {
        DataBase::SQL(
            "DELETE FROM `news` WHERE `ID` = ?",
            "NO",
            [$this->ID]
        );

        return $this;
    }
}
