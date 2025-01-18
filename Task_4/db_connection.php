<?php

function getConnection()
{
    // Database credentials (replace with your actual credentials)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "login_authentication";
    
    try {
        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            throw new Exception("Connection Failed: " . $conn->connect_error);
        }

        return $conn;

    } catch (Exception $e) {
        echo "Database Connection Error: " . $e->getMessage();
        exit();
    }
}

?>