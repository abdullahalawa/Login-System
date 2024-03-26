// Html Elements
// Signup
var signupNameInput = document.querySelector("#signupNameInput");
var signupEmailInput = document.querySelector("#signupEmailInput");
var signupPasswordInput = document.querySelector("#signupPasswordInput");
var signupButton = document.querySelector("#signupButton");

// login
var loginEmailInput = document.querySelector("#loginEmailInput");
var loginPasswordInput = document.querySelector("#loginPasswordInput");

// Users Repository
var savedUsers = [];

if (localStorage.getItem("users") != null) {
  savedUsers = JSON.parse(localStorage.getItem("users"));
}

function signupNewUsers() {
  signupName = signupNameInput.value;
  signupEmail = signupEmailInput.value;
  signupPassword = signupPasswordInput.value;

  var newSignedUsers = {
    name: signupName,
    email: signupEmail,
    password: signupPassword,
  };

  if (savedUsers.length == 0) {
    savedUsers.push(newSignedUsers);
    localStorage.setItem("users", JSON.stringify(savedUsers));
  } else {
    if (isUserExist(newSignedUsers.email) == false) {
      savedUsers.push(newSignedUsers);
      console.log(savedUsers);
      localStorage.setItem("users", JSON.stringify(savedUsers));
    } else {
      console.log("exists");
    }
  }
}

// search for User in savedUsers
// return result in object if exists
// or return undefind if not
function isUserExist(newAddedUserEmail) {
  if (savedUsers.find((user) => user.email === newAddedUserEmail)) {
    return true;
  }

  return false;
}

// EventListeners on the app
signupButton.addEventListener("click", function (e) {
  e.preventDefault();
  signupNewUsers();
});
