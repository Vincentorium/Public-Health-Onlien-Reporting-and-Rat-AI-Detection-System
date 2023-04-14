

$(document).on('click','.sendCmtBtnGeneral,.mail-specific-submitButton,.mailSubmitButton',function(e){
    
        handleMailInsert($(this))
        e.stopPropagation()
    });//EO click Func

//submit button decide the submit box, and get relevant data
function handleMailInsert(submitButton){


 
    let box=$(submitButton.data('submitctn')) 
    let boxType=box.data("submitbox")
    let dataJS={

     "content": box.find('.mailTextArea').val(),
     "title": "Reply - "+box.find(".mailTitleInput ").val(),//box.data('mailtitle'),
     "repID": box.data('repid'),
     "attachMail":box.find('.file-input-mail-JS')[0].files[0]
    }
    

    
     switch(boxType){
      

          case "mainMailBoxSubmitBox":

           let tempArr=[]

          $(".fileInputed--mainMailBox").each(function(index,value){
              tempArr.push(value.files[0] );
          })
          dataJS.attachMail= tempArr

            dataJS.title="Reply - "+box.data("mailtitle")
            if(insertMail(dataJS)){
           // $(".mail-list-content-mailBoxFunctionBox").removeClass("demonHide")
            closeTransformBox(box)
            getMailRecordsspecific(repID)
         
         
                clearMailBox(box)

        

          }
        break;

         case "mailBox--specific":
            dataJS.title="Reply - "+box.data("mailtitle")
            if(insertMail(dataJS)){
            $(".mail_specific_mail_box").removeClass("mail_specific_mail_box--active")
            
            
          box.find('.mailTextArea').val("")
          getMailRecordsspecific(dataJS.repID)
          }
        break;
       
        case "mailBox":

            insertMail(dataJS)
            $(".mail-list-content-mailBoxFunctionBox").removeClass("demonHide")
            closeTransformBox(box)
            getMailRecordsspecific(repID)
            break;

        case "multiSubmitBox":
           dataJSForMail.title=box.find(".mailTitleInput ").val();
           dataJSForMail.content=box.find(".mailTextArea ").val()
           insertMultiMail(dataJSForMail)
           $(".multiSubmitBox").removeClass("activeMultiMailBo")
           break;


        }
e.stopPropagation();
}






function displayMailBox(dataJS){

//let file=dataJS.attachMail;
 
let users= (dataJS.usersName).map(function(item) {
  return item.toString()+";";
}).join("");
let content= 
 '<!--SO mailBoxFunctionInsideRep-->'
+'<div class="mailBoxG mailBoxInsideRep  modalGeneral multiSubmitBox activeMultiMailBo"  id="modalOfMail'
+ 'data-mailtitle="Temp: solved title" data-submitBox="multiSubmitBox" >'
+'  <div class="loginCtnTitle">'
+'    <!--  <h2>IVE Airline</h2> <a class="close" data-close-button></a> -->'
+'    <h2 class="boxTitle">Mail</h2>'
+'    <img class="closeIcon close mailClose closeButton" src="./images/exit.png" data-close_button="multiSubmitBox" alt="">'
+''
+''
 
+'  </div>'
 +'<div class="mailBoxRecipients">'
 +'<span >Recipient: </span>'
 +'<input type="text" class="mailInput recipientInput" value="'+users+'">'
 
 
  +'</div>'
 +'<hr style="width:100%;text-align:left;margin-left:0">'
  +'<div class="mailBoxTitle mailBoxTitle--specific">'
 +'<span>Title:</span>'
  +'<input type="text" class="mailInput mailTitleInput mailTitleJS" >'


 +'</div>'
 +'<hr style="width:100%;text-align:left;margin-left:0">'
 
+'<div class="submitOptions">'
+'          <textarea class="cmtBox mailTextArea" placeholder="remark..." rows="20" name="comment[text]" id="comment_text" cols="40"'
+'            class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'            aria-haspopup="true" style="resize:none;"></textarea>'
+'          <br>'

+'<!--SO mailBoxFunctionInsideRep-->'
+'<div class="maiBoxFunInsideRep"> '
+'<!--  image file and close button-->'
+'<span class="file-input-Ctn file-input-Ctn-mail demonHide">'

+'<input type="file" name="file-input"  class="file-input file-input-mail file-input-mail-JS" id="file-input">'
+'<span class="file-input-cancel">X</span>'
+'</span>'


+'<!--SO  button and label and image-->'
+'<div class="mailBoxFunctionInsideRep mail_specific_submitButton">'
+'            <button class="sendCmtBtnGeneral sendCmtBtn sendCmtBtnGP2 mailSubmitButton" data-submitctn=".multiSubmitBox">Send</button>'
+' <div class="uploadForAttach">'

  +'  <label for="file-input" >'
    +'    <img src="./images/attachIcon.png"/>'
   +' </label>'

 +'</div>'
 +'</div>'

+'<!--EO  button and label and image-->'

+'</div> '
+' <div class="thumbnail thumbnail--mutlMail">  </div> '
+'</div>'
+'</div>'


+'<!--EO mailBoxFunctionInsideRep-->'
 
//EO Mail Box

 
//   $('.postContentBox').append(content) 
   $('.windowModal--mailbox').html(content) 

   $('.thumbnail--mutlMail').append(thumbnail) 

}



