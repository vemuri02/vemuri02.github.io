<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">

        <title> Login </title>
    </head>
    <body>
        <div class="loginPage">
            <div class="form">
                <div class="login">
                    <div class="login-header">
                        <h3>Login</h3>
                    </div>
                </div>
                <form class="login-form" method="post" action="validate.php">
                    <select name="role" class="role" >
                        <option value="Admin">Admin</option>
                        <option value="Employee">Employee</option>
                    </select>
                    <input type="text" name="uid" placeholder="Username"/>
                    <input type="password" name="passw" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </body>
</html>