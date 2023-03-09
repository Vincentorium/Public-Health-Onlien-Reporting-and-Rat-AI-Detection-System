<?php
include "config.php";
extract($_POST);

 
$datetime=date('Y-m-d H:i:s');
  // Create the SQL statement with placeholders for the values
 
 
 

// Prepare the statement
$stmt_insertRepStatus = $conn->prepare("INSERT INTO repstatus (repStatusID,repStatusType,repStatusDateCreated,repStatusFKreports,repUserID)
 VALUES (?,?,?,?,  ?)");

// Bind the parameters to the placeholders
$stmt_insertRepStatus->bind_param("issii", $repStatusID, $repStatusType, $datetime,  $repID , $repUserID);


$stmt_updateCurrentStatus = $conn->prepare("UPDATE reports SET repCurrentStatus=? WHERE repID=?");
$stmt_updateCurrentStatus->bind_param("si", $repStatusType, $repID);

 


// Execute the statement
if ($stmt_insertRepStatus->execute()) {
 
         if ($stmt_updateCurrentStatus->execute()) {
         echo json_encode(['success' => true]);
      } else {
         echo "Error: " . $sql_insert . "<br>" . $conn->error;
      }
} else {
   echo "Error: " . $sql_insert . "<br>" . $conn->error;
}

// Close the statement and the connection
$stmt_insertRepStatus->close();
$stmt_updateCurrentStatus->close();
$conn->close();


?>