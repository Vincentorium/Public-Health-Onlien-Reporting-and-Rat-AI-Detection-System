<?php
include "config.php";
extract($_POST);
// Perform a query
 
 


$sql="SELECT *,m.id as mID,img.id as imgID ,u1.userDept as senderDept ,u1.userName as mailSenderName, u2.userName as citizenName,   m.id as mID,  
(select count(*) from mailimage where mailimage.mailId=mID) as images,if( u1.userDept != 'complainer',1,0)  as isSentByOfficer
FROM mail AS m
LEFT JOIN mailimage AS img ON m.id=img.mailId
LEFT JOIN reports AS r ON m.FKrepId=r.repID

LEFT JOIN users AS u1 ON m.userId=u1.userID
LEFT JOIN users AS u2 ON r.repNormalUser=u2.userID
where  m.id=?
ORDER BY m.dateCreated DESC";
 

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
    'dateCreated' => $row['dateCreated'],
	'title' => $row['title'],
	'content' => $row['content'],
	'FKrepId' => $row['FKrepId'],
	'userId' => $row['userId'],
 	'name' => $row['name'],
	'isSentByOfficer' => $row['isSentByOfficer'],
	'isRead' => $row['isRead'],
  
    	'senderDept' => $row['senderDept'],
	'citizenName' => $row['citizenName'],
	'mailSenderName' => $row['mailSenderName'],
	'repNormalUser' => $row['repNormalUser'],
	'isSentByOfficer' => $row['isSentByOfficer'],
	



 
	'repTitle' => $row['repTitle']

	);
    }
    echo json_encode($output);
} else {
    echo "No records found.";
}




$stmt->close();




 

?>