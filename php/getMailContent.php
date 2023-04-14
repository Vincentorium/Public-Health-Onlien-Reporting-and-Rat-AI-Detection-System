<?php
include "config.php";
extract($_POST);
// Perform a query
 
$sql="SELECT *,m.id as mID,img.id as imgID FROM mail AS m

LEFT JOIN mailimage AS img ON m.id=img.mailId
LEFT JOIN reports AS r ON m.FKrepId=r.repID
LEFT JOIN users AS u ON r.repNormalUser=u.userID
WHERE m.id=?
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
	'FKOfficerId' => $row['FKOfficerId'],
 	'name' => $row['name'],
	'isSent' => $row['isSent'],
	'isRead' => $row['isRead'],
  
    
	'userName' => $row['userName'],
	'repNormalUser' => $row['repNormalUser'],

	'repTitle' => $row['repTitle']

	);
    }
    echo json_encode($output);
} else {
    echo "No records found.";
}




$stmt->close();




 

?>