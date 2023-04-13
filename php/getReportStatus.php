<?php
include "config.php";

extract($_POST);
// Perform a query
 
$sql = "SELECT repStatusDateCreated, repStatusType FROM repstatus WHERE repStatusFKreports = ?";

 
 
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $rep_fk_reports);
$stmt->execute();
$results = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

  
  
 
if($results!=null){ 
 
			echo  json_encode($results);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>