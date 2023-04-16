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


































$sql_Temp="SELECT *,m.id as mID,img.id as imgID 
FROM mail AS m
LEFT JOIN mailimage AS img ON m.id=img.mailId
LEFT JOIN reports AS r ON m.FKrepId=r.repID
LEFT JOIN users AS u ON r.repNormalUser=u.userID
WHERE r.repID =?
ORDER BY m.dateCreated DESC
GROUP by mID;";

$sql="SELECT *,  m.id as mID,  
(select count(*) from mailimage where mailimage.mailId=mID) as images
FROM mail AS m
LEFT JOIN reports AS r ON m.FKrepId=r.repID
LEFT JOIN users AS u ON r.repNormalUser=u.userID
WHERE r.repID =? ORDER BY m.dateCreated DESC;";

 

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
  
    
	'userName' => $row['userName'],
	'repNormalUser' => $row['repNormalUser'],

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