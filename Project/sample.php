<html>
<body>
<h1>hello</h1>
<?php
echo "hello world";
echo "<br>";
echo 5+6;
echo "<button type='button'>Click Here!</button>";
/*
 multi Comment Lines
 */

$name='manohar';
$age=20;
$isMale=true;
$height=1.85;
echo  "<br>".$name." is ".$age." years old.<br>";
echo $isMale."<br>";
echo $height."<br>";

echo gettype($name)."<br>";


echo is_string($name);

var_dump($name,$age,$height,$isMale);
echo "<br>".isset($address);


define('PI',3.14);
echo PI.'<br>';


echo PHP_INT_MAX.'<br>';

$a=5;
$b=6;
echo $a+$b;


$str='12.5';
$number=(float)$str;

echo '<br>'.$number;


echo "<br>".floor(2.6);
echo "<br>".round(2.6);
echo "<br>".ceil(2.4);



$num=123456.7897476482;
echo "<br>".number_format($num,3,'.','');

$str1='manohar';
$str2='vemuri';
echo '<br>'.$str1." ".$str2;


$string="       Hello World        ";

echo '<br>'.strlen($string);
echo '<br>'.trim($string);
echo '<br>'.ltrim($string);
echo '<br>'.rtrim($string);
echo '<br>'.str_word_count($string);
echo '<br>'.strrev($string);
echo '<br>'.strtoupper($string);
echo '<br>'.strtolower($string);




$longtext="
Hello
My Name is 
Manohar
";
echo "<br>".$longtext;
echo "<br>".nl2br($longtext);

$longtext1="
<b>Hello</b> 
My Name is 
<b>Manohar</b>
";
echo nl2br(htmlentities($longtext1))."<br>";




$fruits=['Banana','Apple','Orange'];
echo '<pre>';
var_dump($fruits);
echo '</pre>';


$fruits[1]='Mango';
echo $fruits[1]."<br>";

$fruits[]='Apple';


echo '<pre>';
var_dump($fruits);
echo '</pre>';


echo  count($fruits)."<br>";

array_push($fruits,'pineapple');

echo '<pre>';
var_dump($fruits);
echo '</pre>';


array_pop($fruits);

echo '<pre>';
var_dump($fruits);
echo '</pre>';



$string1='Mango,Banana,Orange';
echo '<pre>';
var_dump(explode(",",$string1));
echo '</pre>';


echo '<br>'.implode(', ',$fruits);


echo '<pre>';
var_dump(array_search("Mango",$fruits));
echo '</pre>';

$string2=['Mango','Banana','Orange'];
echo'<pre>';
var_dump(array_merge($string2,$fruits));
echo '</pre>';




$person=[
        'name'=>'Manohar',
    'age'=>20,
    'hobbies'=>['Video Games','Coding']
];

echo '<pre>';
var_dump($person);
echo '</pre>';


echo $person['name'];


if(!isset($person['address'])){
    $person['address']='unknown';
}

echo '<pre>';
var_dump($person);
echo '</pre>';




echo '<pre>';
var_dump(array_values($person));
echo '</pre>';



$multi=[
        ['title'=> 't1','completed'=>true],
    ['title'=>'t2','completed'=>false]
];


echo '<pre>';
var_dump($multi);
echo '</pre>';










$age=20;
/*
if($age<18){
    echo "<br>you're minor";
}
else{
    echo "<br>you're major";
}
*/

echo "<br>".$age>18?" You're Minor":" You're Major";

$ch=10;
switch ($ch){
    case 1:echo "<br> Case 1";
            break;
    case 2:echo "<br> Case 2";
            break;
    default:echo "<br>invalid";
            break;

}



for($i=0;$i<5;$i++){
    echo "<br>".$i;
}

foreach ($fruits as $i=>$fruit) {
    echo '<br>'.$i.":".$fruit;
    
}

$person=[
        'name'=>'manohar',
    'age'=>20,
    'hobbies'=>['video games','movies']

];

foreach ($person as $key=>$value){
    if(is_array($value)){
        echo "<br>".$key." ".implode(",",$value).'<br>';
    }
    else{
        echo "<br>".$key.":".$value.'<br>';
    }

}

function hello(){
    echo '<br>Hello World';
}
hello();



function fun(...$num){
    echo '<pre>';
    var_dump($num);
    echo '</pre>';
}
fun(1,2,3,4,5,6,7,8,9);























?>
</body>
</html>