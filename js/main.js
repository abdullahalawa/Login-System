// Html Elements
// Signup
var signupNameInput = document.querySelector("#signupNameInput");
var signupEmailInput = document.querySelector("#signupEmailInput");
var signupPasswordInput = document.querySelector("#signupPasswordInput");
var signupButton = document.querySelector("#signupButton");

// login
var loginEmailInput = document.querySelector("#loginEmailInput");
var loginPasswordInput = document.querySelector("#loginPasswordInput");
var loginBtn = document.querySelector("#loginBtn");

// regex
var mailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

// Users Repository
var savedUsers = [];

// get Data from localStorage when run the
// app for the first time on browser
if (localStorage.getItem("users") != null) {
  savedUsers = JSON.parse(localStorage.getItem("users"));
}

// email validation
function isValidMail(element, regex) {
  if (regex.test(element.value) != true) {
    return false;
  }
  return true;
}

// check if inputs are empty
function isInputsEmpty(obj) {
  for (var key in obj) {
    if (obj[key] === "") {
      return true;
    }
    return false;
  }
}

// search for User in savedUsers
// return result in object if exists
// or return undefind if not
function isUserExisted(newAddedUserEmail) {
  if (savedUsers.find((user) => user.email === newAddedUserEmail)) {
    return true;
  }
  return false;
}

// New users registration
function signupNewUsers() {
  signupName = signupNameInput.value;
  signupEmail = signupEmailInput.value;
  signupPassword = signupPasswordInput.value;

  var newSignedUsers = {
    name: signupName,
    email: signupEmail,
    password: signupPassword,
  };

  if (isInputsEmpty(newSignedUsers) == true) {
    document
      .querySelector("#emptyError")
      .classList.replace("d-none", "d-block");
    return false;
  } else if (isInputsEmpty(newSignedUsers) == false) {
    document
      .querySelector("#emptyError")
      .classList.replace("d-block", "d-none");
  }

  if (isValidMail(signupEmailInput, mailRegex) == false) {
    document
      .querySelector("#mailValidationMsg")
      .classList.replace("d-none", "d-block");
    return false;
  } else if (isValidMail(signupEmailInput, mailRegex) == true) {
    document
      .querySelector("#mailValidationMsg")
      .classList.replace("d-block", "d-none");
  }

  if (savedUsers.length == 0) {
    savedUsers.push(newSignedUsers);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    window.location.href = "../index.html";

    return true;
  }

  if (isUserExisted(newSignedUsers.email) == true) {
    document
      .querySelector("#emailError")
      .classList.replace("d-none", "d-block");
  } else {
    savedUsers.push(newSignedUsers);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    window.location.href = "../index.html";
  }
}

// EventListeners on the app
// signup
signupButton.addEventListener("click", function (e) {
  e.preventDefault();
  signupNewUsers();
});

signupButton.addEventListener("click", function (e) {
  isValidMail(signupEmailInput, mailRegex);
});
