<?php
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $password_confirm = $_POST['password_confirm'];

    if ($password === $password_confirm) {
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        
        $conn = getConnection();
        $query = "INSERT INTO users (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $username, $hashed_password);
        
        if ($stmt->execute()) {
            header('Location: login.php');
        } else {
            echo "Error: " . $stmt->error;
        }

        $conn->close();
    } else {
        echo "Passwords do not match!";
    }
}
?>
