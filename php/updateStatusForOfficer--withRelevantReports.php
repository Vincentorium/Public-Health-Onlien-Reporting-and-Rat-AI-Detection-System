<?php
include "config.php";
  
 var_dump($_POST);
 extract($_POST);
 
 
 //global variable 
// Prepare the statement
$stmt_insertRepStatus = $conn->prepare("INSERT INTO 
repstatus (repStatusID,repStatusType,repStatusDateCreated,
repStatusFKreports,repStatusRemark,repUserID)

 VALUES (?,?,?,?,?,?)");

// Prepare the statement for updating the current status
$stmt_updateCurrentStatus = $conn->prepare("UPDATE report SET repCurrentStatus=? WHERE id=?");

// Loop through each element in the data array and execute the statements


 $datetime=date('Y-m-d H:i:s');
      
$noOfImage=0;
$id=null;
$repStatusID=null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
         echo("count post: ".(count($_POST)/4)."\n");
         for ($index = 0; $index <(count($_POST)/4);  $index++) {
              
               echo("current index: ".$index."<br>");
         
               // Bind the parameters to the placeholders
               $stmt_insertRepStatus->bind_param("issisi", $repStatusID, ${'arr_'.$index.'_repStatusType'}, $datetime,${'arr_'.$index.'_repID'},
               ${'arr_'.$index.'_repStatusRemark'}  ,${'arr_'.$index.'_repUserID'} );
               $stmt_updateCurrentStatus->bind_param("si", ${'arr_'.$index.'_repStatusType'},${'arr_'.$index.'_repID'});

               // Execute the statements
               $insert_success = $stmt_insertRepStatus->execute();
               $update_success = $stmt_updateCurrentStatus->execute();
               $repStatusIDForFK = $stmt_insertRepStatus->insert_id;


        // Check for errors and output a response
               if ($insert_success && $update_success) {
                  echo json_encode(['success' => true]);
               } else {
                  echo "Error: " . $conn->error;
               }
 

       




//SO Iamges
 
               for ($indexK = 0; $indexK <5;  $indexK++) {

         
                     if(array_key_exists('images_'.$indexK, $_FILES)) 
                     {$noOfImage++;}
               }

               echo ("nubmer of imgs: ".$noOfImage);
               for ($indexJ = 0; $indexJ < $noOfImage;  $indexJ++) {

                  if(array_key_exists('images_'.$indexJ, $_FILES)) {
               
                        $imageName = $_FILES['images_'.$indexJ]['name']; 
            
                        move_uploaded_file($_FILES['images_'.$indexJ]['tmp_name'], 'uploads/' . $imageName);
               


                        $stmt_insertImage = $conn->prepare('INSERT INTO reportStatusimage (`id`, `name`,reportStatusId) VALUES (?, ?,?)');
                     
                        $stmt_insertImage->bind_param("isi", $id,$imageName ,$repStatusIDForFK);
            
                  
                     try {
                        
                           $stmt_insertImage->execute();
                           echo json_encode(['success image' => true]);
                     } catch(PDOException $e) {
                        echo "Error: " . $e->getMessage();
                  
                     } 
                  }
         
               }
 
                   
//EO Images


       /*  // Check for errors and output a response
         if ($insert_success && $update_success) {
            echo json_encode(['success' => true]);
         } else {
            echo "Error: " . $conn->error;
         }
*/

      }
       echo("current index: ".$index."<br>");

}
 
// Close the statements and the connection
$stmt_insertImage->close();
$stmt_insertRepStatus->close();
 
$stmt_updateCurrentStatus->close();
$conn->close();


?>