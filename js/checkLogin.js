 checkLogin()
 function checkLogin(){
  var username = $.cookie('userID');
  if (username === undefined) {
    
    window.location.href = 'index.html';
  }
           }
 