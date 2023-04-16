<?php
include "config.php";
extract($_POST);
  var_dump($_POST);
$datetime=date('Y-m-d H:i:s');
   $isSent=1;
   $id=null;


if (isset($_FILES['arr_0_image']) ) {
  
 $imgPath = $_FILES['arr_0_image']['name']; 
move_uploaded_file($_FILES['arr_0_image']['tmp_name'], 'uploads/' . $imgPath);
   echo ("Image Path: ".$imgPath);
} 


 

// Prepare the statement
$stmt_insertMail = $conn->prepare(
   "INSERT INTO `mail`
   (`id`, `dateCreated`, `title`, `content`,  `FKrepID`, `FKOfficerId`,`isSent`) 
VALUES (?,?,?,?,?,?,?)");
   
   for ($index = 0; $index <(count($_POST)/5);  $index++) {

      // Bind the parameters to the placeholders
      $stmt_insertMail->bind_param("issssiii", $id, $datetime,  ${'arr_'.$index.'_title'}, ${'arr_'.$index.'_content'},
       ${'arr_'.$index.'_FKrepId'},${'arr_'.$index.'_FKOfficerId'},$isSent);
    
      $stmt_insertMail->execute();
      $mail_id = $stmt_insertMail->insert_id;
			
      $stmt_insertImage = $conn->prepare('INSERT INTO mailimage (`id`, `name`,mailId) VALUES (?, ?,?)');
      
      $stmt_insertImage->bind_param("isi", $id,$imgPath ,$mail_id);
 
 
 
      try {
          $stmt_insertMail->execute();
            echo json_encode(['success' => true]);
      } catch(PDOException $e) {
          echo "Error: " . $e->getMessage();
          
      }
   }
 

















// Execute the statement
 
      
      
  

// Close the statement and the connection
$stmt_insertMail->close();
 
$conn->close();
















?>