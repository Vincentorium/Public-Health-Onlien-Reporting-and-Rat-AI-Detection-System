<?php
include "config.php";
  

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

extract($data);
 
//$sql_Allarea="";//"and rep.street='$street'";
$sql_Allarea=  ($street!="") ?" and rep.street='$street' ":"";
 
 

$sql="
(SELECT
    rep.id,
    rep.type AS repPollutionType,
    COUNT(rep.type) AS no ,
    rep.street AS repStreet,
    (SELECT st.repStatusType FROM repstatus AS st WHERE st.repStatusFKreports=rep.id
      ORDER BY st.repStatusDateCreated DESC LIMIT 1) AS type,
    rep.date AS repDate , '1st' as compareIndex
    
 
FROM report AS rep
WHERE rep.date  between '$dateS' and '$dateE'
    AND (SELECT st.repStatusType FROM repstatus AS st WHERE st.repStatusFKreports=rep.id 
          
         ORDER BY st.repStatusDateCreated DESC LIMIT 1) NOT IN ('unapproved','solved')
GROUP BY rep.type 
ORDER BY no DESC)
UNION ALL
(SELECT
    rep.id,
    rep.type AS repPollutionType,
    COUNT(rep.type) AS no ,
    rep.street AS repStreet,
    (SELECT st.repStatusType FROM repstatus AS st WHERE st.repStatusFKreports=rep.id
      ORDER BY st.repStatusDateCreated DESC LIMIT 1) AS type,
    rep.date AS repDate,
 '2nd' as compareIndex
  
FROM report AS rep
WHERE rep.date  between '$dateS_c_s' and '$dateS_c_e'
    AND (SELECT st.repStatusType FROM repstatus AS st WHERE st.repStatusFKreports=rep.id 
          
         ORDER BY st.repStatusDateCreated DESC LIMIT 1) NOT IN ('unapproved','solved')
GROUP BY rep.type 
ORDER BY no DESC LIMIT 0, 25);
";
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
				'repPollutionType' => $row['repPollutionType'],
				'compareIndex' => $row['compareIndex'],
             
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

 