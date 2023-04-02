 
var mailResultSpecific
var mailLastestOne


getMailRecordsspecific(1)
 function getMailRecordsspecific(isSent){
  var content
  let title
  repID=3;
      $('.mail-record-box-table-specific').html("");
   
      $('.mail-record-box-table-specific').fadeOut(1);
      
       //var identity=data.isSent==0?"Sender":"Recipient"
      
     
$.ajax({
        type:'POST',
        dataType: "json",
        data: {
        repID,repID,
       
        userID: $.cookie('userID')
          },
         async: false,
   
          url: "./php/getMailRecordsSpecific.php",
          success: function (result) {
mailResultSpecific =result
 title='get from the post'
                
     $.each(result, function(index, data){
           
            content +=
'   <div class="mail-list-summary-one mail-list-summary-specific  '+ ((data.isSent==0&&data.isRead==0)?"mail-list-summary-one--isRead":"")+'" '  
+' data-mailid='+data.mailId 
+' data-issent='+data.isSent
+' data-isread='+data.isRead+'>'


//SO title
+'<div class="mail-specific-mail-head">'


        +'<div class="mail-specific-head-figureImage">'

        +(data.userName).charAt(0)
        +'</div>'


        +'<div class="mail-specific-head-sendReceive">'

              +'<div class="mail-specific-head-sender">'
 +'<div class="mail-specific-head-sender-name"> ' 
       +data.userName
       +' </div>'
 
 +'<hr  class="mail-specific-head-betwennNameDate">'
        
      



 +'<div class="mail-specifi-head-dateCreated"> Date:'+data.dateCreated+' </div>'
              +'</div>'

              +'<div class="mail-specific-head-receiver">'
         + "Recipient:"
         + (data.isSent==0?"Officers":(data.posterName))

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
+'          <textarea class="mailTextAreaForContent mailTextArea" placeholder="replay..." rows="20" name="comment[text]" id="comment_text" cols="40"'
+'            class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'            aria-haspopup="true" style="resize:none;" '+status+'>'+data.content+'</textarea>'
+'          <br>'

+ '  <a href="data:image/png;base64,'+ data.attachment+'" download>'+(data.attachName==null?"":data.attachName)+'</a>' 

 +'<!--SO mailBoxFunctionInsideRep-->'
 
 

+'<!--EO mailBoxFunctionInsideRep-->'

+'</div>'
+'</div>'
//EO Mail Box






























































+'</div>'
 



+'            </div>'

 

            
        })
           $.each(result, function(index, data){
           
            mailLastestOne=data.mailId

            return false;
        })
        
                

      
            
                     
        
        $(".mail-record-box-table-specific").append(
        content==""?"No any mail":( '<h3>Title: '+title+'</h3>'+ content) );
                      
 
 
        $('.mail-record-box-table-specific').fadeIn(500);
      //  addNoIndex(); 
        //  var table =document.getElementById('mail-record-box-table-specific')
       // getPagination(table);


              }
 
        
}) }


$(document).on('click','.mail-list-summary-specific',function(){

  
   // $(this).css({height:'80px',overflow:'hidden'}).slideUp()
  if($(this).height()>80)
   $(this).animate({height:'80px'},500)
else
  $(this).animate({ height: $(this)[0].scrollHeight }, 500)
  })