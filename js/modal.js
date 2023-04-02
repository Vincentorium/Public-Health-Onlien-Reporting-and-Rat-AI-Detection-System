

var modal

$(document).ready(function () {
 var openModalButtons
  var closeModalButtons
  var overlay
    var i=0;
modal=function modal(){
  openModalButtons = document.querySelectorAll('[data-modal-target]')
  closeModalButtons = document.querySelectorAll('[data-close-button]')
 overlay = document.getElementById('overlay')


  
  $.each($(openModalButtons), function(index, value) {

     $(this).off('click')
      $(this).on("click", function(e) {
 
    e.stopPropagation(); 
   
   
  const modal = $(this).data('modal-target') ;//document.querySelector(button.dataset.modalTarget)
  // const modal = button.getAttribute('data-modal-target');
  
     const defaulModal = $(this).data('default') //; button.getAttribute('data-default');
     //getReports(dataForInbox,$(this).data('idForMysql'));


    closeModalButtons = document.querySelectorAll('[data-close-button]')
    overlay = document.getElementById('overlay')

   openModal(modal,defaulModal, $(this).data("idformysql"))

  
  })
    });
 






/*
openModalButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // e.stopPropagation(); 
  //  button.removeEventListener("click", openModal);
    
   
  const modal = document.querySelector(button.dataset.modalTarget)
  // const modal = button.getAttribute('data-modal-target');
  
     const defaulModal =  button.getAttribute('data-default');
     //getReports(dataForInbox,$(this).data('idForMysql'));


    closeModalButtons = document.querySelectorAll('[data-close-button]')
    overlay = document.getElementById('overlay')

   openModal(modal,defaulModal,button.getAttribute('data-idForMysql'))

  
  alert("count: "+ ++i)
  })
 
})//EDO openModalButtons
*/
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
   
        const modal = button.closest('.modalGeneral')
        closeModal(modal)
  })

 
})
 
}//eED Modal
 
function openModal(modal,defaulModal,sqlID){
 
overlay.classList.add('active')
   
  if(defaulModal=='mailIcon'){
        $(modal).addClass('active');
        var el = document.getElementById('modalOfMail');
          var scrollPosition = window.pageYOffset;
        // $('#modalOfMail').css("top", 250+scrollPosition+"px");

        el.style.top = (160+ scrollPosition) + 'px';
        console.log(el)
  } else if (defaulModal=='tablePostTitle' &&  $.cookie('userDept')=="Operator" ){
          $(modal).addClass('active');
            
            getReports2(resultOfReports,sqlID);
            $('#containerOrderList').addClass('active');
          
            $('#containerOrderList table tbody tr').attr('display','table-row')

  }  else if (defaulModal=='mailRecord'){

    $('.mail-button-inbox').addClass('mailbuttonHover')
    $('.mail-button-sent').removeClass('mailbuttonHover')
 $('.mailModal').addClass('active');
  $('.mail-record-box').addClass('active');
  getMailRecords(0)
getMailContent(mailLastestOne)
  //   $('#containerOrderList table tbody tr').attr(  'display', 'table-row!important')
 //$('#containerOrderList table tbody tr').attr(  'display', 'table-row!important')
$('.mail-record-box table tbody tr').attr('display','table-row')
 
 
  }
  
  
  else{
     $(modal).addClass('active');
    getReports2(resultOfReports,sqlID);
         insertRemarkForReport(resultOfReports)
 

   $('#containerOrderList').addClass('active');
  $('#containerOrderList table tbody tr').attr('display','table-row')
 

  }

}






 function closeModal(modal){
    
     modal.classList.remove('active');
  
 
}


 
//const openModalButtons = document.querySelectorAll('[data-modal-target]')






 
 overlay.addEventListener('click', () => {
 
   const modals=document.querySelectorAll('.modal.active') 
  modals.forEach(modals=>{ closeModal(modals)})
    
    
  })



  $('close-button overlay').click( () => {
    
   const modals=document.querySelectorAll('.modal.active')
   modals.forEach(modals=>{ closeModal(modals)})

    
  })
 
 // modal()
})//EDO title click event


