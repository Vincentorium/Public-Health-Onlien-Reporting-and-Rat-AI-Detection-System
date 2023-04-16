<?php
include "config.php";
extract($_POST);
// Perform a query
 
$sql_temp="SELECT * FROM mail AS m
LEFT JOIN reports AS r ON m.FKrepId=r.repID
LEFT JOIN users AS u ON r.repNormalUser=u.userID
WHERE m.isSent=? AND m.FKOfficerId=?
ORDER BY m.dateCreated DESC";

 




$sql="SELECT *,u1.userDept as senderDept ,u1.userName as mailSenderName, u2.userName as citizenName,   m.id as mID,  
(select count(*) from mailimage where mailimage.mailId=mID) as images,if( u1.userDept != 'complainer',1,0)  as isSentByOfficer
FROM mail AS m
LEFT JOIN reports AS r ON m.FKrepId=r.repID

LEFT JOIN users AS u1 ON m.FKOfficerId=u1.userID
LEFT JOIN users AS u2 ON r.repNormalUser=u2.userID
where  if( u1.userDept != 'complainer',1,0)=? 
ORDER BY m.dateCreated DESC";




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
	'mailId' => $row['id'],
 
    'dateCreated' => $row['dateCreated'],
	'title' => $row['title'],
	'content' => $row['content'],
	'FKrepId' => $row['FKrepId'],
	'FKOfficerId' => $row['FKOfficerId'],
 
 
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