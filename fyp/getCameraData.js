 
 
 $(document).ready(function () {
//(function () { 

    
 getCameraData(1,1,"2023-04-25")

 }) 
 function getCameraData(mode,id,date){

 
$.ajax({
        type:'POST',
        dataType: "json",
        data:{date:date,
        mode:mode,
        id:id,
        },
         
         async: false,
        url: './fyp/getCameraData.php',
        success: function (result){

              
         
 
let mySetGroup = new Set();

$.each(result, function(index, data){
 
  mySetGroup.add(data.cameraID);
});

     
      
 



        let objJS= {
  title: {
  text: "Rat peak activity period per 2 hours "
  },  
  data: [ 

      
  ]
};


 


  let indexOfPoint=0;
for (let group of mySetGroup) {
   
  objJS.data.push({ 
    


 
		type: "line",
		 
		color:getRandomColor(),
		showInLegend: true,
		axisYIndex: 1,

    dataPoints: []
  });
        $.each(result, function(index, data){
                    if(data.cameraID==group ){
                    
objJS.data[indexOfPoint].name=data.name
objJS.title.text="Rat peak activity period per 2 hours - "+data.date
                        objJS.data[indexOfPoint].dataPoints.push({x: data.timeStart,y:data.count});
                    }
          });

        indexOfPoint++
 
} 
 
    var chart = new CanvasJS.Chart("chartContainerLineTable",objJS);
 chart.render();
 



















 
 
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) { 
    $('#chartContainerLineTable').html("no record found")    
                           console.log(error);
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION
 
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
 