
$(document).on("change",".file-input",function(){
  $(this).parent().removeClass('demonHide');
  createThumbnail()
});
$(document).on("click",".file-input-cancel",function(){
  $(this).parent().addClass('demonHide');
   $(this).prev().val('');
});

var thumbnail 
function createThumbnail() {
            if (event.target.files.length > 0) {
                var file = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
       
                    thumbnail = $("<img class='thumbnails--solvedMail' />").attr("src", e.target.result);
      
                   
                };
                reader.readAsDataURL(file);
            }
        }



        
//for operator to update report status between unapprove and approve fo
$(document).on('click','.submitButton',function(e){

    let submitButtonType=$(this).data("submit_button");
    let submitBox=$($(this).data("submit_box"))

    switch(submitButtonType) {
    case "reportSubmit":
            if(!submitBox.find(".submitNotifyUser").is(':checked')){
                  updateReportStatus()
            }else{
       
                    if(!getRevelantReportsForUpdate($(this).data("rep_street"))===false){
                         $('.relevantReportsBox').addClass("activeRelevantReps")
                             e.preventDefault();}
                    else{ 
                      e.preventDefault();
                      return
            
                    }       
            }

            break;
    case "relevantReportsSubmit":

            if(updateMultiReportsStatus()) {
               alert("Successfully update the status!")

            }

            break;

    case "relevantReportsSubmitWithMail":
             if(updateMultiReportsStatus()){
              
              alert("Successfully update the status!")
              displayMailBox(dataJSForMail)
              
            }
            break;
        
            
    default:
        console.log("No a valid type ")
    }
//    e.stopPropagation()
//    return  

e.stopPropagation()
});//EO click Func

 
//for operator to update report status between unapprove and approve fo
$(document).on('click','.closeButton',function(e){

    let closeButtonType=$(this).data("close_button");
    let submitBox=$("."+$(this).data("close_button"))

    switch(closeButtonType) {
    case "multiSubmitBox":
           
            alert("close test")
            submitBox.removeClass("activeMultiMailBo")
            break;
    case "relevantReportsSubmit":
 

            break;

    case "relevantReportsSubmitWithMail":
        
            break;
        
            
    default:
        console.log("No a valid type ")
    }
//    e.stopPropagation()
//    return  

e.stopPropagation()
});//EO click Func

 

      function refreshAfterUpdate(){
                    getAllReort()
                    getReportsIntoInbox()
                    getReortForTable()
                    modal()
                  
                  }