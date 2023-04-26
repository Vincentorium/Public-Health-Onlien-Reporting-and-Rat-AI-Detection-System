<?php
include "config.php";


$sqlImage="SELECT * FROM `camera`;";
 

$stmtImage = $conn->prepare($sqlImage);


if (!$stmtImage) {
    die("Error in statement preparation: " . $conn->error);
}
 

if (!$stmtImage->execute()) {
    die("Error in statement execution: " . $stmtImage->error);
}


$result = $stmtImage->get_result();
$outputImage = array();
// Check if any records were returned
if ($result->num_rows > 0) {
    // Output data of each row
 
    while ($row = $result->fetch_assoc()) {
		
					$outputImage[] =     array(

				'id' => $row['id'],
				'y' => $row['latitude'],
				'x' => $row['longitude'],
				'name' => $row['name'],
				);
    }
    	echo  json_encode($outputImage);
} else {
    echo "No records found.";
}








 
// Close connection
mysqli_close($conn);


?>