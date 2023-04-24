 
 $(document).ready(function () {
//(function () { 

    console.log("gereport")

getMostUrgentStreet()

 }) 
 function getMostUrgentStreet(){


let content=""
 
 
 

 
$.ajax({
        type:'POST',
        dataType: "json",
        data: {
    
       
          },
         async: false,
        url: './php/getMostUrgentStreet.php',
        success: function (result){
 
        $('.favEleBox').html("");
          
        $('.favEleBox').fadeOut(1);
              
        $.each(result, function(index, data){
     
    content +=  

         '   <div class="favElements favElement1" data-modal-target="#modal" data-default="orderList">'

       +'     <div class="urgentBox">'

       +data.repStreet
        +'     </div>'

       +'     <div class="urgentBox">'

       +'       last 10 days'
        +'     </div>'

       +'     <div class="urgentBox">'
 
       +data.repNum 
        +' cases    </div>'
      
      +'   </div>'


    
          });//end of $.each

 
  $('.favEleBox').html(content==""?"No case for reivew":content)
  $('.favEleBox').fadeIn(500)
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) {
        content="Not new task yet!"
                console.error('An error occurred while updating status');
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION
 