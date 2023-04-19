
$(document).ready(function () {
 


var userName= $.cookie('name')

console.log("demo")
 


 
 
 

$('.complaintButton1').click(function(){
 
	$('.complaintPost1').addClass('demonHide')
})



$('.demoLogOut').click(function(){

 
window.location.href = "index.html";
	
})


$('.complaintList1').click(function(){

    $('.complaintBox2').addClass('demonHide')
    $('.complaintBox1').removeClass('demonHide')

})



$('.complaintList2').click(function(){


    $('.complaintBox1').addClass('demonHide')
    $('.complaintBox2').removeClass('demonHide')

	
})

$('.complaintSubmitButton').click(function(){

	 
	
})

$('.complaintButton1').click(function(){
	alert('Approved Successfully')
})

 
 

	 
 })
