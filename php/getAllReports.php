<?php
include "config.php";

// Perform a query
$sql = "SELECT *,rep.id as repID 
FROM `report` as rep 
 
LEFT JOIN repstatus as status 
on rep.id = status.repStatusFKreports
  left join users
on rep.userId=users.id

;";
 
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

	'repType' => $row['type'],
	//'repTypeSpecification' => $row['repTypeSpecification'],
	'repLocationDetail' => $row['address'],
	 
	'repLocationY' => $row['latitude'],
	'repLocationX' => $row['longitude'],
	'repDatePeriodBegin' => $row['date'],
	'repContent' => $row['descr'],
	'repNormalUser' => $row['userId'],


	'repStatusID' => $row['repStatusID'],
	'repStatusType' => $row['repStatusType'],
	'repStatusDateCreated' => $row['repStatusDateCreated'],
	'repStatusFKreports' => $row['repStatusFKreports'],

 
	'userID' => $row['id'],
	'userName' => $row['username'],
	'userDept' => $row['type'],
	'userPassword' => $row['password'], 


	'imgPath' => $row['imgPath'] ,
//need recon: rep
	'repCurrentStatus'=> $row['repCurrentStatus'],
	'repDept' => $row['repDept'],
	'repStreet' => $row['repStreet'],
	'repDatePeriodEnd' => $row['repDatePeriodEnd']

);
 
}
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>