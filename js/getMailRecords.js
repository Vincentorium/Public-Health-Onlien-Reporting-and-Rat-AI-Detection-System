 
var mailResult
var mailLastestOne



 function getMailRecords(isSent){
  var content
      $('.mail-record-box-table').html("");
   
      $('.mail-record-box-table').fadeOut(1);
      
     
      
     
$.ajax({
        type:'POST',
        dataType: "json",
        data: {
       
        isSent:isSent,
        userID: $.cookie('userID')
          },
         async: false,
   
          url: "./php/getMailRecords.php",
          success: function (result) {
mailResult =result
 
                
     $.each(result, function(index, data){
           
            content +=
'   <div class="mail-list-summary-one  '+ ((data.isSent==0&&data.isRead==0)?"mail-list-summary-one--isRead":"")+'" '  
+' data-mailid='+data.mailId 
+' data-issent='+data.isSent
+' data-isread='+data.isRead+'>'
+'              <div class="mail-list-titleAndcontent">'
+'                <div class="mail-list-title">'+ data.title+'</div>'
+'                <div class="mail-list-content">'+data.content+'</div>'
+'              </div>'
+'              <div class="mail-list-date">'+ data.dateCreated
            + '</div>'
+'            </div>'

 

            
        })
           $.each(result, function(index, data){
           
            mailLastestOne=data.mailId

            return false;
        })
        
                

      
            
                     
        
        $(".mail-record-box-table").append(
        content==""?"No any mail":( content) );
                      
 
 
        $('.mail-record-box-table').fadeIn(500);
      //  addNoIndex(); 
        //  var table =document.getElementById('mail-record-box-table')
       // getPagination(table);


              }
 
        
}) }

function getPagination(table) {
  var lastPage = 1;
    var pagBox='.mail-table-pagination'
  var max= $('#maxRows') 
   
  $('#mail-table-maxRows')
    .on('change', function(evt) {
      //$(pagBox+'prev').html('');						// reset pagination

     lastPage = 1;
    $(pagBox)
        .find('li')
        .slice(1, -1)
        .remove();
      var trnum = 0; // reset tr counter
      var maxRows = parseInt($(this).val()); // get Max Rows from select option

      if (maxRows == 5000) {
      $(pagBox).hide();
      } else {
      $(pagBox).show();
      }
  
      var totalRows =   ($('#mail-record-box-table tr').length/2) ; // numbers of rows
     console.log("totral rows is: "+totalRows)
     
      $('#mail-record-box-table tr:gt(0)').each(function() {
     // $(table + ' tr:gt(0)').each(function() {
     
        // each TR in  table and not the header
        trnum++; // Start Counter
        if (trnum > maxRows) {
          // if tr number gt maxRows

          $(this).hide(); // fade it out
        }
        if (trnum <= maxRows) {
          $(this).show();
        } // else fade in Important in case if it ..
      }); //  was fade out to fade it in

      
      if (totalRows > maxRows) {
        // if tr total rows gt max rows option
        var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
        //	numbers of pages
        for (var i = 1; i <= pagenum; ) {
          // for each page append pagination li
          $(pagBox+' #prev')
            .before(
              '<li data-page="' +
                i +
                '">\
								  <span>' +
                i++ +
                '<span class="sr-only">(current)</span></span>\
								</li>'
            )
            .show();
        } // end for i
      } // end if row count > max rows

      
      $(pagBox+' [data-page="1"]').addClass('active'); // add active class to the first li
      $(pagBox+' li').on('click', function(evt) {
        // on click each page
        evt.stopImmediatePropagation();
        evt.preventDefault();
        var pageNum = $(this).attr('data-page'); // get it's number

        var maxRows = parseInt($('#mail-table-maxRows').val()); // get Max Rows from select option

        if (pageNum == 'prev') {
          if (lastPage == 1) {
            return;
          }
          pageNum = --lastPage;
        }
        if (pageNum == 'next') {
          if (lastPage == $(pagBox+' li').length - 2) {
            return;
          }
          pageNum = ++lastPage;
        }

        lastPage = pageNum;
        var trIndex = 0; // reset tr counter
        $(pagBox+' li').removeClass('active'); // remove active class from all li
        $(pagBox+' [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
        // $(this).addClass('active');					// add active class to the clicked
	  	limitPagging(pagBox);
      //  $('#mail-record-box-table tr:gt(0)').each(function() {
        $('#mail-record-box-table tr:gt(0)').each(function() {
          // each tr in table not the header
          trIndex++; // tr index counter
          // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
          if (
            trIndex > maxRows * pageNum ||
            trIndex <= maxRows * pageNum - maxRows
          ) {
            $(this).hide();
          } else {
            $(this).show();
          } //else fade in
        }); // end of for each tr in table
      }); // end of on click pagination list
	  limitPagging();
    })
    .val(5)
    .change();

  // end of on select change

  // END OF PAGINATION

}

function limitPagging(pagBox){
	 //alert($(pagBox+' li').length)

	if($(pagBox+' li').length > 7 ){
			if( $(pagBox+' li.active').attr('data-page') <= 3 ){
			$(pagBox+' li:gt(5)').hide();
			$(pagBox+' li:lt(5)').show();
			$(pagBox+' [data-page="next"]').show();
		}if ($(pagBox+' li.active').attr('data-page') > 3){
			$(pagBox+' li:gt(0)').hide();
			$(pagBox+' [data-page="next"]').show();
			for( let i = ( parseInt($(pagBox+' li.active').attr('data-page'))  -2 )  ; i <= ( parseInt($(pagBox+' li.active').attr('data-page'))  + 2 ) ; i++ ){
				$(pagBox+' [data-page="'+i+'"]').show();

			}

		}
	}
}


 function addNoIndex() {
  // Just to append id number for each row
  $('#mail-record-box-table tr:eq(0)').prepend('<th> # </th>');

  var id = 0;

  $('#mail-record-box-table tr:gt(0)').each(function() {
    id++;
    $(this).prepend('<td>' + id + '</td>');
  });
}