$(document).on('click','.close-transform-box',function(e){

closeTransformBox($(this).closest('.mailSubmitBox--JS'))
e.stopPropagation()

})  
// $(document).on('click','.mail-specific-submitButton',function(e){


//   insertMail()
 
//  e.stopPropagation()
// })

//close mail submission box
function closeTransformBox(submitBox){

  
//$(".mail_specific_mail_box").removeClass("mail_specific_mail_box--active")
$(submitBox).removeClass("mail_specific_mail_box--active")

}



$(document).on('click','.mail-specific-replayButton',function(e){



  $(".mail_specific_mail_box").addClass("mail_specific_mail_box--active")
  e.stopPropagation()
})


$(document).on('click','.mailReplayButton',function(e){
$(".mailSubmitBox").addClass("active")
//$(".mail-list-content-mailBoxFunctionBox").addClass("demonHide")
})


 $(document).on("click",".mail-list-submit-box-cancel",function(){

  $(".mail-list-content-mailBoxFunctionBox").removeClass("demonHide")
  clearMailBox($(".mailSubmitBox"))
 })


 $(document).on("click",".mail-list-content-title-relevantReport",function(){
 getReports2(resultOfReports,$(this).data('repid'));
   
 })



// the check if the mail is read
var isReadSet=new Set();
var isInboxList=true //help to identify which mail list click trigger to hand mail read 
$(document).on("click",".mail-list-summary-one",function(){
  $(".mailListHover").removeClass('mailListHover')
  $(this).addClass('mailListHover');
 
  
  //to see if the mail is needed to handle read affair
  if(isInboxList&&$(this).data('isread')==0){
    isReadSet.add($(this).data('mailid'))
   $(this).removeClass('mail-list-summary-one--isRead');}


//get mail content 
     var mailId=$(this).data('mailid')
      getMailContent(mailId)
  
});
 


$(document).on("click",".mail-button ",function(){
  $(".mail-button").removeClass('mailbuttonHover ')
  $(this).addClass('mailbuttonHover ');
});




  

 
 $(document).on('click','.mail-button-inbox',function(e){
      isInboxList=true
      
      getMailRecords(0)
      getMailContent(mailLastestOne)
      
})

 $(document).on('click','.mail-button-sent',function(e){
     isInboxList=false
      
      getMailRecords(1)
       getMailContent(mailLastestOne)
       if(isReadSet.size!=0)
          updateMaiStatus([...isReadSet])
          isReadSet.clear()
})



$(document).on('click','.mail-specific-mail-head',function(){

  let mailBox=$(this).closest('.mail-list-summary-specific')
  let textArea=$(mailBox).find( '.mailTextAreaSpecific');
  let tempText=$(mailBox).find( '.mail-specific-head-receiver').html()
  $(mailBox).find('.mail-specific-head-receiver').html(textArea.html())
  
  textArea.html(tempText)

  
  
   // $(mailBox).css({height:'80px',overflow:'hidden'}).slideUp()
  if($(mailBox).height()>80){
     textArea.css("opacity",0)
     $(mailBox).animate({height:'80px'},500)}
  else
  {
         textArea.css("opacity",1)
     $(mailBox).animate({ height: $(mailBox)[0].scrollHeight }, 500)
  }


  })


























  
$(document).ready(function() {
     var inputID=0 
  $(document).on('change',".inputDisplay--mainMailBox", function() {
   
    
 $(this).addClass("fileInputed--mainMailBox")
 $(this).removeAttr('id');

     var newInput
      var reader = new FileReader();
      reader.onload = function(e) {

        
        var img = $('<img class="mailAttach--mainMailBox">').attr({
          src: e.target.result,
          width: 50,
          height: 50
        });
          var removeBtn = $('<button class="close-button--mainMailBox" data-close='+inputID+'>').text('x');
         newInput = $('<input>').attr({
        type: 'file',
        name: 'images[]',
        class: "fileInput inputDisplay--mainMailBox "+ ++inputID,
        id:"file-input--mainMailBox"
         
      });
             $('.preview--mainMailBox').before(newInput);

      
        removeBtn.on('click', function() {
          $(this).parent().remove();

         
          $("."+$(this).data("close")).remove()

        });

        var previewDiv = $('<div>').append(img).append(removeBtn);
        $('.preview--mainMailBox').append(previewDiv);
      };
      reader.readAsDataURL($(this).get(0).files[0]);

     

     
      $(this).removeClass("inputDisplay--mainMailBox").css("display", "none");
   
    e.stopPropagation()
  });
   e.stopPropagation()
});

        function clearMailBox(box){

                    box.find('.mailTextArea').val("")
                    box.find('.preview').html("")
                     
                    box.find(".mailAttachBox").html(
                       '       <input type="file" id="file-input--mainMailBox" class="fileInput fileInput--mainMailBox inputDisplay--mainMailBox file-input-mail-JS 0" />'
                      +'       <div class="preview preview--mainMailBox"></div>'
                    )
                   
              }