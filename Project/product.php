<?php
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=products_crud','root','manu');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

$search=$_GET['search']??'';
if($search){
    echo $search;
    $statement=$pdo->prepare('select * from products where title LIKE :title order by date desc');
    $statement->bindValue(':title',"%$search%");

}
else{
    $statement=$pdo->prepare('select * from products order by date desc');
}
$statement->execute();
$products=$statement->fetchAll(PDO::FETCH_ASSOC);
?>




<!doctype html>
<html lang="en">
<head>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Product</title>
    <link rel="stylesheet" href="app.css">

</head>
<body>
<h1>Products</h1>


<p>
    <a href="create.php" class="btn btn-success">Create</a>
</p>

<form>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search" name="search">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit">Search</button>
        </div>
    </div>
</form>






<table class="table">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Date</th>
        <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($products as $i=>$product): ?>
    <tr>
        <th scope="row"><?php echo $i+1 ?></th>
        <td>
            <img src="<?php echo $product['img']?>" class="thumb-img">
        </td>
        <td><?php echo $product['title'] ?></td>
        <td><?php echo $product['price'] ?> </td>
        <td><?php echo $product['date']?></td>

        <td>
            <button type="button" class="btn-outline-primary">Edit</button>
            <button type="button" class="btn-outline-primary">Delete</button>
        </td>
    </tr>



    <?php endforeach; ?>
    </tbody>
</table>


</body>
</html>