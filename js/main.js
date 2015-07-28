
$(function() {
  var loggedInUser = __4front__.user;
  var navbarLinks = $("#navbar-right-links");

  if (loggedInUser) {
    navbarLinks.append("<li><a href='#'>Welcome " + loggedInUser.username + "</a></li>");
    navbarLinks.append("<li><a href='/logout'>Logout</a></li>");
  }
  else {
    navbarLinks.append("<li><a href='/login'>Login</a></li>");
  }
});
