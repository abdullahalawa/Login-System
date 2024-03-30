// login
var loginEmailInput = document.querySelector("#loginEmailInput");
var loginPasswordInput = document.querySelector("#loginPasswordInput");
var loginBtn = document.querySelector("#loginBtn");

// Signin exsiting users
function userLogin() {
  var signedEmail = loginEmailInput.value;
  var signedPassword = loginPasswordInput.value;

  var signedInUser = {
    email: signedEmail,
    password: signedPassword,
  };

  if (isInputsEmpty(signedInUser) == true) {
    document
      .querySelector("p#emptyError")
      .classList.replace("d-none", "d-block");
    return false;
  } else if (isInputsEmpty(signedInUser) == false) {
    document
      .querySelector("p#emptyError")
      .classList.replace("d-block", "d-none");
  }

  if (isValidMail(loginEmailInput, mailRegex) == false) {
    document
      .querySelector("#mailValidationMsg")
      .classList.replace("d-none", "d-block");
    return false;
  } else if (isValidMail(loginEmailInput, mailRegex) == true) {
    document
      .querySelector("#mailValidationMsg")
      .classList.replace("d-block", "d-none");
  }

  var login = savedUsers.find(
    (x) => x.email === signedInUser.email && x.password == signedInUser.password
  );

  if (login == undefined) {
    document
      .querySelector("#wrongCreds")
      .classList.replace("d-none", "d-block");
    return false;
  } else if (login != undefined) {
    document
      .querySelector("#wrongCreds")
      .classList.replace("d-block", "d-none");
  }

  loggedinUser = login.name;
  isLoggedin = true;
  sessionStorage.setItem("loggedinUser", login.name);
  window.location.replace("../home.html");
}

// signin
loginBtn.addEventListener("click", function (e) {
  userLogin();
  e.preventDefault();
});
