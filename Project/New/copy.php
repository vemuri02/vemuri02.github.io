<?php?>
<?php
?>

<html>
<head>
    <title>Admin</title>
    <link rel="stylesheet" type="text/css" href="copy.css">
    <script src="admin.js"></script>

</head>
<body>
<header id="main-header">
    <div class="container">
        <h1>Welcome</h1>
    </div>
</header>

<nav id="navbar">
    <div class="container">
        <div class="bgroup">
            <button type="submit">Products</button>
            <button type="submit">Categories</button>
            <button type="submit">Employees</button>

        </div>
        <div id="logout">
            <button type="submit" name="logout">Logout</button>
        </div>



    </div> <!-- container ending here -->
</nav>



<div class="container">
    <div class="inputFields">
        <section id="tabHeader">
            <div class="container">
                <h1>Products</h1>
            </div>
        </section>
        <form class="my-form">
            <div class="form-group">
                <label>ID</label>
                <input type="text" name="ID">
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="ID">
            </div>
            <div class="form-group">
                <label>Quantity</label>
                <input type="text" name="ID">
            </div>
            <div class="form-group">
                <label>Price</label>
                <input type="number" name="ID">
            </div>
            <div class="form-group">
                <label>Category</label>
                <select style="width: 150px">
                    <option value="">Electronics</option>
                    <option value="">Furniture</option>
                </select>
            </div>

        </form>


        <form class="container">
            <div class="buttonClass">
                <div class="button-group">
                    <button type="submit">Add</button>
                </div>
                <div class="button-group">
                    <button type="submit">Edit</button>
                </div>
                <div class="button-group">
                    <button type="submit">Delete</button>
                </div>
                <div class="button-group">
                    <button type="submit">Refresh</button>
                </div>
                <div class="button-group">
                    <button type="submit">Clear</button>
                </div>
            </div>

        </form>

    </div>

</div>




<div class="container">
    <table class="table">
        <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Category</th>

        </thead>
        <tr>
            <td>1</td>
            <td>Apple MacBook</td>
            <td>50</td>
            <td>150000</td>
            <td>Electronics</td>
        </tr>
    </table>
</div>




</header>
</body>



</html>

