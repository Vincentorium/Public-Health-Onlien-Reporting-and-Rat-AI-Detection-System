


//for operator to update report status between unapprove and approve fo
$(document).on('click','.submitButton',function(e){

    let submitButtonType=$(this).data("submit_button");
    let submitBox=$($(this).data("submit_box"))

    switch(submitButtonType) {
    case "reportSubmit":
            if(submitBox.find(".submitNotifyUser").is(':checked')){
                  updateReportStatus()
            }else{
                //display relevant reports box
                        $('.relevantReportsBox').addClass("activeRelevantReps")

                        getRevelantReportsForUpdate($(this).data("rep_street")) 
                        //  e.stopPropagation()
                        // return  
                //  if(!getRevelantReportsForUpdate($(this).data("rep_street"))===false){
                //        $('.relevantReportsBox').addClass("activeRelevantReps")
                //            e.preventDefault();}
                // else{ 
                //     e.preventDefault();
                //     return
            
                //     }       
            }

            break;
    case "relevantReportsSubmit":

            updateMultiReportsStatus()
            break;

    default:
        console.log("No a valid type ")
    }
//    e.stopPropagation()
//    return  
});//EO click Func



function updateReportStatus(){



    var repStatusRemark=$('.reportTextArea').val()
    var status=$('.repSubmitStatus').val()=="unchange"?null:$('.repSubmitStatus').val()
    var imageData = new FormData();
    imageData.append('image', $('#file-input-report')[0].files[0]);

    imageData.append('repStatusID',null);
    imageData.append('repStatusType',status);
    imageData.append('repID',repID);
    imageData.append('repStatusRemark',repStatusRemark);
    imageData.append('repUserID',$.cookie('userID'));


var data = {

    repStatusID:null,
    repStatusType:status,
    repStatusDateCreated: 0,
    repID:repID,
    repStatusRemark:repStatusRemark,
    repUserID:$.cookie('userID')
    };





$.ajax({

            url: 'php/updateStatusForOfficer.php',
            type: 'POST',
      data: imageData,
      processData: false,
      contentType: false,
            success: function(response) {

                    console.log('Status updated!');

                    getAllReort()
                    getReportsIntoInbox()
                    getReortForTable()
                    modal()

                    alert("Successfully Update the status!")
                    $('.active').removeClass('active');
                    //$('.stateMsg').remove();
                 //   $('#float').html($('#float').html()=="Approve"?"Unapprove":"Approve")
            },

        });//EO ajax


}
function updateMultiReportsStatus(){

         if(checkIsSelected()!=true){

             alert("Please select at leat a relevant report to update")
            return;
        }

        var repStatusRemark=$('.reportTextArea').val()
        var status=$('.repSubmitStatus').val()=="unchange"?null:$('.repSubmitStatus').val()
        let formDatas = new FormData();
        let index=0;

        $("#mytable>tbody>tr").each(function() {

            if ($(this).find(">td>input").is(':checked')) {

                formDatas.append('arr_'+index+'_repID',$(this).data("repid"))
                formDatas.append('arr_'+index+'_image', $('#file-input-report')[0].files[0]);
                formDatas.append('arr_'+index+'_repStatusID',null);
                formDatas.append('arr_'+index+'_repStatusType',status);
                formDatas.append('arr_'+index+'_repStatusRemark',repStatusRemark);
                formDatas.append('arr_'+index+'_repUserID',$.cookie('userID'));

                index++;
            }
        });



$.ajax({

            url: 'php/updateStatusForOfficer--withRelevantReports.php',
            type: 'POST',
      data: formDatas,
      processData: false,
      contentType: false,
            success: function(response) {
                    console.log('Status updated!');
                    getAllReort()
                    getReportsIntoInbox()
                    getReortForTable()
                    modal()
                    $('.relevantReportsBox').removeClass("activeRelevantReps")
                    $('.mytable').html()
                    alert("Successfully Update the status!")
                    $('.active').removeClass('active');

            },

        });//EO ajax


}

function checkIsSelected(){
 let isSelected=false;
 $("#mytable>tbody>tr").each(function( ) {
            if ($(this).find(">td>input").is(':checked')) {
                  isSelected=true;
                  return false;
            }

        });
  return isSelected;

}