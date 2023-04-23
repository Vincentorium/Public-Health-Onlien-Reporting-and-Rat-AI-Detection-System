 
    window.onload = function () {
    
      
    }
 
    
 
 $(document).ready(function () {
//(function () { 

    console.log("gereport")

 

 }) 
 function getChartCompare(dataJS){


 
console.log(dataJS)

let content=""
 
 
$.ajax({
        type:'POST',
        dataType: "json",
        data: dataJS,
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


})
 



        $.each(result, function(index, data){
              if(data.compareIndex=="0"){
              objJS.data[0].dataPoints.push({y: data.repNum,label:data.repPollutionType})
               // objJS.data[1].dataPoints.push({y: "",label:""})
                 
         }
              else  if(data.compareIndex=="3"){
               
              //  objJS.data[0].dataPoints.push({y: "",label:""})
          objJS.data[1].dataPoints.push({y: data.repNum,label:data.repPollutionType})
              
              }
              });
   

   var chart = new CanvasJS.Chart("chartContainer",objJS);
 
 

     
      chart.render(); 
 
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) {
                $(".chartContainer").html(error)
                console.log('An error occurred while updating status');
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION
 