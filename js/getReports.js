
function getReports2(result,reportID){

  //alert("caller is " + getReports2.caller);
 
 
var content=""
var type
repID=reportID
$.each(result.reverse(), function(index, data){
  

//fetch data from the result which loads at begin.
  if(data.repID==repID){
      type=data.repType ;
      
      
      content+=
 
      

//demonHide cmtSumbitBox
/*
 '<!--SO mailBoxFunctionInsideRep-->'
+'<div class="mailBoxInsideRep modalOfMail modalGeneral test"  id="modalOfMail">'
+'  <div class="loginCtnTitle">'
+'    <!--  <h2>IVE Airline</h2> <a class="close" data-close-button></a> -->'
+'    <h2 class="boxTitle">Mail</h2>'
+'    <img class="closeIcon close mailClose" src="./images/exit.png" data-close-button alt="">'
+''
+''
 
+'  </div>'
 +'<div class="mailBoxRecipients">'
 +'<span >Recipient: </span>'
 +'<input type="text" class="mailInput recipientInput" value='+data.userName+'>'
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
  +'<div class="mailBoxTitle">'
 +'<span>Title:</span>'
  +'<input type="text" class="mailInput mailTitleInput mailTitleJS">'


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
+'            <button class="sendCmtBtn sendCmtBtnGP2 mailSubmitButton" data-submitctn=".modalOfMail">Send</button>'
+' <div class="uploadForAttach">'

  +'  <label for="file-input">'
    +'    <img src="./images/attachIcon.png"/>'
   +' </label>'

 +'</div>'
 +'</div>'

+'<!--EO  button and label and image-->'

+'</div> '

+'</div>'
+'</div>'
+'<!--EO mailBoxFunctionInsideRep-->'
*/
//EO Mail Box


//SO floatingIcon 




'<a href="#" class="float" data-repID='+data.repID+'>'
+' <i class="fa fa-plus my-float" id="float">'
+ (data.repCurrentStatus=="approved"?"Unapprove":"Approve")+'</i>'
+'  </a>'

+'<a class="mailIconInsideRep mailIconInsideRep--mail" data-modal-target=".modalOfMail" data-default="mailIcon" data-repID='+data.repID+'>'
+' <i class="fa fa-plus my-float report-mail-floatIcon" id="float">Correspondence</i>'
+'  </a>'



+'          </div>'
+''
+'        </div>'



//EO floatingIcon


+'<div class="reportsBoxForModal">                                                        '
+'  <div class="loginCtnTitle">'
+'    <!--  <h2>IVE Airline</h2> <a class="close" data-close-button></a> -->'
+'    <h2 class="boxTitle">Complaint</h2>'
+''
+''
+'    <img class="closeIcon close" src="./images/exit.png" data-close-button alt="">'
+'  </div>'
+''
+'  <!--SOF order ______________________________________________________ -->'
+'  <div class="containerOrderList" id="containerOrderList">'
+''
+''
+'    <hr>'
+'    <!--SOF sideFunction-->'
+'    <div class="cmtHistory">'
+''
+'      <br>'
+'      <div class="formTitle postSideFunction"> Collection: </div>'
+''
+'      <div>'
+'        <ul class="urgentListBox">'
+''
+''
+'          <li>'
+'            <div class="favTag">'
+'              <div class="urgentBox">'
+''
+'                Ashley Road'
+'              </div>'
+''
+'              <div class="urgentBox">'
+''
+'                last 10 days'
+'              </div>'
+''
+'              <div class="urgentBox">'
+''
+'                Waste Pollution'
+'              </div>'
+''
+'            </div>'
+'            <ul>'
+'      </div>'
+'      <ul class="historyOfCmt">'
+''
+'        <ul class="historyOfCmt">'
+'          <li class="listClick liCom2 cmtLi active complaintList1">- 裝修完就將啲廢料丟喺山坡，搞到成個垃圾崗咁！'
+'          </li>'
+''
+'          <li class="listClick liCom0 complaintList2">- ****** 搞到條街都係垃圾！</li>'
+'        </ul>'
+''
+''
+''
+''
+'      </ul>'
+'      <br>'
+''
+'      <div class="formTitle postSideFunction"> Status: </div>'
+'      <br>'
+''
+'      <ul class="historyOfCmt">'
+''
+'        <ul class="historyOfCmt">'
+'          <li class="listClick liCom2 demonList1 demonHide">29-Jan-2023: Solved'
+'          </li>'
+''
+'        </ul>'
+''
+''
+''
+''
+'      </ul>'
+'    </div>'
+'    <!--EOD sideFunction-->'
+''
+'    <!--SOF postContainer-->'
+'    <div class="cmtContainer">'
+'      <div class="complaintBox1" data-repID='+data.repID +'>'
+'        <!--SOF comlaint 1 -->'
+'        <div class="postBox complaint1 active">'
+''
+'          <div class="complaint1_Status">'
+'            <b>'
+'              <center class="statusComplaints1">'+data.repCurrentStatus+'</center>'
+'            </b>'
+'          </div>'
+''
+'          <!-- SOF topic-post 1 -->'
+''
+'          <div>'
+'            <!-- SOF title -->'
+'            <div class="complaint1_title">'
+data.repTitle               
+'              </b>'
+'            </div>'


+'<a href="#" class="float" data-repID='+data.repID+'>'
+' <i class="fa fa-plus my-float" id="float">'
+ (data.repCurrentStatus=="approved"?"Unapprove":"Approve")+'</i>'
+'  </a>'




+'            <div>'
+'              <div class="commendBox complaint1 post1 active">'
+'                <!-- SOF Personal information -->'
+'                <div class="cmtInfor">'
+'                  <div class="cmtPersonInof">'
+'                    <br>'
+'                    <br>'
+'                    <table>'
+''
+'                      <tr class="dataTableForCitizen" data-citizenid='+data.repNormalUser+'>'
+'                        <td style="width:100px">'
+'                          <img src="images/pp2.png" width="80" height="80" />'
+'                        </td>'
+'                        <td style="font-size:30px">'+data.userName+'</td>'
+''
+'                        <td style="width:300px;">'
+'                          <span> · </span>'
+'                          Post: 16 Jan 2023'
+'                        </td>'
+'                      </tr>'
+'                    </table>'
+''
+'                  </div>'
+'                  <!-- SOF Content -->'
+'                  <div class="postContent">'
+'                    <br>'
+'                    <table>'
+'                      <tr>'
+'                        <td>'
+'                          <b>Nature</b>:'
+'                          <select class="complaintNature complaintOption" disabled data-attribute="repType">'
+'                            <option class="OptionDemo1" value="Pest Control"'
+((type==="Pest Control")==false?"":"selected")+ '>Pest Control</option>'
+'                            <option value="Air Pollution" '
+((type==="Air Pollution")==false?"":"selected")+'>Air Pollution </option>'
+'                            <option value="Noise Pollution"'
+((type==="Noise Pollution")==false?"":"selected")+'>Noise Pollution </option>'
+'                            <option value="Water Pollution"'
+((type==="Water Pollution")==false?"":"selected")+'>Water Pollution </option>'
+'                            <option class="OptionDemo2" value="Waste Pollution"'
+((type==="Waste Pollution")==false?"":"selected")+'>Waste Pollution'
+'                            </option>'
+'                          </select>'
 
+'                          <span class="complaintNature_edit demonHide" contenteditable="true">(Edit)</span>'
+'                        </td>'
+'                      </tr>'
+'<tr>'
+'                        <td>'
+'                          <b>Department</b>:'
+'                          <select class="complaintDept complaintOption" disabled data-attribute="repDept">'
+'                            <option class="OptionDemo1" value="Housing Authority"'
+"selected"+ '>Housing Authority</option>'
+'                            <option value="Environment Protection Department" '
+((type==="Environment Protection Department")==false?"":"selected")+'>Environment Protection Department </option>'
+'                            <option value="Noise Pollution"'
+((type==="Police Force")==false?"":"selected")+'>Police Force</option>'
+'                            <option value="Food and Environmental Hygiene Department"'
+((type==="Food and Environmental Hygiene Department")==false?"":"selected")+'>Food and Environmental Hygiene Department</option>'
 
+'                          </select>'
+'                          <!-- '
+'                                  <span class="complaintNature" contenteditable="false">Pest Control'
+'                                    Dust</span>-->'
+'                          <span class="complaintNature_edit demonHide" contenteditable="true">(Edit)</span>'
+'                        </td>'
+'                      </tr>'
+'                      <tr>'
+'                        <td> <b>Date</b>:'+data.RepDatePeriodBegin+ ' </td>'
+'                      </tr>'
+'                      <tr>'
+'                        <td> <b>Location</b>:'
                              + data.repLocationDetail
+'                        </td>'
+'                      </tr>'
+'                      <tr>'
+'                        <td><b>Description</b> :</td>'
+'                      </tr>'
+'                    </table>'
+'                    <br>'
+''
+''
+'                    <div>'
+'                      <span class="repContent">'
            +            data.repContent

      +    '  <br>  <img class="repContentPic" width="600px" src="data:image/png;base64,'+ data.repAttach+'">'

   
  

     
  
+'                      </span>'
+'                    </div>'
+'                  </div>'
+''
+'                </div>'
+''
+'              </div>'
+''
+''
+'            </div>'
+'            <br>'
+''
+'          </div>'
+'          <hr class="postLine">'
+'        </div>'
+'        <!--EOF comlaint 1 -->'
+''
+''
+'        <!--SOF comlaint 1 -->'
+'        <div class="postBox complaint2 active complaintBoxPost1 demonHide">'
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
+''
+'                  <table>'
+''
+'                    <tr>'
+'                      <td style="width:100px">'
+'                        <img src="images/Staff3.png" width="80" height="80" />'
+'                      </td>'
+'                      <td style="font-size:28px">Chan Tai Man</td>'
+'                      <td>(Environmental Protection Dept)</td>'
+'                      <td style="width:300px;">'
+'                        <span> · </span>'
+'                        Post: 29-Jan-2023'
+'                      </td>'
+'                    </tr>'
+'                  </table>'
+'                </div>'
+'                <br>'
+'                <div class="postContent">'
+''
+'                  <span>'
+'                    上址山坡確有建築廢料被棄置， 根據《廢物處置條例》採取執'
+'                    <br>已採取特別安排清理棄置廢料，'
+'                    <br>且要求屋邨管理處加強巡邏，並會繼續進行突擊巡查。'
+'                  </span>'
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
+'        <!--EOF comlaint 1 -->'
+''
+'        <!--SOF comlaint 1 -->'
+'        <div class="postBox complaint3 active complaintBoxPost2 demonHide">'
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
+''
+'                  <table>'
+''
+'                    <tr>'
+'                      <td style="width:100px">'
+'                        <img src="images/Staff3.png" width="80" height="80" />'
+'                      </td>'
+'                      <td style="font-size:28px">Chan Sai Man</td>'
+'                      <td>(Housing Authority)</td>'
+'                      <td style="width:300px;">'
+'                        <span> · </span>'
+'                        Post: Jan 25 2023'
+'                      </td>'
+'                    </tr>'
+'                  </table>'
+'                </div>'
+'                <br>'
+'                <div class="postContent">'
+''
+'                  <span>'
+''
+'                    山坡並非轄下管理範圍，山坡上之建築廢料亦非房署承辦商棄置，'
+'                    <br>'
+'                    但為免對邨內環境衞生造成影響，已採取特別安排清理棄置廢料。'
+''
+''
+'                  </span>'
+'                </div>'
+'              </div>'
+'            </div>'
+''
+'            <br>'
+'            <div class="postButton">'
+''
+'              <button class="postReplyBut">Reply</button>'
+'            </div>'
+'          </div>'
+'          <hr class="postLine">'
+'        </div>'
+'        <!--EOF comlaint 1 --->'
+''
+'  <!--       <div class="managementFunc demonHide">'
+'          <span> Management function</span>'
+'          <div></div>'
+'          <br>'
+'          <button class="complaintButton1" data-close-button>Approve</button>'
+'          <div></div>'
+'        </div> --->'
+''
+'        <!--SOF Response Box-->'
+'        <div class="cmtSumbitBox demonHide">'
+'          <h2>Update Status</h2>'
+'<div class="submitOptions">'
+'          <textarea class="cmtBox reportTextArea" placeholder="remark..." rows="20" name="comment[text]" id="comment_text" cols="40"'
+'            class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'            aria-haspopup="true"></textarea>'
+'          <br>'

+'          <div class="postStatusFunc">'
+'            <label for="">Status: </label>'
+'            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;'
+'            <select name="Status" class="repSubmitStatus" >'
+'              <option value="Unchange">Unchange</option>'
+'              <option value="Fack Checking">Fack Checking</option>'
+'              <option value="Wait in line">Wait in line</option>'
 
+'              <option value="Solved">Solved</option>'
+'              <option value="unapproved">reclassfiy</option>'
+'              <option value="approved" class="temp_test">for Test</option>'
+'            </select>'
+'            <div class="psotUpdateChkbox">'
+''
+''
+''
+'              <details class="CustDelivery_detail">'
+''
+'                <summary>Update Progress of Relevant Complaints</summary>'
+''
+'                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">'
+'                <label for="vehicle1"> Complaints within Default Collection</label><br>'
+'                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">'
+'                <label for="vehicle2"> 屋企附近有童黨製造噪音</label><br>'
+''
+''
+'              </details>'
+'            </div>'
+'          </div>'
+'          <div class="postSubmitBtn">'
+'<div>'














 


+'<!--SO reportlBoxFunction-->'
+'<div class="reportlBoxFunction "> '
+'<!--  image file and close button-->'
+'<span class="file-input-Ctn file-input-Ctn-mail demonHide">'

+'<input type="file"   class="file-input file-input-report" id="file-input-report">'
+'<span class="file-input-cancel-submit">X</span>'
+'</span>'
+'<!--  button and label and image-->'
+'<div class="mailBoxFunctionInsideRep">'
+'            <button class="sendCmtBtn sendCmtBtnGP2 reportSubmitButton">Send</button>'
+' <div class="uploadForAttach">'

  +'  <label for="file-input-report">'
    +'    <img src="./images/attachIcon.png"/>'
   +' </label>'

 +'</div>'
 +'</div>'
+'</div> '
+'<!--EO mailBoxFunctionInsideRep-->'


















+'</div>'





















+'<div class="submitNotifyUserBox">'
+'<input type="checkbox" class="submitNotifyUser" name="options[]" value="option3">Notify Users'
+'</div>'
+'      </div>'
+'          </div>'
+''
+'        </div>'
+'        <!--SOF Response Box-->'
+''
+''
+''
+''
+''
+''
+'      </div>'
+'      <div class="complaintBox2 demonHide">'
+'        <!--SOF comlaint 1 -->'
+'        <div class="postBox complaint1 active">'
+''
+''
+''
+'          <!-- SOF topic-post 1 -->'
+'          <div class="complaint1_Status">'
+'            <b>'
+'              <center class="statusComplaints1">Wait in line</center>'
+'            </b>'
+'          </div>'
+''
+''
+''
+'          <div>'
+'            <!-- SOF title -->'
+'            <div class="complaint1_title">'
+'              <b>******* 搞到成個垃圾崗咁！'
+'              </b>'
+'            </div>'
+'            <div>'
+'              <div class="commendBox complaint1 post1 active">'
+'                <!-- SOF Personal information -->'
+'                <div class="cmtInfor">'
+'                  <div class="cmtPersonInof">'
+'                    <br>'
+'                    <br>'
+'                    <table>'
+''
+'                      <tr>'
+'                        <td style="width:100px">'
+'                          <img src="images/pp2.png" width="80" height="80" />'
+'                        </td>'
+'                        <td style="font-size:30px">陳克勤</td>'
+''
+'                        <td style="width:300px;">'
+'                          <span> · </span>'
+'                          Post: 12 Jan 2023'
+'                        </td>'
+'                      </tr>'
+'                    </table>'
+''
+'                  </div>'
+'                  <!-- SOF Content -->'
+'                  <div class="postContent">'
+'                    <br>'
+'                    <table>'
+'                      <tr>'
+'                        <td>'
+'                          <b>Nature</b>:'
+'                          <span class="complaintNature" contenteditable="false">Waste Pollution</span>'
+'                          <span class="complaintNature_edit" contenteditable="true">(Edit)</span>'
+'                        </td>'
+'                      </tr>'
+'                      <tr>'
+'                        <td> <b>Date</b>: 10 Jan 2023</td>'
+'                      </tr>'
+'                      <tr>'
+'                        <td> <b>Location</b>: 4 Ashley Road, Tsim Sha Tsui'
+'                        </td>'
+'                      </tr>'
+'                      <tr>'
+'                        <td><b>Description</b> :</td>'
+'                      </tr>'
+'                    </table>'
+'                    <br>'
+'                    <div>'
+'                      <span>'
+'                        construction dust is intolerable here'
+''
+'                        <img src="./images/cdust.jpg" alt="Italian Trulli">'
+'                      </span>'
+'                    </div>'
+'                  </div>'
+''
+'                </div>'
+''
+'              </div>'
+''
+''
+'            </div>'
+'            <br>'
+''
+'          </div>'
+'          <hr class="postLine">'
+'        </div>'
+'        <!--EOF comlaint 1 -->'
+''
+''
+'        <!--SOF comlaint 1 -->'
+'        <div class="postBox complaint2 active ">'
+''
+''
+'          <div>'
+''
+''
+''
+''
+'            <br>'
+''
+'          </div>'
+''
+'        </div> <!-- SOF  post 2 -->'
+''
+'        <div class="managementFunc demonHide">'
+'          <span> Management function</span>'
+'          <div></div>'
+'          <br>'
+'          <button class="complaintButton1" data-close-button>Approve</button>'
+'          <div></div>'
+'        </div>'
+''
+'        <!--SOF Response Box-->'
+'        <div class="cmtSumbitBox">'
+'          <h2>Response</h2>'
+''
+'          <textarea class="cmtBox mailTextArea" placeholder="This is an awesome comment box" rows="20" name="comment[text]"'
+'            id="comment_text" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox"'
+'            aria-autocomplete="list" aria-haspopup="true"></textarea>'
+'          <br>'
+''
+'          <div class="postStatusFunc">'
+'            <label for="">Status: </label>'
+'            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;'
+'            <select name="Status" id="">'
+'              <option value="">Unchange</option>'
+'              <option value="">Fack Checking</option>'
+'              <option value="">Wait in line</option>'
+'              <option value="">Take action</option>'
+'              <option value="">Solved</option>'
+'            </select>'
+'            <div class="psotUpdateChkbox">'
+'              Update Related Complaints<input type="checkbox">'
+'            </div>'
+'          </div>'
+'          <div class="postSubmitBtn">'
+'            <button class="sendCmtBtn sendCmtBtnGP2">Submit</button>'
+'          </div>'
+''
+'        </div>'
+'        <!--SOF Response Box-->'
+''
+''
+''
+''
+''
+''
+'      </div>'
+'    </div>'
+'    <!--SOF postContainer-->'
+''
+''
+''
+''
+''
+''
+'  </div>'
+'  <!-- Table of order ______________________________________________________ -->'
+''
+''



return false


}

 });//end of $.each

      //  $('.modal').html("")//.append(content)
       
      $('#modal').html(content) 


      modal()
      customizeReport()
     //  $('#modal').append(content)
   
        insertMailBoxIntoPost();
        getMailRecordsspecific(reportID)
/* 
*/
    
  
}//EOF GETREPORTS FUNCTION



function customizeReport(){
      
      if(    $.cookie('userDept')!="Operator"){
                  $('.cmtSumbitBox').removeClass("demonHide")
$('.float').addClass("demonHide");
      }
}