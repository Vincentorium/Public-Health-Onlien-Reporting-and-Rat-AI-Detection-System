<?php
include "config.php";
extract($_POST);
 var_dump($_POST);

 echo $content;



$targetDir = "uploads/";
$allowedTypes = array('jpg', 'jpeg', 'png', 'gif');
 
$count = 0;
extract($_POST);
 var_dump($_POST);

$datetime=date('Y-m-d H:i:s');
$isSent=1;
$id=null;


			

// Prepare the statement
$stmt_insertMail = $conn->prepare(
   "INSERT INTO `mail`
   (`id`, `dateCreated`, `title`, `content`,  `FKrepID`, `FKOfficerId`,`isSent`) 
VALUES (?,?,?,?,?,?,?)");

// Bind the parameters to the placeholders
$stmt_insertMail->bind_param("isssiii", $id, $datetime, $title, $content,
  $FKrepId,$FKOfficerId,$isSent);
  $stmt_insertMail->execute();
$mail_id = $stmt_insertMail->insert_id;



          for ($index = 0; $index < 10;  $index++) {

                if(array_key_exists('images_'.$index, $_FILES)) {
            
                      $imageName = $_FILES['images_'.$index]['name']; 
          
                      move_uploaded_file($_FILES['images_'.$index]['tmp_name'], 'uploads/' . $imageName);
            


                  $stmt_insertImage = $conn->prepare('INSERT INTO mailimage (`id`, `name`,mailId) VALUES (?, ?,?)');
                  
                  $stmt_insertImage->bind_param("isi", $id,$imageName ,$mail_id);
          
                  try {
                      $stmt_insertImage->execute();
                        echo json_encode(['success' => true]);
                  } catch(PDOException $e) {
                      echo "Error: " . $e->getMessage();
              
                   }
                }
          }

// Close the statement and the connection
$stmt_insertMail->close();
 
$conn->close();


?>