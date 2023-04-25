




var mailResultSpecific
var mailLastestOne



 function getMailRecordsspecific(repID){
  let content=""
  let title
  let replayBox
  let noOfMail
 
      $('.mail-record-box-table-specific').html("");
   
      $('.mail-record-box-table-specific').fadeOut(1);
  let replyButton='<div class="mailBoxFunctionInsideRep-specific">'
+'            <button class="sendCmtBtn sendCmtBtnGP2 mail-specific-replayButton">Reply</button>'
+' </div>'




















       //var identity=isSentByOfficer?"Sender":"Recipient"
      
     
$.ajax({
        type:'POST',
        dataType: "json",
        data: {
        repID,repID 
          },

   
          url: "./php/getMailRecordsSpecific.php",
          success: function (result) {
 
 
            mailResultSpecific =result
            title=result[0].repTitle
            noOfMail=result.length

     $.each(result, function(index, data){
           
                let havaAttach=(data.images!=0);
                let mailAttachment=""
                if(havaAttach){         
                        $(data.images).each(function(index,data){
                                  mailAttachment+= '<a href="./php/uploads/'+data+'" download>'
                      +'<img class="thumbnails" src="./php/uploads/'+data+'" alt="No"   style="display: '+(havaAttach===true?"inline":"none")+'"></a>' 


                        })
                     
                }

                let isSentByOfficer=(data.isSentByOfficer==1)
                let sender=(isSentByOfficer?data.mailSenderName:data.citizenName)
                let recipient=(isSentByOfficer?data.citizenName:"Officer")





            content +=
            '<div class="mail-list-summary-one mail-list-summary-specific  '+ ((!isSentByOfficer&&data.isRead==0)?"mail-list-summary-one--isRead":"")+'" '  
+' data-mailid='+data.mailId 
+' isSentByOfficer='+isSentByOfficer
+' data-isread='+data.isRead+'>'


//SO title
+'<div class="mail-specific-mail-head">'


        +'<div class="mail-specific-head-figureImage">'

        +(sender).charAt(0)
        +'</div>'


        +'<div class="mail-specific-head-sendReceive">'

              +'<div class="mail-specific-head-sender">'
 +'<div class="mail-specific-head-sender-name"> ' 
       +sender
       +' </div>'
 
 +'<hr  class="mail-specific-head-betwennNameDate">'
        
      



 +'<div class="mail-specifi-head-dateCreated"> Date:'+data.dateCreated+' </div>'
              +'</div>'

              +'<div class="mail-specific-head-receiver">'
   
+data.content

              +'</div>'

        +'</div>'

+'</div>'



//EO title


+'<div class="mail-specific-short">'







 + '<div class="mail-content-box"   >'
  
 +'<div class="mailBoxTitle">'

 //
 
//'+data.repTitle +'
 +'</div>'
 
 



 +'<div class="mailBoxRecipients">'
 

  +'</div>'
 
+'<div class="submitOptions">'
+'          <textarea class="mailTextAreaForContent mailTextArea mailTextAreaSpecific" placeholder="replay..." rows="20" name="comment[text]" id="comment_text" cols="40"'
+'            class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'            aria-haspopup="true" style="resize:none;" '+status+'>'

      + "Recipient:"
         + recipient



+'</textarea>'
+'<br>'

+''+(havaAttach===true?
  ("<div  class='attachTitleBox'><span class='attachTitle'>Attachment:</span>"
      +"<div class='attachPic'>"
          + mailAttachment
      +"</div>"
  +"</div>"):"")
 

+'          <br>'


 
 +'<!--SO mailBoxFunctionInsideRep-->'
 
 

+'<!--EO mailBoxFunctionInsideRep-->'

+'</div>'
+'</div>'
//EO Mail Box


+'</div>'
 



+'            </div>'

 





 replayBox=

   '    <!-- SO mail_specific_mail_box  -->'
+'                <div class="mailSubmitBox--JS mail_specific_mail_box" id="mailSubmitBox" data-repID='+repID+' data-mailTitle='+title+' data-submitbox="mailBox--specific">'
+''
+'                  <div class="mailBoxRecipients">'
+'                    <span class="mail-replay-title">'
+'<img src="./images/replyIcon.png" class="replayIcon" >'
+recipient+'</span>'
 
+'  <span class="mail-list-submit-box-cancel close-transform-box" >X</span>'
+'                  </div>'
+''
+''
+''
+''
+'                  <div class="submitOptions">'
+'                    <textarea class="cmtBox mailTextAreaForReply mailTextArea" placeholder="remark..." rows="20"'
+'                      name="comment[text]" id="comment_text'
+'      cols=" 40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'                      aria-haspopup="true" style="resize:none;"></textarea>'
 
+''












+'<!--SO mail_specific_submit-box-->'

+'<div class="maiBoxFunInsideRep mail_specific_submitButton"> '
+'<!--  image file and close button-->'
+'<span class="file-input-Ctn file-input-Ctn-mail demonHide">'

+'<input type="file" name="file-input"  class="file-input file-input-mail file-input-mail-JS" id="file-input-mail-specific">'
+'<span class="file-input-cancel">X</span>'
+'</span>'



//S input file
 +' <div class="mailAttachBox mailAttachBox--specificBox">'
 +'       <input type="file" id="file-input--specificBox" class="fileInput fileInput--specificBox inputDisplay--specificBox file-input-mail-JS 0" />'
 +'       <div class="preview preview--specificBox"></div>'
 
 +'   </div>'


+' <hr style="width:100%;text-align:left;margin-left:0">'
//E input file




+'<!--SO  button and label and image-->'
+'<div class="mailBoxFunctionInsideRep ">'
+'            <button class="sendCmtBtn sendCmtBtnGP2 mail-specific-submitButton"  data-submitctn=".mail_specific_mail_box">Send</button>'
+' <div class="uploadForAttach">'

  +'  <label for="file-input--specificBox">'
    +'    <img src="./images/attachIcon.png"/>'
   +' </label>'

 +'</div>'
 +'</div>'















+'</div> '








+'<!--EO mail_specific_submit-box button and label and image-->'



+'                    </div>'
+''
+''
+'                  </div>'
+'                </div>'

+                '<!--EO mail_specific_mail_box-->'
 

















            
        })
           $.each(result, function(index, data){
           
            mailLastestOne=data.mailId

            return false;
        })
        
                
 
     
        $(".mail-record-box-table-specific").html(
        content==""?"No any mail":(  '<h3   >Title:'+title+'</h3>'+ content+replyButton+replayBox) );
                      
 
 
        $('.mail-record-box-table-specific').fadeIn(500);

//style for 

 let mailBox=$(".mail-record-box-table-specific > div").eq(noOfMail-1).addClass('mailListHover').css('height', 'auto');
     
  let textArea=$(mailBox).find( '.mailTextAreaSpecific');
  let tempText=$(mailBox).find( '.mail-specific-head-receiver').html()
  $(mailBox).find('.mail-specific-head-receiver').html(textArea.html())
  
  textArea.html(tempText) 

   
          //  addNoIndex(); 
        //  var table =document.getElementById('mail-record-box-table-specific')
       // getPagination(table);


              }
 
        
})

}


