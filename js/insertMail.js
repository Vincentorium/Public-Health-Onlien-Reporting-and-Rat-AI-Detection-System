
function insertMail(dataJS){



    let imageData = new FormData();
    let isSuccess=false;

    imageData.append('id',null);
    imageData.append('title',dataJS.title);
    imageData.append('content',dataJS.content);
    imageData.append('FKrepId',dataJS.repID);

    imageData.append('FKOfficerId',$.cookie('userID'));
   
    $(dataJS.attachMail).each(function(index,value){

 imageData.append('images_'+index,value );

    })

   



$.ajax({

            url: 'php/inserMail.php',
            type: 'POST',
      data: imageData,
      processData: false,
      contentType: false,
      async:false,
            success: function(response) {

                   
                    isSuccess=true;
                    alert("mail sent!");
               $('.modalOfMail').removeClass('active');
 
                 $('.file-input-Ctn-mail').addClass('demonHide');

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


                    alert("mail read!");


            },

        });//EO ajax

}