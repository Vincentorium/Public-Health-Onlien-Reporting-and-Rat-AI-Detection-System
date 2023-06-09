<?php
include "config.php";
extract($_POST);
// Perform a query
$sql = "SELECT * ,
SUBSTRING_INDEX(r.title, ' ', 6)  as mailTitle

FROM `mail` 
LEFT JOIN reports  
on mail.FKrepId = reports.repID
LEFT JOIN user
on reports.repNormalUser = user.userID
Where mail.title='$title'
 ORDER BY mail.dateCreated  
";
 
$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {

$image_data = base64_encode($row['attachment']);
 
$record[] = array(
	'mailId' => $row['id'],
    'dateCreated' => $row['dateCreated'],
	'title' => $row['mailTitle'],
	'content' => $row['content'],
	'FKrepId' => $row['FKrepId'],
	'FKOfficerId' => $row['FKOfficerId'],
	'attachName' => $row['attachName'],
	'isSent' => $row['isSent'],
    'attachment' => $image_data,
    
	'userName' => $row['userName'],
	'repNormalUser' => $row['repNormalUser']);
 }
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>