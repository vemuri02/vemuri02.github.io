<?php ?>
<html>
<head>
    <script src="admin.js"></script>
    <link rel="stylesheet" href="adminStyle.css">
    <title>Admin</title>
</head>


<body>
<h2><center>Admin</center></h2><br>
<div class="tab">
    <button class="tablink" onclick="openTab(event,'Product')">Product</button>
    <button class="tablink" onclick="openTab(event,'Category')">Category</button>
    <button class="tablink" onclick="openTab(event,'Employees')">Employees</button>
    <div class="logout">
        <button class="logout">Logout</button>
    </div>
</div>

<div id="Product" class="tabcontent">
    <div class="productClass">
        <h5>ID</h5>
        <input type="text">
        <h5>Name</h5>
        <input type="text">
        <h5>Price</h5>
        <input type="text">
        <h5>Quantity</h5>
        <input type="text">
        <h5>Category</h5>
        <select name="role" class="role">
            <option value="1">Furniture</option>
            <option value="2">Electronics</option>
        </select>
        <br>
        <div class="buttonClass">
            <button type="button" name="add">Add</button>
            <button type="button" name="edit">Edit</button>
            <button type="button" name="delete">Delete</button>
            <button type="button" name="clear">Clear</button>
            <button type="button" name="refresh">Refresh</button>
        </div>

        <br>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
            </tr>
            </thead>
            <tbody>
            <td>1</td>
            <td>Chair</td>
            <td>50</td>
            <td>500</td>
            <td>Furniture</td>
            </tbody>
        </table>
    </div>
</div>
<div id="Category" class="tabcontent">
    <div class="categoryClass">
        <h1>Category</h1>
    </div>
</div>
<div id="Employees" class="tabcontent">
    <div class="employeeClass">
        <h1>Employee</h1>
    </div>
</div>
</body>
</html>
