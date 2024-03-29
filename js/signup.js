// Html Elements
// Signup
var signupNameInput = document.querySelector("#signupNameInput");
var signupEmailInput = document.querySelector("#signupEmailInput");
var signupPasswordInput = document.querySelector("#signupPasswordInput");
var signupButton = document.querySelector("#signupButton");

// New users registration
function signupNewUsers() {
  var signupName = signupNameInput.value;
  var signupEmail = signupEmailInput.value;
  var signupPassword = signupPasswordInput.value;

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
  signupNewUsers();
  e.preventDefault();
});
