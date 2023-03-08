
//data of all reports from db
var resultOfReports
 
getAllReort()
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
 