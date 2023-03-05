

var modal

$(document).ready(function () {

modal=function modal(){
 var openModalButtons = document.querySelectorAll('[data-modal-target]')
 var closeModalButtons = document.querySelectorAll('[data-close-button]')
var overlay = document.getElementById('overlay')

 


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
 
     const modal = document.querySelector(button.dataset.modalTarget)
  
     const defaulModal =  button.getAttribute('data-default');
     //getReports(dataForInbox,$(this).data('idForMysql'));
 getReports2(dataForInbox,button.getAttribute('data-idForMysql'));

    closeModalButtons = document.querySelectorAll('[data-close-button]')
    overlay = document.getElementById('overlay')


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
 
        const modal = button.closest('.modal')
        closeModal(modal)
  })
})
 

 
     openModal(modal,defaulModal)

   
  })
 
})//EDO openModalButtons






 
function openModal(modal,defaulModal){
  if(modal==null)return
  modal.classList.add('active')
  overlay.classList.add('active')
  if(defaulModal=='signIn'){
    $('#container1').addClass('active');
  }else if(defaulModal=='createAccForOperator'){
      $('#container2').addClass('active');
      $('.signupHeader').text("Create account for the Operator");
      
     
  }else if (defaulModal=='setPasswordOperator'){
    alert('Please reset your password for the first login')
    $('.resetPassword').addClass('active');
        $("#container1").removeClass("active");
   
 
  }else if (defaulModal=='reserveFlight'){
    
  $('.reserveFlightMsgBox').addClass('active');
      $('.signupHeader').text("Please Confirm Your Order List");
      

  }else if (defaulModal=='orderList'){
  $('#containerOrderList').addClass('active');
 
  $('#containerOrderList table tbody tr').attr('display','table-row')
 
  }else if (defaulModal=='reservationMsg'){
    
  $('.confirmmsgBox').addClass('active');
    $('.reserveFlightMsgBox').removeClass('active');
     

  }else{
      $('#container2').addClass('active');

  }


  
}



















  


 function closeModal(modal){
 
     $('.active').removeClass('active');
     $('.stateMsg').remove();
 
}


 
//const openModalButtons = document.querySelectorAll('[data-modal-target]')





closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
 
        const modal = button.closest('.modal')
        closeModal(modal)
  })

 
})
 


 
 overlay.addEventListener('click', () => {
 
   const modals=document.querySelectorAll('.modal.active') 
  modals.forEach(modals=>{ closeModal(modals)})
    
    
  })



  $('close-button overlay').click( () => {
    
   const modals=document.querySelectorAll('.modal.active')
   modals.forEach(modals=>{ closeModal(modals)})

    
  })

  }
  modal()
})//EDO title click event


