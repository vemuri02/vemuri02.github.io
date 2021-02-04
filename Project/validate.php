
<?php
$pdo=new PDO('mysql:host=localhost;port=3306;dbname=manu','root','manu');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);


$username=$_POST['uid'];
    $password=$_POST['passw'];
    $role=$_POST['role'];
    $statement=$pdo->prepare('select email,password from credentials where email = :mailid and password = :pass and role =:role');
    $statement->bindValue(':mailid',"$username");
    $statement->bindValue(':pass',"$password");
    $statement->bindValue(':role',"$role");
    $statement->execute();
    $c=$statement->fetchAll(PDO::FETCH_ASSOC);
    if(!empty($c)){
        echo '<br>Success';
        header('Location:./New/admin.php');
    }
    else{
        echo '<br>Fail';
    }


?>

