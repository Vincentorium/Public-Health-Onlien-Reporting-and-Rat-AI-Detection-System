 
<?php
 
	$hostname = "127.0.0.1";
	$username = "root";
	$pwd = "";
	$db = "fyp";
 
	    $conn = mysqli_connect($hostname, $username, $pwd, $db) or die(mysqli_connect_error());
		  date_default_timezone_set("Asia/Hong_Kong");
$datetime=date('Y-m-d H:i:s');
 
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

?>