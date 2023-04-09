<?php
include "config.php";
 print_r($_POST);
 var_dump($_POST);
 extract($_POST);
 echo count($_POST);
 
 //global variable 
// Prepare the statement
$stmt_insertRepStatus = $conn->prepare("INSERT INTO 
repstatus (repStatusID,repStatusType,repStatusDateCreated,
repStatusFKreports,repStatusRemark,repUserID,repStatusAttach,repStatusAttachName)

 VALUES (?,?,?,?,?,?,?,?)");

// Prepare the statement for updating the current status
$stmt_updateCurrentStatus = $conn->prepare("UPDATE reports SET repCurrentStatus=? WHERE repID=?");

// Loop through each element in the data array and execute the statements



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
   for ($index = 0; $index <(count($_POST)/6);  $index++) {
    

      $datetime=date('Y-m-d H:i:s');
      $image_data =null;
      $image_name =null;

      if (isset($_FILES['arr_'.$index.'_image']) && is_uploaded_file($_FILES['arr_'.$index.'_image']['tmp_name'])) {
      $image_info = exif_imagetype($_FILES['arr_'.$index.'_image']['tmp_name']);
      
      $image_data = file_get_contents($_FILES['arr_'.$index.'_image']['tmp_name']);
      $image_name = uniqid() . '.' . image_type_to_extension($image_info);
      $image_path = './uploads/' . $image_name;
      file_put_contents($image_path, $image_data);
      
         
      } 
  
   // Bind the parameters to the placeholders
   $stmt_insertRepStatus->bind_param("issisiss", ${'arr_'.$index.'_repStatusID'}, ${'arr_'.$index.'_repStatusType'}, $datetime,${'arr_'.$index.'_repID'},
    ${'arr_'.$index.'_repStatusRemark'}  ,${'arr_'.$index.'_repUserID'} , $image_data, $image_name);
   $stmt_updateCurrentStatus->bind_param("si", ${'arr_'.$index.'_repStatusType'},${'arr_'.$index.'_repID'});

   // Execute the statements
   $insert_success = $stmt_insertRepStatus->execute();
   $update_success = $stmt_updateCurrentStatus->execute();

   // Check for errors and output a response
   if ($insert_success && $update_success) {
      echo json_encode(['success' => true]);
   } else {
      echo "Error: " . $conn->error;
   }
}
  }
 
// Close the statements and the connection
$stmt_insertRepStatus->close();
$stmt_updateCurrentStatus->close();
$conn->close();


?>