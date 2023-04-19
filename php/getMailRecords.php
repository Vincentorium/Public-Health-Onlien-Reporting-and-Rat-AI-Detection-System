<?php
include "config.php";
extract($_POST);
// Perform a query
 
 

$sql="SELECT *,u1.type as senderDept ,u1.fullname as mailSenderName, u2.fullname as citizenName,
m.id as mID,  
(select count(*) from mailimage where mailimage.mailId=mID) as images,
if( u1.type != 'complainer',1,0)  as isSentByOfficer  ,
SUBSTRING_INDEX(r.title, ' ', 6)  as mailTitle
FROM mail AS m
LEFT JOIN report  AS r ON m.reportId=r.id

LEFT JOIN user AS u1 ON m.userId=u1.id
LEFT JOIN user AS u2 ON r.userId=u2.id
where  if( u1.type != 'complainer',1,0)=? 
ORDER BY m.timestamp	 DESC";




$stmt = $conn->prepare($sql);


 $stmt->bind_param("i",$isSent);



if (!$stmt) {
    die("Error in statement preparation: " . $conn->error);
}

 

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
 
    'dateCreated' => $row['date'],
	'title' => $row['mailTitle'],
	'content' => $row['content'],
	'FKrepId' => $row['reportId'],
	//'FKOfficerId' => $row['userId'],
 
 
	'isRead' => $row['isRead'],
  
    
	'senderDept' => $row['senderDept'],
	'citizenName' => $row['citizenName'],
	'mailSenderName' => $row['mailSenderName'],
	//'repNormalUser' => $row['userId'],
	'isSentByOfficer' => $row['isSentByOfficer'],
	



	'repTitle' => $row['title']

	);
    }
    echo json_encode($output);
} else {
    echo "No records found.";
}




$stmt->close();




 

?>