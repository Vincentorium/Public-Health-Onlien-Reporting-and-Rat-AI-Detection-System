




























function getMailContent(mailId){

  //alert("caller is " + getReports2.caller);
 
var status="readonly";

var content=""
 
$.each(mailResult, function(index, data){
  

//fetch data from the result which loads at begin.
  if(data.mailId==mailId){
   
       var identity=data.isSent==0?"Sender":"Recipient"
       var button=""
       if(data.isSent==0)
      {
        button=
'<div class="maiBoxFunInsideRep"> '
 
+'<div class="mail-list-content-mailBoxFunctionBox">'
+'            <button class="sendCmtBtn sendCmtBtnGP2 mailReplayButton" >Replay</button>'
 
 +'</div>'
+'</div> '

      }


       repID=data.FKrepId
      content+=
 
      

//demonHide cmtSumbitBox
 

  '<div class="mail-content-box"   >'
  
 +'<div class="mailBoxTitle">'
 +'<h3>Title: '+data.title+'</h3>'
 //

+'<span class="reportIcon mail-list-content-title-relevantReport" '
+' data-modal-target="#modal"   data-default="modal"      data-idformysql='+repID+'>Display Report </span>'
//'+data.repTitle +'
 +'</div>'
 +'<hr style="width:100%;text-align:left;margin-left:0">'
 

 +'<div>Date:'+data.dateCreated+' </div>'
 +'<hr style="width:100%;text-align:left;margin-left:0">'
 +'<div class="mailBoxRecipients">'
 +'<span >'+identity+': </span>'
 +'<input type="text" class="mailInput recipientInput" '+status+' value='+data.userName+'>'
  +'<span>Relevant Groups:</span>'
 
 
 
+'            <select name="Status" class="mailRelevantGroup" >'
+'              <option value="Unchange">None</option>'
+'              <option value="Fack Checking">Default Group</option>'
+'              <option value="Wait in line">Wait in line</option>'
 
+'              <option value="Solved">Solved</option>'
+'              <option value="unapproved">reclassfiy</option>'
+'              <option value="approved" class="temp_test">for Test</option>'
+'            </select>'
 
 
 
  +'</div>'
 +'<hr style="width:100%;text-align:left;margin-left:0">'
 
+'<div class="submitOptions">'
+'          <textarea class="mailTextAreaForContent mailTextArea" placeholder="replay..." rows="20" name="comment[text]" id="comment_text" cols="40"'
+'            class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'            aria-haspopup="true" style="resize:none;" '+status+'>'+data.content+'</textarea>'
+'          <br>'

+ '  <a href="data:image/png;base64,'+ data.attachment+'" download>'+(data.attachName==null?"":data.attachName)+'</a>' 

 +'<!--SO mailBoxFunctionInsideRep-->'
+button
 

+'<!--EO mailBoxFunctionInsideRep-->'

+'</div>'
+'</div>'
//EO Mail Box



+  '    <!-- SO Mail -->'
+'                <div class="mailSubmitBox modalGeneral" id="mailSubmitBox">'
+''
+'                  <div class="mailBoxRecipients">'
+'                    <span class="mail-replay-title">'
+'<img src="./images/replyIcon.png" class="replayIcon" >'
+data.userName+'</span>'
+'                    <select name="Status" class="mail-content-replay">'
+'                      <option value="Unchange">None</option>'
+'                      <option value="Fack Checking">Default Group</option>'
+'                      <option value="Wait in line">Wait in line</option>'
+'                      <option value="Solved">Solved</option>'
+'                      <option value="unapproved">reclassfiy</option>'
+'                      <option value="approved" class="temp_test">for Test</option>'
+'                    </select>'
+'  <span class="mail-list-submit-box-cancel" data-close-button>X</span>'
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
+'                    <br>'
+''
+'                    <!--SO mailBoxFunctionInsideRep-->'
+'                    <div class="maiBoxFunInsideRep">'
+''
+'                      <!--  image file and close button-->'
+'                      <span class="file-input-Ctn file-input-Ctn-mail demonHide">'
+'                        <input type="file" name="file-input" class="file-input file-input-mail file-input-mail-JS"'
+'                          id="file-input">'
+'                        <span class="file-input-cancel">X</span>'
+'                      </span>'
+'                      <hr style="width:100%;text-align:left;margin-left:0">'
+'                      <!--  button and label and image-->'
+'                      <div class="mailBoxFunctionInsideRep">'
+'                        <input type="text"  class="mailTitleJS demonHide" value="Reply: '+data.title+'" >'


+'                        <button class="sendCmtBtn sendCmtBtnGP2 mailSubmitButton"'
+'                          data-submitctn=".mailSubmitBox" data-close-button>Send</button>'
+'                        <div class="uploadForAttach">'
+'                          <label for="file-input">'
+'                            <img src="./images/attachIcon.png" />'
+'                          </label>'
+'                        </div>'
+'                      </div>'
+'                    </div>'
+''
+''
+'                  </div>'
+'                </div>'

+                '<!--EO Mail -->'
 

return false


}

 });//end of $.each
 
   
     $('.mail-content').html(content)
  
    modal()
  
}//EOF GETREPORTS FUNCTION


 