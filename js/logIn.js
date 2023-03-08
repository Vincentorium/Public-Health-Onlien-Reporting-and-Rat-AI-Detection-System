
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
          	$.cookie('name', userName, { expires: 7, path: '/' });
	         $.cookie('userDept', result.userDept, { expires: 7, path: '/' });
             
			        window.location.href = "mainPage.html";

              },
          error: function (err) {
           alert("incorrect username or password.")
  
          }
        });
      });


 home_load_navBar()
   
  function home_load_navBar(){
    
      $('.userName').html($.cookie('name'));
       $('.dept').html($.cookie('userDept'));
    	if($.cookie('userDept')==="Operator"){
 
  
   $('.managementFunc,.complaintNature_edit').removeClass('demonHide');
//$(".sideNavBar").load("./component/sideNavBar.html");
      }
} 
    



















// demo_userType()


function demo_userType(){
    
		
	if($.cookie('name')=="meow"){
  
		 

		//	$('.favBox,.complaint2,.cmtHistory,.cmtSumbitBox').addClass('demonHide');
			
		//	$('.managementFunc,.complaintNature_edit').removeClass('demonHide');

			//$('.containerOrderList').addClass('containerOrderListDemo');

			//$('.demonSwitchRight').html('Approved')
//			 getFlight();
	}else{


 
		$('.complaintNature_edit').addClass('demonHide');
    $('.OptionDemo1').removeAttr('selected')
	 
    $('.OptionDemo2').attr('selected','selected')

 			getFlight_DeptDemo()
		if(userName==="HA"){
			$('.dept').html('Housing Authority')
			$('.userName').html('Chan Sai Man')
			$('.complaintBoxPost1').removeClass('demonHide');
			$('.complaintPost2,.complaintPost3').addClass('demonHide');

			
			
		}else if(userName==="EPD"){
			$('.dept').html('Environmental Protection Department')
			$('.userName').html('Chan Tai Man')
			$('.complaintPost2,.complaintPost3').addClass('demonHide');

		}

	}

}

















 });




 
 


   