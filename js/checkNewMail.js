 
function checkForUpdates() {
  $.ajax({
    url: "./php/getMailNum.php",
    type: "GET",
    success: function(data) {
      let numOfMail=	$.cookie('numOfMail');
      if (        data.numOfMail  > numOfMail) {

      	$.cookie('numOfMail', data.numOfMail, { expires: 17, path: '/' });
          $(".header__mailRecord").css("color","red")
       }else{


  	$.cookie('numOfMail', data.numOfMail, { expires: 17, path: '/' });
    


       }
    },
    error: function(xhr, status, error) {
      console.log(error);
    }
  });
}
 
 
function getMailNum() {
  $.ajax({
    url: "./php/getMailNum.php",
    type: "GET",
    dataType: "json",
    success: function(data) {
  
    
	        
    },
    error: function(xhr, status, error) {
      console.log(error);
    }
  });
}

 setInterval(checkForUpdates, 5000);  
 
 
 

 
 