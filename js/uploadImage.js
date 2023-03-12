
//data of all reports from db
var resultOfReports
$(document).ready(function(){
   
$(".submitImage").click(function(e){
    event.preventDefault();
    var imageData = new FormData();
    imageData.append('image', $('#image_file')[0].files[0]);
    imageData.append('sdfsd',"tsd");
    $.ajax({
       url: "./php/upload_image.php",
      type: 'POST',
      data: imageData,
      processData: false,
      contentType: false,
      success: function(response) {
             console.log("asad")
          }
 

 })
 })
 })
function getAllReort(){
 
      

        $.ajax({
          url: "./php/getAllReports.php",
          dataType: "json",
          type: 'POST',
          async: false,
          data: {
          },
          success: function (rs) {
             resultOfReports=rs
          }
})

 }
 