<?php
include "config.php";

extract($_POST);
 
 
$update_query = "UPDATE report SET $attribute='$value' WHERE id='$repID'";


if (mysqli_query($conn, $update_query)) {
   
    echo json_encode(['success' => true]);
} else {
 
    echo json_encode(['success' => false, 'error' => mysqli_error($conn)]);
}

mysqli_close($conn);








?>