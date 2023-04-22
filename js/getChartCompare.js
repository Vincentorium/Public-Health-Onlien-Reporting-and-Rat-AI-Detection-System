 
    window.onload = function () {
    
      
    }
 
    
 
 $(document).ready(function () {
//(function () { 

    console.log("gereport")

 

 }) 
 function getChartCompare(dataJS){


 


let content=""
 
 
$.ajax({
        type:'POST',
        dataType: "json",
        data: JSON.stringify(dataJS),
         async: false,
        url: './php/getChartCompared.php',
        success: function (result){
 
        
  let objJS=
  { title:
      {
        text: "Olympic Medals of all Times (till 2012 Olympics)"
      },  
      data: [
      {
        type: "bar",
        dataPoints: [ 
 
       
        ]
      
      }
    ]
  }
 

 
        objJS.data.push({type:"bar",dataPoints:[] })   

        $.each(result, function(index, data){
              if(data.compareIndex=="1st"){
              objJS.data[0].dataPoints.push({y: data.repNum,label:data.repPollutionType})
                objJS.data[1].dataPoints.push({y: "",label:""})
         }
              else{
               
                 objJS.data[0].dataPoints.push({y: "",label:""})
        objJS.data[1].dataPoints.push({y: data.repNum,label:data.repPollutionType})
              }
              });
   

   var chart = new CanvasJS.Chart("chartContainer",objJS);
 
 

     
      chart.render();x
 
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) {
                $(".chartContainer").html(error)
                console.log('An error occurred while updating status');
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION
 