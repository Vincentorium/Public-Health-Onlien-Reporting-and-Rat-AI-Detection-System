<?php
include "config.php";
extract($_POST);
 var_dump($_POST);

 echo $content;
$datetime=date('Y-m-d H:i:s');
 
 
if (isset($_FILES['image']) ) {
  
 $imageName = $_FILES['image']['name']; 
move_uploaded_file($_FILES['image']['tmp_name'], 'uploads/' . $imageName);
   
} 

$id=null;


// Prepare the statement
$stmt_insertMail = $conn->prepare(
   "INSERT INTO `mail`
   (`id`, `dateCreated`,  `content`,  `FKrepID`, `FKOfficerId`) 
VALUES (?,?,?,?,?,)");

// Bind the parameters to the placeholders
$stmt_insertMail->bind_param("issii", $id, $datetime,  $content,
  $FKrepId,$FKOfficerId);
  $stmt_insertMail->execute();
$mail_id = $stmt_insertMail->insert_id;
			


$stmt_insertImage = $conn->prepare('INSERT INTO mailimage (`id`, `name`,mailId) VALUES (?, ?,?)');
 
$stmt_insertImage->bind_param("isi", $id,$imageName ,$mail_id);
 
 



try {
    $stmt_insertImage->execute();
       echo json_encode(['success' => true]);
} catch(Exception $e) {
  // echo "Error: " . $e->getMessage();
    
}

// Execute the statement
 
      
      
  

// Close the statement and the connection
$stmt_insertMail->close();
 
$conn->close();


?>