

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
   
   
  const modal = $(this).data('modal-target') ; 
  
     const defaulModal = $(this).data('default')  


    closeModalButtons = document.querySelectorAll('[data-close-button]')
    overlay = document.getElementById('overlay')

   openModal(modal,defaulModal, $(this).data("idformysql"))

  
  })
    });
  
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
        let el = document.getElementById('modalOfMail');
        let indicator=$('.report-mail-floatIcon') 
        var scrollPosition = window.pageYOffset;
       

      if(indicator.text()=="Correspondence"){
      $('.mailbox-mainLayer-specific').css({display: 'block'});
      $('.cmtContainer').css({display: 'none'});
      indicator.text("Report")
    }else{
      $('.mailbox-mainLayer-specific').css({display: 'none'});
      $('.cmtContainer').css({display: 'block'});
         indicator.text("Correspondence")
    }



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

getMailContent(mailLastestOne,0)
 
$('.mail-record-box table tbody tr').attr('display','table-row')
 
 
  }else if (defaulModal=='mailSpecific'){
         $(modal).addClass('active');
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
    let modaType=$(modal).data("modal_type")

 
    if(modaType===undefined){

    modal.classList.remove('active');
    }else if(modaType==="relevantReportsBox"){
       modal.classList.remove('activeRelevantReps');
          $(".submitNotifyUser").prop("checked", false);
    }
 
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


