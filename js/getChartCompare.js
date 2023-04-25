 
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
 
        let objJS= {
  title: {
    text:  formData[1].value
  },  
  data: [
/*
{
    type: "bar",
    dataPoints: []
  }
*/
  ]
};

let mySetType = new Set();
let mySetGroup = new Set();

$.each(result, function(index, data){
  mySetType.add(data.repPollutionType);
  mySetGroup.add(data.compareIndex);
});

$.each(formData, function(index, data){
//for (let group of mySetGroup) {
  if(data.name.substring(0,6)=="date_s"){
  objJS.data.push({
    indexLabelFontSize: 25,
        indexLabelFontFamily:"Lucida Console" ,
        type: "bar",
     
        
        showInLegend: true, 
        name: "series1",
        legendText: data.value +" ~ "+formData[++index].value,

    dataPoints: []
  });
  }
//}
});



  /*  let firstObj = objJS.data[indexOfGroup];
firstObj.type = "bar";
firstObj.dataPoints = [];*/

let indexOfGroup = 0;

for (let group of mySetGroup) {
  let indexOfPoint=0;
  for (let type of mySetType) {

        objJS.data[indexOfGroup].dataPoints.push({y: 0,label:type,
             
        });

        $.each(result, function(index, data){
          if(data.compareIndex==group && data.repPollutionType==type ){
           

            objJS.data[indexOfGroup].dataPoints[indexOfPoint].y=data.repNum;
          }
          });

        indexOfPoint++
  }
indexOfGroup++;
}
 


function compareDataPointYAscend(dataPoint1, dataPoint2) {
		return dataPoint1.y - dataPoint2.y;
}


  
   var chart = new CanvasJS.Chart("chartContainer",objJS);
 
 

 if(mySetGroup.size==1){
// 創建一個空白的JS對象
 
// 添加一個新屬性
objJS.data[0].color = '#4f81bc';
 chart.options.data[0].dataPoints.sort(compareDataPointYAscend);
}
     
      chart.render(); 
 
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) {
                $("#chartContainer").html("No relevant Record")
                console.log('An error occurred while updating status');
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION 