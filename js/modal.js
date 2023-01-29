
 
$('body').on('click','.allPostTitle,.favElement1',function(){

 
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


 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

 

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
  
    const modal = document.querySelector(button.dataset.modalTarget)
  
     const defaulModal =  button.getAttribute('data-default');

    openModal(modal,defaulModal)
   
  })
 
})



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
$(document).ready(function () {

});

})
 