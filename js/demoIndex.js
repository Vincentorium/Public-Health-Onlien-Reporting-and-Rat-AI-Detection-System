
$(document).ready(function () {
 


$('.loginSubmit').click(function(){
			
			var userN=$('.username').val();
       
		
			
          	$.cookie('name', userN, { expires: 7, path: '/' });
			window.location.href = "mainPage.html";

 
      });


 })
