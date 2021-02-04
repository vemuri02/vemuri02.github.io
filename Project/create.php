<?php
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=products_crud','root','manu');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);




/*echo '<pre>';
var_dump($_FILES);
echo '</pre>';
exit;*/


$errors=[];
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $title=$_POST['title'];
    $description=$_POST['description'];
    $price=$_POST['price'];
    $date=date('Y-m-d H:i:s');



    if(!$title){
        $errors[]='Product title required';

    }
    if(!$price){
        $errors[]='Price Required';
    }
    if(empty($errors)){
        $image=$_FILES['img']??null;
        if($image){
            move_uploaded_file($image['tmp_name'],'test.jpg');
        }
        $statement=$pdo->prepare("insert into products (title,image,description,price,date)values(:title,:image,:description,:price,:date)");
        $statement->bindValue(':title',$title);
        $statement->bindValue(':image','');
        $statement->bindValue(':description',$description);
        $statement->bindValue(':price',$price);
        $statement->bindValue(':date',$date);
        $statement->execute();
        header('Location: product.php');

    }


}




?>




    <!doctype html>
    <html lang="en">
<head>
    <!-- Bootstrap CSS -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Create Product</title>
    <link rel="stylesheet" href="app.css">

</head>
<body>
<h1>Products</h1>



<?php if(!empty($errors)):?>
<div class="alert alert-danger">
    <?php foreach ($errors as $error):?>
    <div ><?php echo '<br>'.$error ?></div>
    <?php endforeach;?>
</div>
<?php endif; ?>





<form action="" method="POST" enctype="multipart/form-data">
    <div class="mb-3">
        <label class="form-label">Product Image</label><br>
        <input type="file" name="img">
    </div>
    <div class="mb-3">
        <label class="form-label">Product Title</label>
        <input type="text" name="title" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label">Product Description</label>
        <textarea class="form-control" name="description"></textarea>
    </div>
    <div class="mb-3">
        <label class="form-label">Product Price</label>
        <input type="number" step="0.01" name="price" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>


</body>
    </html>
