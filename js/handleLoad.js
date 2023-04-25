
 $(document).ready(function () {

 loadSelectionType(0)
 loadSelectionStreet(0)
 })
function loadSelectionType(index){
let content="";
  
        $.ajax({
          url: "./php/getReportType.php",
          dataType: "json",
          type: 'POST',
          async: false,
          data: {repID:repID
          },
          success: function (result) {
 
            content="    <option value='All Types'>All Types</option>";
$.each(result, function(index, data){
  content+="<option value='"+data.type+"'>"+data.type+"</option>"
                        
 
 

  });//end of $.each

   $(".filter__formInput--type_"+index).html(content);

               
} })}

function loadSelectionStreet(index) {
let content="";
  
        $.ajax({
          url: "./php/getReportStreet.php",
          dataType: "json",
          type: 'POST',
          async: false, 
          success: function (result) {
 
            content=" <option value='All Streets'>All Streets</option>";
$.each(result, function(index, data){
  content+="<option value='"+data.street+"'>"+data.street+"</option>"
                        
 
 

  });//end of $.each

   $(".filter__formInput--locFrm-"+index).html(content);

               
} })}
