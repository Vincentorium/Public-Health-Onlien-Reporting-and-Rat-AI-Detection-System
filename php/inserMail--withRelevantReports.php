<?php
include "config.php";
extract($_POST);
 
$datetime=date('Y-m-d H:i:s');
   $isSent=1;
   $id=null;
   $image_data =null;
   $image_name =null;
  if (isset($_FILES['arr_0_image']) && is_uploaded_file($_FILES['arr_0_image']['tmp_name'])) {
            $image_info = exif_imagetype($_FILES['arr_0_image']['tmp_name']);
            
            $image_data = file_get_contents($_FILES['arr_0_image']['tmp_name']);
            $image_name = uniqid() . '.' . image_type_to_extension($image_info);
            $image_path = './uploads/' . $image_name;
            file_put_contents($image_path, $image_data);
  }
// Prepare the statement
$stmt_insertMail = $conn->prepare(
   "INSERT INTO `mail`
   (`id`, `dateCreated`, `title`, `content`, `attachName`, `attachment`, `FKrepID`, `FKOfficerId`,`isSent`) 
VALUES (?,?,?,?,?,?,?,?,?)");


   
   for ($index = 0; $index <(count($_POST)/5);  $index++) {

      // Bind the parameters to the placeholders
      $stmt_insertMail->bind_param("isssssiii", $id, $datetime,  ${'arr_'.$index.'_title'}, ${'arr_'.$index.'_content'},
      $image_name,$image_data, ${'arr_'.$index.'_FKrepId'},${'arr_'.$index.'_FKOfficerId'},$isSent);
      
      

      try {
          $stmt_insertMail->execute();
            echo json_encode(['success' => true]);
      } catch(PDOException $e) {
          echo "Error: " . $e->getMessage();
          
      }
   }
 
$stmt_insertMail->close();
 
$conn->close();


?>