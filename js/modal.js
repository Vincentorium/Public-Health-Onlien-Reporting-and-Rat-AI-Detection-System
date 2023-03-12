

var modal

$(document).ready(function () {
 var openModalButtons
  var closeModalButtons
  var overlay
modal=function modal(){
  openModalButtons = document.querySelectorAll('[data-modal-target]')
  closeModalButtons = document.querySelectorAll('[data-close-button]')
 overlay = document.getElementById('overlay')

 


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
 
     const modal = document.querySelector(button.dataset.modalTarget)
  // const modal = button.getAttribute('data-modal-target');
  
     const defaulModal =  button.getAttribute('data-default');
     //getReports(dataForInbox,$(this).data('idForMysql'));


    closeModalButtons = document.querySelectorAll('[data-close-button]')
    overlay = document.getElementById('overlay')


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
 
        const modal = button.closest('.modal')
        closeModal(modal)
  })
})
 

 
     openModal(modal,defaulModal,button.getAttribute('data-idForMysql'))

   
  })
 
})//EDO openModalButtons

 
function openModal(modal,defaulModal,sqlID){
  //if(modal==null)return
//   modal.classList.add('active')
$('#modal').addClass('active')  
overlay.classList.add('active')
   
     
   if (defaulModal=='tablePostTitle' &&  $.cookie('userDept')=="Operator" ){
    
  
  getReports2(resultOfReports,sqlID);

  }else{
       
    getReports2(resultOfReports,sqlID);
         insertRemarkForReport(resultOfReports)

  }
       
  $('#containerOrderList').addClass('active');
 
  $('#containerOrderList table tbody tr').attr('display','table-row')

  
}



closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
 
        const modal = button.closest('.modal')
        closeModal(modal)
  })

 
})
 


 function closeModal(modal){
 
     $('.active').removeClass('active');
     $('.stateMsg').remove();
 
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

  }
 // modal()
})//EDO title click event


