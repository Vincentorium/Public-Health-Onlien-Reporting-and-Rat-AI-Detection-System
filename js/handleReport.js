$(document).on('click','.float',function(e){

 
    var repStatusID=$(this).data("statusid")
var data = {repStatusID:repStatusID,repStatusType: "Approved"};


 

$.ajax({
            type: 'POST',
            url: 'php/updateReportStatus.php',
            data: data,
            dataType: 'json',
            success: function(response) {
               
   
                    console.log('Status updated!');
                    getReportsIntoInbox()
                    modal()
                    $('.active').removeClass('active');
                    $('.stateMsg').remove();
            },
    
        });//EO ajax



    });//EO click Func
 
 

 