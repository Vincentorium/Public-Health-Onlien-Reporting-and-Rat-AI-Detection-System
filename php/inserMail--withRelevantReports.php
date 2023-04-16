<?php
include "config.php";
extract($_POST);
  var_dump($_POST);
 
   
   $id=null;


// Prepare the statement
$stmt_insertMail = $conn->prepare(
   "INSERT INTO `mail`
   (`id`, `dateCreated`, `title`, `content`,  `FKrepID`, `FKOfficerId`) 
VALUES (?,?,?,?,?,?)");


$noOfImage=0;
 for ($index = 0; $index <5;  $index++) {

     if(array_key_exists('images_'.$index, $_FILES)) {$noOfImage++;}
 }
echo ("nubmer of imgs: ".$noOfImage);
echo ("nubmer of elemet: ".count($_POST)
);

   for ($index = 0; $index <(count($_POST)/4);  $index++) {

      // Bind the parameters to the placeholders
      $stmt_insertMail->bind_param("isssii", $id, $datetime,  ${'arr_'.$index.'_title'}, ${'arr_'.$index.'_content'},
       ${'arr_'.$index.'_FKrepId'},${'arr_'.$index.'_FKOfficerId'});
    
 


      $stmt_insertMail->execute();
      $mail_id = $stmt_insertMail->insert_id;
			


          for ($index = 0; $index < $noOfImage;  $index++) {

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

  
   }
 

 
// Close the statement and the connection
$stmt_insertMail->close();
 
$conn->close();




 

?>