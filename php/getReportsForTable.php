<?php
include "config.php";

// Perform a query
$sql = "SELECT *,
rep.id as repID,
rep.type as repType,
FROM `reports` as rep 
INNER JOIN repstatus as status 
on rep.repID = status.repStatusFKreports;";
 


$ssql = "SELECT *,
rep.id as repID, 
u.id as userID,
u.type as userType,
rep.type as repType,
u.fullname as userName

FROM `report` as rep    
left join user as u
on rep.userId=u.id  
where repCurrentStatus = '$status'   ; ";










$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {


 

// Create an associative array with both binary image data and other data
$record[] = array(
	'repID' => $row['repID'],
    'repTitle' => $row['repTitle'],
	'repDateSubmit' => $row['timestamp'],
	'repType' => $row['repType'],
  
	 
	'repDept' => $row['repDept'],


	'repStatusID' => $row['repStatusID'],
	'repStatusType' => $row['repStatusType'],
	'repStatusDateCreated' => $row['repStatusDateCreated'],
	'repStatusCreatedAuthor' => $row['repStatusCreatedAuthor'],
	'repStatusFKreports' => $row['repStatusFKreports'],
	 
    'imgPath' =>$row['imgPath']);
 }
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>