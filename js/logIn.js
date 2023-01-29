var userType=3;
var userName;
 


$(document).ready(function(){


loadUserCheck();


function loadUserCheck (){
			 
  $('.userName').html($.cookie('name'));


}


 home_load_navBar()
   
  function home_load_navBar(){
 
$(".sideNavBar").load("./component/sideNavBar.html");
 
} 
    
 });