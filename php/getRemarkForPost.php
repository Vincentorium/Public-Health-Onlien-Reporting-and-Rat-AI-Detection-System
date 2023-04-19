<?php
include "config.php";
extract($_POST);






$sqlImage="SELECT * FROM `reportStatusimage`";
 

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
			
				'reportStatusId' => $row['reportStatusId'],
				'name' => $row['name'],
				

				);
    }
    
} else {
    echo "No records found.";
}


 






// Perform a query
 

$sql = "SELECT * ,repS.repStatusID as repStatusID,
(select count(*) from reportStatusimage where reportStatusimage.reportStatusId=repStatusID)
as images
FROM `repstatus` as repS
left join user on user.id = repS.repUserID 
where repS.repStatusFKreports='$repID' and user.type not in('Operator','complainer')
order by repS.repStatusDateCreated;
";





$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data
$statusPre='approved';
$output = array();
if (mysqli_num_rows($result) > 0) {
	$index=0;
    while ($row = mysqli_fetch_assoc($result)) {

				
				// Create an associative array with both binary image data and other data
				$output[] = array(

					'userID' => $row['id'],
					'userName' => $row['fullname'],
					'userDept' => $row['type'],
					'images' => $row['images'],

					'repStatusID' => $row['repStatusID'],
					'repStatusType' => $row['repStatusType'],
					'repStatusDateCreated' => $row['repStatusDateCreated'],
					'repStatusFKreports' => $row['repStatusFKreports'],
					'repUserID' => $row['repUserID'],
					'repStatusRemark' => $row['repStatusRemark'],
					 
					'repStatusAttachName' => $row['repStatusAttachName'],

					
					'statusPre' => $statusPre,
				 );

					$statusPre=$row['repStatusType'];
				

				if( $output[$index]["images"]!=0){
					
						//use mail id to get images
						$output[$index]["images"]=array();

						for ($i = 0; $i < count($outputImage); $i++) {
							if($outputImage[$i]["reportStatusId"]== $output[$index]["repStatusID"]){
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