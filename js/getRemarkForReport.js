
function insertRemarkForReport(result){
 
 
//$.each(result.reverse(), function(index, data){
  
var remarkContent=""
//fetch data from the result which loads at begin.
  //if(data.repID==repID){
    //  type=data.repType ;
      

        $.ajax({
          url: "./php/getRemarkForPost.php",
          dataType: "json",
          type: 'POST',
          async: false,
          data: {repID:repID
          },
          success: function (result) {
              
$.each(result, function(index, data){
  


                let havaAttach=(data.images!=0);
                let mailAttachment=""
                if(havaAttach){         
                        $(data.images).each(function(index,data){
                                  mailAttachment+= '<a href="./php/uploads/'+data+'" download>'
                      +'<img class="thumbnails" src="./php/uploads/'+data+'" alt="No"   style="display: '+(havaAttach===true?"inline":"none")+'"></a>' 


                        })
                     
                }












      remarkContent+=
 
'        <div class="postBox complaint2 active complaintBoxPost1">'
+''
+''
+'          <div>'
+''
+''
+'            <div class="commendBox complaint1 post1 active">'
+''
+'              <div class="cmtInfor">'
+''
+'                <div class="cmtPersonInof">'
+'                  <br>'
+'                  <br>'
+'                <div class="postInfo">'
+''
+'                  <span>'
+ 'Status: '+data.statusPre+' => '+ data.repStatusType
+'                  </span>'
+'                </div>'
+'                  <table>'
+''
+'                    <tr>'
+'                      <td style="width:100px">'
+'                        <img src="images/Staff3.png" width="80" height="80" />'
+'                      </td>'
+'                      <td style="font-size:28px">'+data.userName+'</td>'
+'                      <td>('+data.userDept+')</td>'
+'                      <td style="width:300px;">'
+'                        <span> · </span>'
+'                        Post:'+data.repStatusDateCreated +''
+'                      </td>'
+'                    </tr>'
+'                  </table>'
+'                </div>'
+'                <br>'



+'                <div class="postContent">'

+'                  <span>'
+ data.repStatusRemark
+'                  </span>'



    //  +    '  <br>  <img class="repContentPic" width="600px" src="data:image/png;base64,'+ data.repStatusAttach+'">'

+"<br>"
 
+''+(havaAttach===true?
  ("<div>Attachment:"
      +"<div class='attachPic'>"
          + mailAttachment
      +"</div>"
  +"</div>"):"")











      +'                </div>'
+'              </div>'
+'            </div>'
+''
+'            <br>'
+'            <div class="postButton">'
+''
+''
+'            </div>'
+'          </div>'
+'          <hr class="postLine">'
+'        </div>'
 
+''
 
 


 

  });//end of $.each

  
     
  $(remarkContent).insertBefore('.cmtSumbitBox')
          }
})

 
}//EOF FUNCTION
 