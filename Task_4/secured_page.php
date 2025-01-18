<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secured Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2 style="font-size: 28px; color: #333; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Welcome, <?php echo $_SESSION['username']; ?>!</h2>
    <p>This is a secured page. Only logged-in users can see this.</p>
    <a href="logout.php" class="logout-btn">Logout</a>
</div>

</body>
</html>
