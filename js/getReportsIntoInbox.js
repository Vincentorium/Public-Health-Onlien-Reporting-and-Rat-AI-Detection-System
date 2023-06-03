
var getReportsIntoInbox
var dataForInbox
$(document).ready(function () {
  //(function () { 

  console.log("gereport")


  getReportsIntoInbox = function getReportsIntoInbox() {


    var content = ""


    var status = $.cookie('userDept') == "Operator" ? "unapproved" : "approved"





    $.ajax({
      type: 'POST',
      dataType: "json",
      data: {

        status: status

      },
      async: false,
      url: './php/getAllReportsIntoInbox.php',
      success: function (result) {
        let repDept = ""
        $('.forInsert').html("");

        $('.forInsert').fadeOut(1);

        $.each(result, function (index, data) {
          repDept = (data.repDept == "" ? "Unassigned" : data.repDept);
          let titleImg = ""
          //data.imgPath


          type = data.repType;



          titleImg = (data.imgPath == null) ? '<div class="inbox-specific-head-figureImage"> ' + data.userName.charAt(0) + '</div>' : '<img class="allPostPostImg" src="./php/uploads/' + data.imgPath + '">'

          content +=
            '<div class="allPostSpecificPost complaintPost1" >'

            //SOF 1 class postBox 1
            + '<div class="BookingTabel_bookingBox rowCTM3">'
            //SOF 1.1  postBox_contentBox  1.1   
            + '<div class="commendBox complaint1 post1 active">'

            // SOF 1.1.1 postBox_contentBox_commentNoDisplay  
            + '<div class="allPostCmtBox">'
            + '    <img class="allPostCmtIcon" src="images/iconCmt.png"/>'

            + '<div class="allPostPollutionType allPostPollutionType1_demo"> ' + data.repType + '     </div> '

            + '</div>'//EDF 1.1.1 postBox_contentBox_commentNoDisplay  1.1.1


            + '  <div class="allPostContentNFunction">'//SODF  1.1.2.0 allPostContentNFunction

            //SOF 1.1.2 postBox_contentBox_contentBox 
            + '<div class="cmtInfor cmtInforIndex">'

            //SOF 1.1.2.1  postBox_contentBox_contentBox_picBox
            + '   <div class="allPostPicBox">'
            + titleImg

            //    
            + '   </div>'

            //SOF 1.1.2.2  postBox_contentBox_contentBox_Content
            + '   <div class="postBox_contentBox_contentBox_Content">'
            + '   <div class="postBox_contentBox_contentBox_title cmtInProgress2 registerClass"  >'
            + '    <h3 class="allPostTitle"  data-modal-target="#modal" data-default="tablePostTitle" data-idForMysql=' + data.repID + '>' + data.repTitle + '</h3>'

            + '</div>'
            + '   <div class="postBox_contentBox_contentBox_author">'
            + '<table ><tr>'

            + '<td class="allPostArea">'

            + 'Area: ' + data.repLocationDetail + '&nbsp&nbsp'
            + '</td>'
            // +'</tr><tr>'
            // +'<td class="allPostPostDetail">Posted by</td>'
            //+'<td class="allPostPostDetail">'

            //+'</td>'

            //+'<td class="allPostPostDetail">'+data.normalUser+'</td>'
            + '<td class="allPostPostDetail" style="width:85px;">'
            + '<span class="allPostPostDetail"> · </span>'
            +  (data.repDateSubmit).substr(0,10)


            + '</td></tr>'

            + '<tr class="allPostFuncRow"><td class="allPostFunctiontd">'

            + '<div class="allPostFuncRow">'

            + '<span class="tagArea">dumping</span>'
            + '<span class="tagArea">chemical</span>'


            + '</td><td>  '
            + '</td><td>  '
            + '</td><td>  '
            + '</td><td>  '

            + '<span> '
            //          +'    <img class="allPostFavIcon" src="images/iconFav.jpg"  />' 

            + '</span>'

            + '</td>'

            + '  </div>'//EODF  1.2 allPostFunction

            + '</tr>'


            + '  </table>'
            + '</div>'


            + '</div>'//EOF 1.1.2.2  postBox_contentBox_contentBox_Content

            + '    </div>' //EOF 1.1.2 postBox_contentBox_contentBox 

            + '  </div>'//EODF  1.1.2.0 allPostContent&Function

            + '  </div>'//EOF 1.1  postBox_contentBox  1.1   

            //SOF 1.2 allPostFunction


            + '  <div class="mngtFunction postMngtStatus ">'
            + '<span class="allPostStatusDptTitle">Departments </span>'


            + '<span class="allPostStatusDpt">' + repDept + '</span>'
            //  +'<span class="allPostStatusDpt">HA</span>'
            + '  </div>'//EO mngtFunc


            + '  </div>'//EODF  class postBox 1


            + '  </div>'









        });//end of $.each

        //$('.forInsert').append(content);
        //$('.forInsert').fadeIn(500);



        /* 
        */

      },//EDF AJAX sucess FUNCTION

      error: function (xhr, status, error) {
        content = "Not new task yet!"
     
      }



    });//EOF AJAX*/

    $('.forInsert').html(content == "" ? "No report for reivew" : content)
    $('.forInsert').fadeIn(500)
  }//EOF GETREPORTS FUNCTION
  getReportsIntoInbox();
})