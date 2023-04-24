
$(document).ready(function () {

 
  



var idOfBox=""  //the id of detailed box of flight
var content = ""
 
 

 
 

 







//for detail of flight_______________
 
function showDetailBox(index){
    var element="#showDetailBox_"+index+"_Box";
    alert(element);
    if ( $(element).css('display') == 'none' || $(element).css("visibility") == "hidden"){
    // 'element' is hidden
//}
             //   if (isHidden) {
                    $(element).slideDown();
                    
                } else {
             
                    $(element).slideUp();
                }

}
 /*後加載處理
 
 */
//$('body bookingTable__detailBtn').on('click', function(e){

 
$('body').on('change','.classOptionRad', function(){
$('.tooltipOption').removeAttr('tooltip')
$('.tooltipRev').attr('tooltip','Click Reserve Button to submit the reservation')
//$('.tooltipRev').addClass('active')
})
  
$('body').on('click','.bookingTable__detailBtnForReserve', function(){
$('.tooltipRev').removeAttr('tooltip')
//$('.tooltipRev').attr('tooltip','Click Reserve Button to submit the reservation')
//$('.tooltipRev').addClass('active')
})
 

$('body').on('click','.bookingTable__detailBtnForBox', function(e){
  $('.tooltipDetail').removeAttr('tooltip');
    idOfBox ="#"+e.target.id+"_Box";
   /*
   
   */
   /*var idOfBox ="#"+e.target.id+" .bookingTable__detailBox"; 
   box is not the subelement of button...

   */
   /* 
  so it would better to have data-attribute for the element.
 */

 
   //bookingTable__detailBtn_1
  //  alert(idOfBox);
  //$('.bookingTable__detailBox:hidden'
  //ref
  //https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery?page=1&tab=scoredesc#tab-top
               // var isHidden = $(".bookingTable__detailBox").is(":hidden");
 //               var isHidden =$('.bookingTable__detailBox:hidden')// $(".bookingTable__detailBox").is(":hidden"); 
    if ( $( idOfBox+':hidden').css('display') == 'none' || $( '.bookingTable__detailBox:hidden').css("visibility") == "hidden"){
   
      //if($( '#bookingTable__detailBtn_1_Box').length){alert("boxById exists");} 
       //if($( '.bookingTable__detailBox' ).length){alert("box exists");} 
                // 'element' is hidden
//}

/*    alert("This: "+ this 
          + "\nThis id: "+this.id
          + "\n\nEvent: "+e.id
          +" \nEvent.target: "+e.target
          +"\nEvent.target.id: "+e.target.id)
 */
 
          $(idOfBox).slideDown();
                   
                } else {
                      $(idOfBox).slideUp();
          //        $('.tooltipDetail').attr('tooltip','Click Reserve Button to check out more detail');
                }
})
  

//reserve
/*
$('sumbitReserve').click(function(){

  $('.confirmmsgBox').addClass('active');
})
*/
 
$('body').on('click','.bookingTable__detailBtnForReserve', function(e){
 
})
//__________________________end of reserve


//close the msg of reservation
$('.close').click(function(){
 $(idOfBox).slideUp();

})

// for control the pagination 
function pageSep() {
         $('.pagination').html('');

var table = $('#mytable')


      $('.pagination').html('')
      var trnum = 0
      var maxRows = 15;//parseInt($(this).val())

      //      var totalRows = $(table + '  tbody tr').length
      var totalRows = $('tbody tr').length
      //    $(table + ' tr:gt(0)').each(function () {
      $('tr:gt(0)').each(function () {
        trnum++ 
        if (trnum > maxRows) {

          $(this).hide()
//            alert('Max'+maxRows+' '+'t'
        }
        if (trnum <= maxRows) {
          $(this).show()
        }
      })
    
    
    //____________________
      if (totalRows > maxRows) {
        var pagenum = Math.ceil(totalRows / maxRows)
        for (var i = 1; i <= pagenum;) {
          $('.pagination').append('<li data-page="' + i + '">\<span>' + i++ +
            '<span class="sr-only">(current)</span></span>\</li>').show()
         }
      }
      $('.pagination li:first-child').addClass('active')


      //function for swtich page
      $('.pagination li').on('click', function () {

        var pageNum = $(this).attr('data-page')
        var trIndex = 0;

        $('.pagination li').removeClass('active')
        $(this).addClass('active')
        $('tr:gt(0)').each(function () {

          trIndex++;
          if (trIndex > (maxRows * pageNum) || trIndex <= ((maxRows * pageNum) - maxRows)) {
            $(this).hide()

          } else {
            $(this).show()
          }

        })

      })

    }
   
   ///end of click max
   
   
   
 
    //Quantity selector

    $(document).on('click', '.bookingTable__qtyPicker--plus', function () {
        $(this).prev().val(+$(this).prev().val() + 1);
    });
    $(document).on('click', '.bookingTable__qtyPicker--minus', function () {
        if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
    });


$('.cmtManagement').click(function(){
  //clear the html, should don't need to remove
    getComplaint();
    $('.switch-button').addClass('switch-active');
        $('.filterForm').addClass('hideClass');
})
$('.searchFlightHeaderLink').click(function(){
  //clear the html, should don't need to remove
    getFlight();
    $('.switch-button').removeClass('switch-active');
 
        $('.filterForm').removeClass('hideClass');
})



 
$(document).on('click','.cmtInProgress',function(){
   
  //clear the html, should don't need to remove
  
  window.location.href = "indexOfComplaint2.html";
  

})








   });

   