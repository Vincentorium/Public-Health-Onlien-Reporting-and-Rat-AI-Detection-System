<?php
include "config.php";

extract($_POST);
// Perform a query

$sql = "SELECT *, 
rep.timestamp as repDate,
rep.id as repID, u.id as userID ,
rep.type as repType,
u.type as userType,
(select status.repStatusType from `repstatus` as status WHERE status.repStatusFKreports=rep.id  
   Order BY status.repStatusDateCreated  DESC limit 1) as repCurrentStatus

FROM `report` as rep  
left join user as u
on rep.userId=u.id
 
where   street= '$repStreet'

and (select status.repStatusType from `repstatus` as status WHERE status.repStatusFKreports=rep.id   
  Order BY status.repStatusDateCreated  DESC limit 1)
NOT IN ('unapproved')
 
ORDER BY
  CASE WHEN userID =14 THEN 0 ELSE 1 END,  
  repDate  DESC; 
";
 
$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {




		 

			// Create an associative array with both binary image data and other data
			$record[] = array(
				'repID' => $row['repID'],
				'repTitle' => $row['title'],
				'repDateSubmit' => $row['repDate'],
				'repType' => $row['repType'],
//				'repTypeSpecification' => $row['repTypeSpecification'],
				'repLocationDetail' => $row['address'],
						'repLocationY' => $row['latitude'],
	'repLocationX' => $row['longitude'],
			
			'repDatePeriodBegin' => $row['date'],		
		 	'repContent' => $row['descr'],
				'repContent' => $row['descr'],
				'repNormalUser' => $row['userId'],
		
		'repDept' => $row['dept'],
				'repCurrentStatus'=> $row['repCurrentStatus'],
					'repStreet'=> $row['street'],

				'userID' => $row['id'],
	'userName' => $row['fullname'],
	'userDept' => $row['userType'],
	'userPassword' => $row['password'], 

				
			 );
			}
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>