
function getReportStatus(repID){


  let content=""
      $.ajax({
        type:'POST',
        dataType: "json",
        data: {
       
         rep_fk_reports:repID
          },
         async: false,
   
          url: "./php/getReportStatus.php",
          success: function (result) {
 
                
     $.each(result, function(index, data){
           
            content +=
            '<li>'+data.repStatusDateCreated.substring(0, 10)+" : "+data.repStatusType+'</li>'
 

            
        })
           $(".historyOfCmt").append(content);
    }
 
        
})

}