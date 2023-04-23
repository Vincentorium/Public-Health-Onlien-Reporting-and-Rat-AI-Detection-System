<?php
include "config.php";
  
extract($_POST);
 
 
$result = $conn->query("SELECT COUNT(*) AS newRecords FROM records WHERE updated_at > DATE_SUB(NOW(), INTERVAL 5 SECOND)");
$data = $result->fetch_assoc();

 
header("Content-Type: application/json");
echo json_encode($data);

 
$conn->close();
?>
