<?php
include "config.php";

extract($_POST);
// Perform a query

$sql = "SELECT *,rep.id as repID, u.id as userID FROM `report` as rep    
left join users as u
on rep.userId=u.id  where repCurrentStatus = '$status'   ; ";
 


$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {



 

// Create an associative array with both binary image data and other data
$record[] = array(

	//need recon
    'repTitle' => $row['repTitle'],
	'repCurrentStatus'=> $row['repCurrentStatus'],
	

	'repID' => $row['repID'],

	'repDateSubmit' => $row['timestamp'],
	'repType' => $row['type'],
	//'repTypeSpecification' => $row['repTypeSpecification'],
	'repLocationDetail' => $row['address'],
 
	'repLocationY' => $row['latitude'],
  
//	'repDatePeriodBegin' => $row['repDatePeriodBegin'],
//	'repDatePeriodEnd' => $row['repDatePeriodEnd'],
	'repContent' => $row['descr'],

	'repNormalUser' => $row['userId'],




	'repDept' => $row['repDept'],


	'userID' => $row['userID'],
	'userName' => $row['username'],
	'userDept' => $row['type'],
	'userPassword' => $row['password'], 


 
	 
    'imgPath' =>$row['imgPath']);
 }
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>