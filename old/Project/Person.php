<?php


class Person{
    public  $name;
    public $lastname;
    protected  $age=18;
    public function __construct($fname,$lname){
        $this->name=$fname;
        $this->lastname=$lname;
        //echo '<br>'.$this->name.' '.$this->lastname;
    }
    public function setAge($age){
        $this->age=$age;
    }
    public function getAge(){
        return $this->age;
    }


}

