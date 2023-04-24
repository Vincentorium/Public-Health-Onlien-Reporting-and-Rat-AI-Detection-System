 
    window.onload = function () {
    
      
    }
 
    
 
 $(document).ready(function () {
//(function () { 

    console.log("gereport")

 

 }) 
 function getChartCompare(formData){


 
 
 
 
$.ajax({
        type:'POST',
       dataType: "json", 
        data: formData,
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
 
   objJS.data.push({type:"bar",dataPoints:[] })   
  

//預設index，type
let mySetType=new Set();
$.each(result, function(index, data){
      mySetType.add(data.repPollutionType)
   })
   let mySetGroup=new Set();
   $.each(result, function(index, data){
      mySetGroup.add(data.compareIndex)
   })
        $.each(result, function(index, data){

        for (let item of mySetType) {
             for (let item of mySetType) {
            $.each(result, function(index, data){

                if(data.repPollutionType==item)
                objJS.data[i].dataPoints.push({y: data.repNum,label:data.repPollutionType})
                else
                 objJS.data[i].dataPoints.push({})
       
  });
            });

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
 