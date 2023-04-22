<?php
include "config.php";
  
extract($_POST);

//$sql_Allarea="";//"and rep.street='$street'";
$sql_Allarea=  ($street!="") ?" and rep.street='$street' ":"";

$firstDayOfThisMonth=$dateS; 
$lastDayOfThisMonth=$dateE; 
 
$sq2l="select rep.id,rep.type as repPollutionType,count(rep.type) as no ,
rep.street as repStreet,(select st.repStatusType from repstatus as st where st.repStatusFKreports=rep.id 
order by st.repStatusDateCreated desc limit 1)   as type,
rep.date as repDate
from report as rep
where (select st.repStatusType from repstatus as st where st.repStatusFKreports=rep.id 
order by st.repStatusDateCreated desc limit 1) not in ('unapproved')".$sql_Allarea."

 GROUP by rep.type order by no DESC;";

$sql="
select rep.id,rep.type as repPollutionType,count(rep.type) as no ,
rep.street as repStreet,(select st.repStatusType from repstatus as st where st.repStatusFKreports=rep.id 
order by st.repStatusDateCreated desc limit 1)   as type,
rep.date as repDate,
DATE_SUB(CURDATE(),INTERVAL 30 DAY) as dateS,
CURDATE()  as dateE
from report as rep
where  rep.date  between '$firstDayOfThisMonth' and '$lastDayOfThisMonth'
And (select st.repStatusType from repstatus as st where st.repStatusFKreports=rep.id 
 
order by st.repStatusDateCreated desc limit 1) not in ('unapproved','solved')".$sql_Allarea."
 GROUP by rep.type 
 order by no ;

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

				);
    }
           
                        echo json_encode($output);
                  } 
               }catch(Exception $e) {
                      echo "Error: " . $e->getMessage();
              
                   }
 
$stmt->close();
 
$conn->close();



function get_dates_for_month($month) {
 
    $timestamp = strtotime($month);

 
    $last_day_of_prev_month = date('Y-m-01', strtotime($timestamp));
 
    $first_day_of_next_month = date('Y-m-t', strtotime( $timestamp));

    return array($last_day_of_prev_month, $first_day_of_next_month);
}

?>

 