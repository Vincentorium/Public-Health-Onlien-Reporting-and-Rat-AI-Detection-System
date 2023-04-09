
var mailResult
var mailLastestOne


 function getMailRecords(){
  var content

      getRevelantReportsForUpdate(mytable)


  }





 function getRevelantReportsForUpdate(repStreet){

      $(".mytable").html("");

      $('.mytable').fadeOut(1);
  let resultOfRS;


$.ajax({
        type:'POST',
        dataType: "json",
        async:false,
        data: {

        status:"approved",
        repStreet:repStreet
          },
         
        url: "./php/getReporsWithSameStreetType.php",
          success: function (result) {

          //   if(result.length==1){
          //     alert("No relevant reports is found!")
          //     resultOfRS= false;
          //   }else{
              
          // resultOfRS= true;
          //   }


        header="<thead><tr ><th>"
                                    +"</th><th>Location"
                                    +"</th>L<th>"
                                    +"Report Date"
                                    +"</th><th>"
                                    +"Nature"
                                    +"</th><th>"
                                    +"Incident Date"
                                    +"</th><th>"
                                    +"Title"
                                    +"</th><th>"
                                    +"Status"
                                    +"</th></tr>  </thead>"


        content = ""
     $.each(result, function(index, rc){



            content +=

              "<tr class='reportTableRow' data-repID="+rc.repID+" >'"
            + "<td> <input type='checkbox' data-repid="+rc.repID +">"
            + "</td><td>" + rc.repLocationDetail
            + "</td><td>" + rc.repDateSubmit
            + "</td><td>" + rc.repType
            + "</td><td>" + rc.repDatePeriodBegin
            + "</td><td>" + rc.repTitle
            + "</td><td>" + rc.repCurrentStatus
            + "</td></tr>"
        })

        $(".mytable").append(
        content==""?"No any report":(header+=content) );



        $('.mytable').fadeIn(500);

        addNoIndex('.mytable');
          var table =document.getElementById('mytable')
        getPagination(table);

            modal();

//            return true;
              }

}) 
//return resultOfRS;
}














function getPagination(table) {
  var lastPage = 1;
    var pagBox='.pagination-container'
  var maxPageSelect= '#maxRows'
  var tableClassName='.mytable'

  $(maxPageSelect)
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

      var totalRows =   ($(tableClassName+' tr').length/2) ; // numbers of rows
     console.log("totral rows is: "+totalRows)

      $(tableClassName+' tr:gt(0)').each(function() {
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


      $(pagBox+' [data-page="1"]').addClass('paginationPageNumActive'); // add paginationPageNumActive class to the first li
      $(pagBox+' li').on('click', function(evt) {
        // on click each page
        evt.stopImmediatePropagation();
        evt.preventDefault();
        var pageNum = $(this).attr('data-page'); // get it's number

       // var maxRows = parseInt($(maxPageSelect).val()); // get Max Rows from select option
var maxRows = 5// get Max Rows from select option

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
        $(pagBox+' li').removeClass('paginationPageNumActive'); // remove paginationPageNumActive class from all li
        $(pagBox+' [data-page="' + lastPage + '"]').addClass('paginationPageNumActive'); // add paginationPageNumActive class to the clicked
        // $(this).addClass('paginationPageNumActive');					// add paginationPageNumActive class to the clicked
	  	limitPagging(pagBox);
      //  $('table tr:gt(0)').each(function() {
        $(tableClassName+' tr:gt(0)').each(function() {
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
	  limitPagging(pagBox);
    })
    .val(5)
    .change();

  // end of on select change

  // END OF PAGINATION

}

function limitPagging(pagBox){
	 //alert($(pagBox+' li').length)
  var pagBox=pagBox+' nav .pagination'
	if($(pagBox+' li').length > 7 ){
			if( $(pagBox+' li.paginationPageNumActive').attr('data-page') <= 3 ){
			$(pagBox+' li:gt(5)').hide();
			$(pagBox+' li:lt(5)').show();
			$(pagBox+' [data-page="next"]').show();
		}if ($(pagBox+' li.paginationPageNumActive').attr('data-page') > 3){
			$(pagBox+' li:gt(0)').hide();
			$(pagBox+' [data-page="next"]').show();
			for( let i = ( parseInt($(pagBox+' li.paginationPageNumActive').attr('data-page'))  -2 )  ; i <= ( parseInt($(pagBox+' li.paginationPageNumActive').attr('data-page'))  + 2 ) ; i++ ){
				$(pagBox+' [data-page="'+i+'"]').show();

			}

		}
	}
}


 function addNoIndex(tableClassName) {
  // Just to append id number for each row
  $(tableClassName+' tr:eq(0)').prepend('<th> # </th>');

  var id = 0;

  $(tableClassName+' tr:gt(0)').each(function() {
    id++;
    $(this).prepend('<td>' + id + '</td>');
  });
}

$(document).ready(function () {


      $('.pagination li').on('click', function () {

        var pageNum = $(this).attr('data-page')
        var trIndex = 0;

        $('.pagination li').removeClass('paginationPageNumActive')
        $(this).addClass('paginationPageNumActive')
        $(' tr:gt(0)').each(function () {

          trIndex++;
          if (trIndex > (maxRows * pageNum) || trIndex <= ((maxRows * pageNum) - maxRows)) {
            $(this).hide()

          } else {
            $(this).show()
          }

        })

      })

  })