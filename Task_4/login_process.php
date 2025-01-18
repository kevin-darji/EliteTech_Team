<?php
session_start();
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = getConnection();

    $query = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            header('Location: secured_page.php');
        } else {
            $_SESSION['error'] = "Invalid password!";
            header('Location: login.php');
        }
    } else {
        $_SESSION['error'] = "No user found with that username!";
        header('Location: login.php');
    }
    $conn->close();
}
?>
