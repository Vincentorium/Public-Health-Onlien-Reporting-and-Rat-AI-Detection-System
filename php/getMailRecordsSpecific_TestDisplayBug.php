<?php
include "config.php";
extract($_POST);
// Perform a query
$sql = "SELECT * 
FROM `mail` ";
 
 
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
	'attachName' =>'1',
	'isSent' => $row['isSent'],
	'isRead' => $row['isRead'],
    'attachment' => '1',

	'userName' =>'1',
	'posterName' => '1',
	'repNormalUser' =>'1',

	'repTitle' => '1'

	);




 }
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>