// regex
var mailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

// Users Repository
var savedUsers = [];
var loggedinUser;
var isLoggedin = false;

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
