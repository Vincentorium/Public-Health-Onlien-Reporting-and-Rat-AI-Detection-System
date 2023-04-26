<?php
include "config.php";
extract($_POST);
 
 

 
$count = 0;
 
 
$id=null;

 
$stmt_insertMail = $conn->prepare(
   "INSERT INTO `camera`(`id`, `latitude`, `longitude`, `name`) VALUES (?,?,?,?)");

// Bind the parameters to the placeholders
$stmt_insertMail->bind_param("idds", $id, $mapLatitude,  $mapLongitude,$name);

          
                  try {
                          $stmt_insertMail->execute(); 
                     
                        echo json_encode(['success' => true]);
                  } catch(PDOException $e) {
                      
                   }
    

// Close the statement and the connection
$stmt_insertMail->close();
 
$conn->close();


?>