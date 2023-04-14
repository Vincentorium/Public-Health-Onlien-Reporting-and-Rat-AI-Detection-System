<?php
include "config.php";
extract($_POST);
// Perform a query
 
$sql="SELECT * FROM mail AS m
LEFT JOIN reports AS r ON m.FKrepId=r.repID
LEFT JOIN users AS u ON r.repNormalUser=u.userID
WHERE m.isSent=? AND m.FKOfficerId=?
ORDER BY m.dateCreated DESC";

 

$stmt = $conn->prepare($sql);


if (!$stmt) {
    die("Error in statement preparation: " . $conn->error);
}


 $stmt->bind_param("ii",$isSent, $userID);

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