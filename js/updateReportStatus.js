




function updateReportStatus(dataJS){



    var repStatusRemark=$('.reportTextArea').val()
    var status=$('.repSubmitStatus').val()=="unchange"?null:$('.repSubmitStatus').val()
    var imageData = new FormData();
 
    imageData.append('repStatusID',null);
    imageData.append('repStatusType',status);
    imageData.append('repID',repID);
    imageData.append('repStatusRemark',repStatusRemark);
    imageData.append('repUserID',$.cookie('userID'));
  // imageData.append('image', $('#file-input-report')[0].files[0]);


     $(dataJS).each(function(index,value){

                        imageData.append('images_'+(index),value );

                })


 


$.ajax({

            url: 'php/updateStatusForOfficer.php',
            type: 'POST',
      data: imageData,
      processData: false,
      contentType: false,
      asyn:false,
            success: function(response) {

                    console.log('Status updated!');

                    getAllReort()
                    getReportsIntoInbox()
                    getReortForTable()
                    modal()
 
                    $('.active').removeClass('active');
              
            },

        });//EO ajax


}
var repIDArray
var dataJSForMail;
function updateMultiReportsStatus(dataJSAttach){


         if(checkIsSelected()!=true){

             alert("Please select at leat a relevant report to update")
            return;
        }

        var repStatusRemark=$('.reportTextArea').val()
        var status=$('.repSubmitStatus').val()=="unchange"?null:$('.repSubmitStatus').val()
        let formDatas = new FormData();
        let index=0;
        let isUpdate=false;
         repIDArray=[];
         repNameArray=[];
         repTitle=[]
        $("#mytable>tbody>tr").each(function() {

            if ($(this).find(">td>input").is(':checked')) {
                

                formDatas.append('arr_'+index+'_repID',$(this).data("repid"))
               // formDatas.append('arr_'+index+'_image', $('#file-input-report')[0].files[0]);
              
                formDatas.append('arr_'+index+'_repStatusType',status);
                formDatas.append('arr_'+index+'_repStatusRemark',repStatusRemark);
                formDatas.append('arr_'+index+'_repUserID',$.cookie('userID'));

                repIDArray.push($(this).data("repid"))
                repNameArray.push($(this).find(".userNameTD").html())
                index++;
            }
        });



        dataJSForMail={
                "repID":repIDArray,
                "usersName":repNameArray,
                "attachMail":$('#file-input-report')[0].files[0],
                "title":null,
                "content":null
        }


                 $(dataJSAttach).each(function(index,value){

                        formDatas.append('images_'+(index),value );

                })












$.ajax({

            url: 'php/updateStatusForOfficer--withRelevantReports.php',
            type: 'POST',
      data: formDatas,
      processData: false,
      contentType: false,
      async:false,
            success: function(response) {
                    isUpdate=true;
                    getAllReort()
                    getReportsIntoInbox()
                    getReortForTable()
                 
                    $('.relevantReportsBox').removeClass("activeRelevantReps")
                    $('.mytable').html()
                  
                  $('#modal, .relevantReportsBox').removeClass('active');
                   

                    refreshAfterUpdate() 
               
            },

        });//EO ajax

return isUpdate;
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