 
    window.onload = function () {
    
      
    }
 
    
 
 $(document).ready(function () {
//(function () { 

    console.log("gereport")
let street=""
getChart(street)

 }) 
 function getChart(dateJS){


let content=""

 
 

 
$.ajax({
        type:'POST',
        dataType: "json",
      
         async: false,
        url: './php/getChartData.php',
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
 
          

        $.each(result, function(index, data){
          
              objJS.data[0].dataPoints.push({y: data.repNum,label:data.repPollutionType})

  
              });
            
 





//          objJS.data[1].dataPoints.push({y: data.repNum,label:data.repPollutionType})
  
  
             
              
              
              //end of $.each

   var chart = new CanvasJS.Chart("chartContainer",objJS);
 
 

     
      chart.render();

 
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) { 
    $('#chartContainer').html("no record found")    
                           console.log(error);
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION
 