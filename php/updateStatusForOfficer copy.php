<?php
include "config.php";
  
extract($_POST);
 
$datetime=date('Y-m-d H:i:s');
  // Create the SQL statement with placeholders for the values

  

// Prepare the statement
$stmt_insertRepStatus = $conn->prepare("INSERT INTO 
repstatus (repStatusID,repStatusType,repStatusDateCreated,
repStatusFKreports,repStatusRemark,repUserID)

 VALUES (?,?,?,?,?,?)");

// Bind the parameters to the placeholders
$stmt_insertRepStatus->bind_param("issisi", $repStatusID, $repStatusType, $datetime, $repID,
$repStatusRemark, $repUserID);


$stmt_updateCurrentStatus = $conn->prepare("UPDATE report SET repCurrentStatus=? WHERE id=?");
$stmt_updateCurrentStatus->bind_param("si", $repStatusType, $repID);

 


// Execute the statement
$noOfImage=0;
$id=null;
if ($stmt_insertRepStatus->execute()) {
                $repStatusID = $stmt_insertRepStatus->insert_id;
    // SO   get image   
                  for ($index = 0; $index <4;  $index++) {
                            if(array_key_exists('images_'.$index, $_FILES)) {$noOfImage++;}
                  }

                  
                  for ($indexJ = 0; $indexJ < $noOfImage;  $indexJ++) {

                     if(array_key_exists('images_'.$indexJ, $_FILES)) {
                  
                           $imageName = $_FILES['images_'.$indexJ]['name']; 
               
                           move_uploaded_file($_FILES['images_'.$indexJ]['tmp_name'], 'uploads/' . $imageName);

                           $stmt_insertImage = $conn->prepare('INSERT INTO reportStatusimage (`id`, `name`,reportStatusId) VALUES (?, ?,?)');
                        
                           $stmt_insertImage->bind_param("isi", $id,$imageName ,$repStatusID);
                  
                           try {
                              $stmt_insertImage->execute();
                                 echo json_encode(['Image up datesuccess' => true]);
                           } catch(PDOException $e) {
                              echo "Error: " . $e->getMessage();
                        
                           }
                     }
            
                  }

       // EO   get image
               
			
         if ($stmt_updateCurrentStatus->execute()) {
         echo json_encode(['success' => true]);
      } else {
         echo "Error: " . $sql_insert . "<br>" . $conn->error;
      }
} else {
   echo "Error: " . $sql_insert . "<br>" . $conn->error;
}

// Close the statement and the connection
$stmt_insertRepStatus->close();
$stmt_updateCurrentStatus->close();
$conn->close();


?>