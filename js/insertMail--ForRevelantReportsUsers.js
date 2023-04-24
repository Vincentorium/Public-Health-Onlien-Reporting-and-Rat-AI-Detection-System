 


function insertMultiMail(dataJS){



   let formDatas = new FormData();
   let isSuccess=false;
 

    $(dataJS.repID).each(function(index,value) {
            formDatas.append('arr_'+index+'_FKrepId',value);
            formDatas.append('arr_'+index+'_FKOfficerId',$.cookie('userID'));
            formDatas.append('arr_'+index+'_title',dataJS.title)
 
            formDatas.append('arr_'+index+'_content',dataJS.content);
 
        });

                $(dataJS.attachMail).each(function(index,value){

                        formDatas.append('images_'+(index),value );

                })





$.ajax({

            url: 'php/inserMail--withRelevantReports.php',
            type: 'POST',
      data: formDatas,
      processData: false,
      contentType: false,
      async:false,
            success: function(response) {
                isSuccess=true;
                //    console.log('Mail inserted!');

                    alert("mail sent!");
                  //  $('.modalOfMail').removeClass('active');
                    //$('.file-input-Ctn-mail').addClass('demonHide');

            },

        });//EO ajax


return isSuccess;
}



 



function updateMaiStatus(mailIDSet){


$.ajax({
     url: 'php/updateMailReadStatus.php',
     type: 'POST',
     data: {
          mailIDSet:mailIDSet,
      },
      
            success: function(response) {

                  
           
            },
    
        });//EO ajax

}