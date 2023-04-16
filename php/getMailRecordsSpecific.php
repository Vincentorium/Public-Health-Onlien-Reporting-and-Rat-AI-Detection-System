<?php
include "config.php";
extract($_POST);
// Perform a query
 


$sqlImage="SELECT * FROM `mailimage`";
 

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
			
				'mailId' => $row['mailId'],
				'name' => $row['name'],
				

				);
    }
    
} else {
    echo "No records found.";
}

































 
$sql="SELECT *,u1.userDept as senderDept ,u1.userName as mailSenderName, u2.userName as citizenName,   m.id as mID,  
(select count(*) from mailimage where mailimage.mailId=mID) as images,if( u1.userDept != 'complainer',1,0)  as isSentByOfficer
FROM mail AS m
LEFT JOIN reports AS r ON m.FKrepId=r.repID

LEFT JOIN users AS u1 ON m.FKOfficerId=u1.userID
LEFT JOIN users AS u2 ON r.repNormalUser=u2.userID

WHERE r.repID =?  ";

 

$stmt = $conn->prepare($sql);


if (!$stmt) {
    die("Error in statement preparation: " . $conn->error);
}


 $stmt->bind_param("i",$repID);

if (!$stmt->execute()) {
    die("Error in statement execution: " . $stmt->error);
}


$result = $stmt->get_result();
$output = array();
// Check if any records were returned
if ($result->num_rows > 0) {
    // Output data of each row
 $index=0;
    while ($row = $result->fetch_assoc()) {
		
        $output[] =     array(
	'mailId' => $row['mID'],
		 
    'dateCreated' => $row['dateCreated'],
	'title' => $row['title'],
	'content' => $row['content'],
	'FKrepId' => $row['FKrepId'],
	'FKOfficerId' => $row['FKOfficerId'],
 

	'images' => $row['images'],
	
	
	
	'isSent' => $row['isSent'],
	'isRead' => $row['isRead'],
  
    

	'senderDept' => $row['senderDept'],
	'citizenName' => $row['citizenName'],
	'mailSenderName' => $row['mailSenderName'],
	'repNormalUser' => $row['repNormalUser'],
	'isSentByOfficer' => $row['isSentByOfficer'],
	
	
	'repTitle' => $row['repTitle']

	
	);
	if( $output[$index]["images"]!=0){
			//use mail id to get images
			$output[$index]["images"]=array();

			for ($i = 0; $i < count($outputImage); $i++) {
				if($outputImage[$i]["mailId"]== $output[$index]["mailId"]){
						($output[$index]["images"])[]=$outputImage[$i]["name"];
				}
			}
			
	}
		$index++;
    }
		

    echo json_encode($output);
} else {
    echo "No records found.";
}




$stmt->close();




 

?>