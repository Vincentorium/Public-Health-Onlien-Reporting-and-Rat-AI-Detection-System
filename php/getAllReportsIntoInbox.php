<?php
include "config.php";

extract($_POST);
// Perform a query
 
$sql = "SELECT *,
rep.id as repID, 
u.id as userID,
u.type as userType,
rep.type as repType,
u.fullname as userName,
(select img.name from reportimage as img where img.reportId=rep.id LIMIT   1) as imgPath,
(select status.repStatusType from `repstatus` as status WHERE status.repStatusFKreports=rep.id  Order BY status.repStatusDateCreated  DESC limit 1) as repCurrentStatus

FROM `report` as rep    
left join user as u
on rep.userId=u.id  
where (SELECT status.repStatusType FROM `repstatus` as status WHERE status.repStatusFKreports=rep.id  Order BY status.repStatusDateCreated  DESC limit 1) = '$status'   ; ";



$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {



 

// Create an associative array with both binary image data and other data
$record[] = array(

	//need recon
    'repTitle' => $row['title'],
	'repCurrentStatus'=> $row['repCurrentStatus'],
	
 
	'repID' => $row['repID'],

	'repDateSubmit' => $row['timestamp'],
	'repType' => $row['repType'],
	//'repTypeSpecification' => $row['repTypeSpecification'],
	'repLocationDetail' => $row['address'],
 
	'repLocationY' => $row['latitude'],
  
 
	'repContent' => $row['descr'],

	'repNormalUser' => $row['userId'],




	'repDept' => $row['dept'],


	'userID' => $row['userID'],
	'userName' => $row['userName'],
	'userDept' => $row['userType'],
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