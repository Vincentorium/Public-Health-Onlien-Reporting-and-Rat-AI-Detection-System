

//for operator to update report status between unapprove and approve fo
$(document).on('click','.mailSubmitButton',function(e){
    
    
    var content=$('.mailTextArea')
    var imageData = new FormData();
    var title=$('.mailTitleInput');
    var attachMail=$('.file-input-mail');
    imageData.append('image', attachMail[0].files[0]);
 
    imageData.append('id',null);
    imageData.append('title',title.val());
    imageData.append('content',content.val());
    imageData.append('FKrepId',repID);
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
               content.val("")
               title.val("")
               attachMail.val("")
                 $('.file-input-Ctn-mail').addClass('demonHide');
           
            },
    
        });//EO ajax



    });//EO click Func
 
 
