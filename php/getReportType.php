<?php
include "config.php";

try {
    extract($_POST);

    $result = $conn->query("SELECT DISTINCT type 
    FROM `report` as rep
  
    where (SELECT status.repStatusType FROM `repstatus` as status WHERE status.repStatusFKreports=rep.id  Order BY status.repStatusDateCreated  DESC limit 1) != 'unapproved'   
    ;");
    $data = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($data);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

$conn->close();
?>
