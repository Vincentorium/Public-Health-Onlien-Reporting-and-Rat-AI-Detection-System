<?php
include "config.php";

try {
    extract($_POST);

    $result = $conn->query("SELECT DISTINCT street FROM `report`;");
    $data = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($data);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

$conn->close();
?>
