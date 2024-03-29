// Html Elements
var logOutBtn = document.querySelector("#logoutBtn");
var wlcMsg = document.querySelector("#welcomeMsg");

var user = sessionStorage.getItem("loggedinUser");

if (user == null) {
  location.replace("https://" + location.hostname + "/index.html");
}

wlcMsg.textContent = "Welcome " + user;

// user logout
function userLogout() {
  loggedinUser = "";
  isLoggedin = false;
  sessionStorage.removeItem("loggedinUser");
  window.location.href = "../index.html";
}

logOutBtn.addEventListener("click", function (e) {
  userLogout();
  e.preventDefault();
});
