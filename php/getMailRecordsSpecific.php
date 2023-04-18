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


 
$sql="SELECT *,u1.type as senderDept ,
u1.fullname as mailSenderName, 
u2.fullname as citizenName,  
 m.id as mID,  
(select count(*) from mailimage where mailimage.mailId=mID)
as images,if( u1.fullname != 'complainer',1,0)  as isSentByOfficer
FROM mail AS m
LEFT JOIN report AS r ON m.reportId=r.id

LEFT JOIN users AS u1 ON m.userId=u1.id
LEFT JOIN users AS u2 ON r.userId=u2.id

WHERE r.id =?";

 

$stmt = $conn->prepare($sql);


if (!$stmt) {
    die("Error in statement preparation: " . $conn->error);
}

//echo ("$repID: ".$repID);
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
		 
    'dateCreated' => $row['date'],
	'title' => $row['title'],
	'content' => $row['content'],
	'FKrepId' => $row['reportId'],
	'FKOfficerId' => $row['userId'],
 

	'images' => $row['images'],
	
	
	
	//'isSent' => $row['isSent'],


	//need recon
	'isRead' => $row['isRead'],
  
    

	'senderDept' => $row['senderDept'],
	'citizenName' => $row['citizenName'],
	'mailSenderName' => $row['mailSenderName'],
	'repNormalUser' => $row['userId'],
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