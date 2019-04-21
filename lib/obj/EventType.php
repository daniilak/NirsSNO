<?php
//

class EventType 
{
    private $ID;
    private $type;
    
    function __construct($ID, $type) 
    {
        $this->ID = $ID;
        $this->type = $type;
    }
    
    public function getID()
    {
        return $this->ID;
    }
    
    public function setID($val)
    {
        $this->ID = $val;
    }
// 	ID
// 	events_nirs_type
}