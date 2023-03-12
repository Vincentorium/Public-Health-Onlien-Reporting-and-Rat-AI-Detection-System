
$(document).ready(function(){


 

 
 $(".loginSubmit").click(function () {
         
 
      
            
        var userName = $("#username").val().trim();
        var userPassword = $("#password").val().trim();
       
 
        $.ajax({
          url: "./php/login.php",
          dataType: "json",
          type: 'POST',
          data: {
            userName: userName,

            userPassword: userPassword
          },
          success: function (result) {		
          	$.cookie('userName', userName, { expires: 7, path: '/' });
	          $.cookie('userDept', result.userDept, { expires: 7, path: '/' });
            $.cookie('userID', result.userID, { expires: 7, path: '/' });
             
			        window.location.href = "mainPage.html";

              },
          error: function (err) {
           alert("incorrect username or password.")
  
          }
        });
      });//EO Click Method
 
 
 
    })





 