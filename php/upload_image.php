<?php
include "config.php";
  extract($_POST);
 
if (isset($_FILES['image']) && is_uploaded_file($_FILES['image']['tmp_name'])) {
  $image_info = exif_imagetype($_FILES['image']['tmp_name']);
  

  $image_data = file_get_contents($_FILES['image']['tmp_name']);
  $image_name = uniqid() . '.' . image_type_to_extension($image_info);
  $image_path = './uploads/' . $image_name;
  file_put_contents($image_path, $image_data);
 
  // Connect to MySQL database and insert record.
 
  mysqli_query($conn, "INSERT INTO images (sdfsd,name, data) VALUES ('$sdfsd','" .
    mysqli_real_escape_string($conn, $image_name) . "', '" .
    mysqli_real_escape_string($conn, $image_data) . "')");
  mysqli_close($conn);

  echo 'Success';
} else {
  die('Error: No file uploaded.');
}
?>
  