 

$(document).on("change",".file-input",function(){
  $(this).parent().removeClass('demonHide');
});
$(document).on("click",".file-input-cancel",function(){
  $(this).parent().addClass('demonHide');
   $(this).prev().val('');
});
