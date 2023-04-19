
$(document).ready(function(){


 

 
 $(".loginSubmit").click(function () {
         
 
      
            
        var userName = $("#username").val().trim();
        var userPassword = $("#password").val().trim();
               // var username= $("#username").val().trim();
 
        $.ajax({
          url: "./php/login.php",
          dataType: "json",
          type: 'POST',
          data: {
            userName: userName,

            userPassword: userPassword
          },
          success: function (rs) {		
          	$.cookie('userName', rs.fullname, { expires: 7, path: '/' });
	          $.cookie('userDept', rs.type, { expires: 7, path: '/' });
            $.cookie('userID', rs.id, { expires: 7, path: '/' });
             
			        window.location.href = "mainPage.html";

              },
          error: function (err) {
           alert("incorrect username or password was entered.")
  
          }
        });
      });//EO Click Method
 
 
 
    })





 