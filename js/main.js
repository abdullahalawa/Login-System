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

if (localStorage.length != 0) {
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
    // make sure this email is not existed in savedUsers
    var searchResult = savedUsers.filter((item) =>
      item.email.includes(newSignedUsers.email)
    );

    console.log(searchResult.email);

    if (searchResult.email != newSignedUsers.email) {
      savedUsers.push(newSignedUsers);
      localStorage.setItem("users", JSON.stringify(savedUsers));
    } else {
      console.log("exists");
    }
  }
}

// EventListeners on the app
signupButton.addEventListener("click", function (e) {
  signupNewUsers();
  e.preventDefault();
});
