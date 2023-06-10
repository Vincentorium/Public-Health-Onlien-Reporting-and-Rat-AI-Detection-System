<?php
include "config.php";
  
extract($_POST);
 
 
 
$sql="SELECT rep.id, COUNT(rep.id) as no, rep.street as repStreet, rep.timestamp as repDate
FROM report AS rep 
WHERE (SELECT st.repStatusType FROM repstatus AS st WHERE st.repStatusFKreports = rep.id 
       ORDER BY st.repStatusDateCreated DESC LIMIT 1) NOT IN ('unapproved', 'solved')
      AND rep.timestamp BETWEEN DATE_SUB(NOW(), INTERVAL 10 DAY) AND NOW()
GROUP BY rep.street
ORDER BY no DESC
LIMIT 0, 25;";
$stmt = $conn->prepare($sql);

$stmt ->execute();
$result = $stmt->get_result();
$output = array();
// Check if any records were returned
try {
if ($result->num_rows > 0) {
    // Output data of each row
 
    while ($row = $result->fetch_assoc()) {
		
				$output[] =     array(
				'repStreet' => $row['repStreet'],
				'repDate' => $row['repDate'],
				'repNum' => $row['no'],
				

				);
    }
           
                        echo json_encode($output);
                  } 
               }catch(Exception $e) {
                      echo "Error: " . $e->getMessage();
              
                   }
 
$stmt->close();
 
$conn->close();


?>

 