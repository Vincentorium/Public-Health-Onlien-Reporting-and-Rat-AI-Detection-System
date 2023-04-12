
function insertMail(dataJS){



     var imageData = new FormData();
   

    imageData.append('id',null);
    imageData.append('title',dataJS.title);
    imageData.append('content',dataJS.content);
    imageData.append('FKrepId',dataJS.repID);
    imageData.append('image', dataJS.attachMail);
    imageData.append('FKOfficerId',$.cookie('userID'));
   






$.ajax({

            url: 'php/inserMail.php',
            type: 'POST',
      data: imageData,
      processData: false,
      contentType: false,
            success: function(response) {

                    console.log('Mail inserted!');

                    alert("mail sent!");
               $('.modalOfMail').removeClass('active');
           //    content.val("")
              // title.val("")
             //  attachMail.val("")
                 $('.file-input-Ctn-mail').addClass('demonHide');

            },

        });//EO ajax

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