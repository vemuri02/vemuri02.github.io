<?php


require_once 'Person.php';
class Student extends Person
{
    public $id;
    public function __construct($fname,$lname,$sid)
    {
        parent::__construct($fname, $lname);
        $this->id=$sid;
        $this->age=20;
        echo '<br>SID:'.$sid.'<br>'.$fname.' '.$lname.' is '.$this->age.' years old';

    }


}