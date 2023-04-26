<?php
include "config.php";
extract($_POST);
 
$specific=$mode==0?" and  c.id='$id'":"";

$sql="SELECT * FROM mousecountingrecord as rcd 
left JOIN `camera`  as c on c.id = rcd.cameraID
where rcd.date='$date'
".$specific."

 ";
 

$stmt = $conn->prepare($sql);


if (!$stmt) {
    die("Error in statement preparation: " . $conn->error);
}
 

if (!$stmt->execute()) {
    die("Error in statement execution: " . $stmt->error);
}


$result = $stmt->get_result();
$output = array();
// Check if any records were returned
if ($result->num_rows > 0) {
    // Output data of each row
 
    while ($row = $result->fetch_assoc()) {
		
					$output[] =     array(

				'date' => $row['date'],
				'name' => $row['name'],
				'timeStart' => $row['timeStart'],
                'cameraID' => $row['cameraID'],
                 'count' => $row['count'],
				);
    }
    	echo  json_encode($output);
} else {
    echo "No records found.";
}








 
// Close connection
mysqli_close($conn);


?>