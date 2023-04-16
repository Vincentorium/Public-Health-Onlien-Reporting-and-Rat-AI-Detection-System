<?php
include "config.php";
extract($_POST);
// Perform a query
$sql = "SELECT *,u1.userName as mailSender  ,u2.userName as posterName FROM `mail` 
LEFT JOIN reports  
on mail.FKrepId = reports.repID
LEFT JOIN users as u1
on mail.FKOfficerId = u1.userID
Left JOIN users as u2
on reports.repNormalUser=u2.userID
Where 
FKrepId='$repID'

";
 
 
$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {

 
 
$record[] = array(
	'mailId' => $row['id'],
    'dateCreated' => $row['dateCreated'],
	'title' => $row['title'],
	'content' => $row['content'],
	'FKrepId' => $row['FKrepId'],
	'FKOfficerId' => $row['FKOfficerId'],
	'attachName' => $row['attachName'],
	'isSent' => $row['isSent'],
	'isRead' => $row['isRead'],
    'imgPanth' => $row['imgPath'],

	'userName' => $row['mailSender'],
	'posterName' => $row['posterName'],
	'repNormalUser' => $row['repNormalUser'],

	'repTitle' => $row['repTitle']

	);




 }
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>