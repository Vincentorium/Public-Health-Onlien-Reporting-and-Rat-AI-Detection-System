<?php
include "config.php";
extract($_POST);
// Perform a query
$sql = "SELECT * FROM mail as m
left join mailimage as img
on m.id=img.mailId
left join reports as r
on m.FKrepId=r.repID
left join users as u 
on r.repNormalUser=u.userID
where m.isSent='isSent'
and m.FKOfficerId='$userID'
ORDER by  m.dateCreated DESC";
 
$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {

$image_data = base64_encode($row['attachment']);
 
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
    'attachment' => $image_data,
    
	'userName' => $row['userName'],
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