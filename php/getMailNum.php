<?php
include "config.php";
  
extract($_POST);
 
 
$result = $conn->query("SELECT count(u1.id) as numOfMail 
FROM mail AS m
LEFT JOIN user AS u1 ON m.userId=u1.id
where  u1.type  = 'complainer';");
$data = $result->fetch_assoc();

 
header("Content-Type: application/json");
echo json_encode($data);

 
$conn->close();
?>
