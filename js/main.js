// Html Elements
// Signup
var signupNameInput = document.querySelector("#signupNameInput");
var signupEmailInput = document.querySelector("#signupEmailInput");
var signupPasswordInput = document.querySelector("#signupPasswordInput");
var signupButton = document.querySelector("#signupButton");

// login
var loginEmailInput = document.querySelector("#loginEmailInput");
var loginPasswordInput = document.querySelector("#loginPasswordInput");

// regex
var mailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

// Users Repository
var savedUsers = [];

if (localStorage.getItem("users") != null) {
  savedUsers = JSON.parse(localStorage.getItem("users"));
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

  if (
    savedUsers.length == 0 &&
    isValidMail(signupEmailInput, mailRegex) == true
  ) {
    savedUsers.push(newSignedUsers);
    localStorage.setItem("users", JSON.stringify(savedUsers));
  } else {
    if (
      isUserExist(newSignedUsers.email) == false &&
      isValidMail(signupEmailInput, mailRegex) == true
    ) {
      savedUsers.push(newSignedUsers);
      console.log(savedUsers);
      localStorage.setItem("users", JSON.stringify(savedUsers));
      window.location.href = "../index.html";
    } else {
      console.log("Error exists");
    }
  }
}

// search for User in savedUsers
// return result in object if exists
// or return undefind if not
function isUserExist(newAddedUserEmail) {
  if (savedUsers.find((user) => user.email === newAddedUserEmail)) {
    signupPasswordInput.nextElementSibling.children[1].classList.replace(
      "d-none",
      "d-block"
    );
    return true;
  }

  return false;
}

// email validation
function isValidMail(element, regex) {
  if (regex.test(element.value) != true) {
    element.nextElementSibling
      .querySelector("p")
      .classList.replace("d-none", "d-block");
    return false;
  }

  element.nextElementSibling
    .querySelector("p")
    .classList.replace("d-block", "d-none");
  return true;
}

// console.log(
//   signupEmailInput.nextElementSibling
//     .querySelector("p")
//     .classList.replace("d-none", "d-block")
// );

// EventListeners on the app
signupButton.addEventListener("click", function (e) {
  e.preventDefault();
  signupNewUsers();
});

signupButton.addEventListener("click", function (e) {
  isValidMail(signupEmailInput, mailRegex);
});

// console.log(mailRegex.test("a@a.com"));