function insertMailBoxIntoPost(){

  let content=
'            <!-- SO mail-specific -->'


+'            <div class="mailbox-mainLayer-specific">'
+'              <div class="mailbox-mainLayer-top">'
+'                <div class="mailBoxFilterTitle"> Mail </div>'

 
+'                <div class="mail-list-filter-Box-specific">'

+'                  <div>'
+'                    User: <input type="text">'
+'                    Keyword: <input type="text">'
+'                  </div>'
+'                  <button class="mailbox-filterButton">Search</button>'
+'                </div>'
+'              </div>'

+'              <div class="mail-record-box mail-reocrd-box-specific" id="mail-record-box">'
 
+'                <div class="maibox-list maibox-list-specific">'
+'                  <div class=" ">'

+'                    </h3>'
+'                  </div>'
+'                  <div id="mail-record-box-table" class="mail-record-box-table-specific">'

+'                  </div>'

+'                  <div class=" complaintTableBottomFunc mail-reocrd-table-pagination">'

+'                  </div>'
+'                  <!-- <div class="mail-record-table-container">'
+'              <nav>'
+'                <ul class="mail-record-table-pagination"> </ul>'

+'              </nav> -->'

+'                </div>'
+'                <div class="mail-content-ctn">'
+'                  <div class="mail-content"></div>'

+'                </div>'

+'              </div>'
+'            </div>'
+'             <!-- EO mail-specific -->'


  $('.containerOrderList').append(content)
}

