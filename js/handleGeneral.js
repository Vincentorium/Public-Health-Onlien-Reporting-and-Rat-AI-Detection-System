
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
          let tempArrMultiForSingeReport=[]

                $(".fileInputed--singleReportAttach").each(function(index,value){
                  tempArrMultiForSingeReport.push(value.files[0] );
              })
    switch(submitButtonType) {
    case "reportSubmit":

          
            if(!submitBox.find(".submitNotifyUser").is(':checked')){
                    var status=$('.repSubmitStatus').val()=="unchange"?null:$('.repSubmitStatus').val()
             alert("Successfully update the status to -> "+status+"!")
                    updateReportStatus(tempArrMultiForSingeReport)
            
                }else{
                    //if multi button is clicked
                  /*  if(!getRevelantReportsForUpdate($(this).data("rep_street"))===false){
                         $('.relevantReportsBox').addClass("activeRelevantReps")
                             e.preventDefault();}
                    else{ 
                      e.preventDefault();
                      return
            
                    }
                    */       
            }

            break;
    case "relevantReportsSubmit":
            
            if(updateMultiReportsStatus(tempArrMultiForSingeReport)) {
                  let status=$('.repSubmitStatus').val()=="unchange"?null:$('.repSubmitStatus').val()
              alert("Successfully update the status to "+status+"!")
               

            }

            break;

    case "relevantReportsSubmitWithMail":

               if(updateMultiReportsStatus(tempArrMultiForSingeReport)){
               let status=$('.repSubmitStatus').val()=="unchange"?null:$('.repSubmitStatus').val()
         
              alert("Successfully update the status to "+status+"!")
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
   
    let closeButtonType=$(this).data("submitctn");
    let submitBox=$("."+$(this).data("submitctn"))

    switch(closeButtonType) {
    case "multiSubmitBox":
           
           
            submitBox.removeClass("activeMultiMailBo")
             inputID__multiMails=0 
             clearMailBox_multiMails(submitBox)
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

 
//reload
      function refreshAfterUpdate(){
                 
                    getReportsIntoInbox()
                    getReortForTable()
                    modal()
                    getMostUrgentStreet()
 
                  
                  }

/* 
$(document).on('click','.searchIcon2 ',function(e){


  let locFilterSelectOption=""
  let  dateS
  let  dateE
   let  dateS_c_s
  let  dateS_c_e
  let dataJS
  let box
             switch($(this).data("search")) {
    case "stastic__cancel":
               box = $('.searchIcon').closest(".filterForm")
            
            
                            locFilterSelectOption=box.find('.filter__formInput--locFrm').val()
            
              dateS=box.find(".filter__formInput--date_s").val()
                dateE=box.find(".filter__formInput--date_e").val()
             dataJS={street:locFilterSelectOption,dateS:dateS,dateE:dateE}
              getChart(dataJS)
            break;

    //case "filter_date_compare_box":
    case "stastic":
                 box = $('.searchIcon').closest(".filterForm")
                locFilterSelectOption=box.find('.filter__formInput--locFrm').val()
                dateS=box.find(".filter__formInput--date_s").val()
              
                dateE=box.find(".filter__formInput--date_e").val()
                dateS_c_s=$(".filter_date_compare_box").find(".filter__formInput_compare_--date_s").val()
                dateS_c_e=$(".filter_date_compare_box").find(".filter__formInput_compare_--date_e").val()
                
                dataJS={
                  street:locFilterSelectOption,
                  dateS:dateS,
                  dateE:dateE,
                  dateS_c_e:dateS_c_e,
                  dateS_c_s:dateS_c_s
                }
                getChartCompare(dataJS)

            break;

    case "relevantReportsSubmitWithMail":
        
            break;
        
            
    default:
        console.log("No a valid type ")
    }

                
                
                });*/