<?php include "header.php"; ?>
<h1>Welcome</h1>
<?php include "math.php";
echo add(5,6)."<br>";
echo sub(6,5)."<br>";
?>
<?php

//mkdir('test1');
//rename('test1','test2');
//rmdir('test2');

$filename='abc.txt';
echo file_get_contents("abc.txt");

$files=scandir('./');
echo "<pre>";
var_dump($files);
echo '</pre>';


function fun(){
    $arr=[
            'Name'=>'Manohar',
        'Age'=>20
    ];
    //echo '<pre>';
    //var_dump($arr);
    //echo '</pre>';


    file_put_contents('sample.txt',$arr);
}

fun();

/*$user=file_get_contents('https://jsonplaceholder.typicode.com/albums');
$val = json_decode($user);
echo '<pre>';
var_dump($val);
echo '</pre>';*/

require_once "Person.php";
//$p=new Person('Manohar','Vemuri');
/*$p->name='Manohar';
$p->lastname='Vemuri';*/
//echo '<br>'.$p->name.' '.$p->lastname;

/*$p->setAge(20);
echo '<br>'.$p->getAge();*/
require_once 'Student.php';
$student =new Student('Manohar','Vemuri',18113251);

/*$p1=new Person();
$p1->name='Teja';
$p1->lastname='Vemuri';
echo '<br>'.$p1->name.' '.$p1->lastname;*/





?>



<?php include "footer.php"; ?>

