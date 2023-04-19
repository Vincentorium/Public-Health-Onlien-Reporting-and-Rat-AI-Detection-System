<?php
include "config.php";
extract($_POST);
// Perform a query
 
$sql="SELECT *,m.id as mID,img.id as imgID,
u1.type as senderDept ,
u1.fullname as mailSenderName, 
u2.fullname as citizenName,  
img.name as imgName,
SUBSTRING_INDEX(r.title, ' ', 6)  as mailTitle

FROM mail AS m
LEFT JOIN mailimage AS img ON m.id=img.mailId
LEFT JOIN report AS r ON m.reportId=r.id

LEFT JOIN user AS u1 ON m.userId=u1.id
LEFT JOIN user AS u2 ON r.userId=u2.id

WHERE m.id=?
ORDER BY m.timestamp DESC";

 

$stmt = $conn->prepare($sql);


if (!$stmt) {
    die("Error in statement preparation: " . $conn->error);
}


 $stmt->bind_param("i",$mailID);

if (!$stmt->execute()) {
    die("Error in statement execution: " . $stmt->error);
}


$result = $stmt->get_result();
$output = array();
// Check if any records were returned
if ($result->num_rows > 0) {
    // Output data of each row
 
    while ($row = $result->fetch_assoc()) {
		
        $output[] =     array(
		'mailId' => $row['mID'],
		'imgId' => $row['imgID'],
  
    'dateCreated' => $row['timestamp'],


	'title' => $row['mailTitle'],
	'content' => $row['content'],
	'FKrepId' => $row['reportId'],
	'FKOfficerId' => $row['userId'],

 	'name' => $row['imgName'],
	
	'isRead' => $row['isRead'],
  
    
	'senderDept' => $row['senderDept'],
	'citizenName' => $row['citizenName'],
	'mailSenderName' => $row['mailSenderName'],
	'repNormalUser' => $row['userId'],

	'repTitle' => $row['title']

	);
    }
    echo json_encode($output);
} else {
    echo "No records found.";
}




$stmt->close();




 

?>