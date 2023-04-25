<?php
include "config.php";
extract($_POST);

$sqlImage="SELECT * FROM `reportimage`";
 

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
				'reportId' => $row['reportId'],
				'name' => $row['name'],
				);
    }
    
} else {
    echo "No records found.";
}















// Perform a query
$sql = "
SELECT *,
rep.id as repID,
rep.type as repType,
rep.dept as repDept,
u.type as userDept,
u.id as userID,
u.fullname as userName,
status.repStatusID as repStatusID,
(select count(*) from reportimage where reportimage.reportId=repID)as images,
(select status.repStatusType from `repstatus` as status WHERE status.repStatusFKreports=rep.id  Order BY status.repStatusDateCreated  DESC limit 1) as repCurrentStatus

FROM `report` as rep
left join `repstatus` as status 
on rep.id = status.repStatusFKreports
left join user as u
on rep.userId=u.id
where rep.id=$repid
 
order by STATUS.repStatusDateCreated DESC 
limit 1;
 
";
 
$result = mysqli_query($conn, $sql);

$output = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
		$index=0;
    while ($row = mysqli_fetch_assoc($result)) {


				// Create an associative array with both binary image data and other data
				$output[] = array(
					'repID' => $row['repID'],
					'repTitle' => $row['title'],
					'repDateSubmit' => $row['timestamp'],

					'repType' => $row['repType'],
					//'repTypeSpecification' => $row['repTypeSpecification'],
					'repLocationDetail' => $row['address'],
					
					'repLocationY' => $row['latitude'],
					'repLocationX' => $row['longitude'],
					'repDatePeriodBegin' => $row['date'],
					'repContent' => $row['descr'],
					'repNormalUser' => $row['userId'],
					'images' => $row['images'],

					'repStatusID' => $row['repStatusID'],
					'repStatusType' => $row['repStatusType'],
					'repStatusDateCreated' => $row['repStatusDateCreated'],
					'repStatusFKreports' => $row['repStatusFKreports'],

				
					'userID' => $row['userID'],
					'userName' => $row['userName'],
					'userDept' => $row['type'],
					'userPassword' => $row['password'], 


					//'imgPath' => $row['imgPath'] ,
				//need recon: rep
					'repCurrentStatus'=> $row['repCurrentStatus'],
					'repDept' => $row['repDept'],
					'repStreet' => $row['street'],
			 

					);
					if( $output[$index]["images"]!=0){
									
										//use mail id to get images
										$output[$index]["images"]=array();

										for ($i = 0; $i < count($outputImage); $i++) {
											if($outputImage[$i]["reportId"]== $output[$index]["repID"]){
													($output[$index]["images"])[]=$outputImage[$i]["name"];
											}
										}
										
								}
					$index++;


 
}
			echo  json_encode($output);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>