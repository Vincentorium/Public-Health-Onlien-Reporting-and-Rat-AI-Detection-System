<?php
include "config.php";
  
 
 
$result = $conn->query("SELECT  count(report.id) as numOfRep FROM `report`;");
$data = $result->fetch_assoc();

// 将新记录数量打包为JSON格式
header("Content-Type: application/json");
echo json_encode($data);

// 关闭数据库连接
$conn->close();
?>
