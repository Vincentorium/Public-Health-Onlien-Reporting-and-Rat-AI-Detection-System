<?php
include "config.php";
  

//$json_data = file_get_contents('php://input');
//$data = json_decode($json_data, true);

extract($_POST);
 
//$sql_Allarea="";//"and rep.street='$street'";
$noOfDateCom=0;
$noOfDateComTrace=0;
 $sql="";
 for ($index = 0; $index <4;  $index++) {
        if(array_key_exists('date_s_'.$index,$_POST))
                 $noOfDateCom++;
    }
for ($index = 0; $index <4;  $index++) {

     if(array_key_exists('date_s_'.$index, $_POST))
      { $noOfDateComTrace++;
     
$sql.="
(SELECT
    rep.id,
    rep.type AS repPollutionType,
    COUNT(rep.type) AS no ,
    rep.street AS repStreet,
    (SELECT st.repStatusType FROM repstatus AS st WHERE st.repStatusFKreports=rep.id
      ORDER BY st.repStatusDateCreated DESC LIMIT 1) AS type,
    rep.date AS repDate , ".$index." as compareIndex
    
 
FROM report AS rep
WHERE rep.date  between '".${'date_s_'.$index}."' and '".${'date_e_'.$index}."'
    AND (SELECT st.repStatusType FROM repstatus AS st WHERE st.repStatusFKreports=rep.id 
          
         ORDER BY st.repStatusDateCreated DESC LIMIT 1) NOT IN ('unapproved','solved')
GROUP BY rep.type 
ORDER BY no DESC)";
 

          $sql.= ( $noOfDateComTrace<$noOfDateCom ) ? " UNION ALL " : "";


      }
 }



$sql_Allarea=  ($street!="") ?" and rep.street='$street' ":"";
 
 


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

 