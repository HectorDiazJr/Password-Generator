// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordlenght();
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//variables
var pwlenght
var upperCon
var lowerCon
var numberCon
var symbolCon


function passwordlenght() {
  pwlenght = prompt("how long would you like your password to be, between 8-128?")
  if (pwlenght < 8 || pwlenght > 128) {
    //calling function to repeat itself if the correct lenght password is not picked
    alert("your selection must be between 8-128")
    passwordlenght();
    //changed prompt to repeat the function----need to start function from event listener 
    //prompt ("must be between 8-128")
  }
  else {
    alert("nice lenght selection");
  }
pwlenght = +pwlenght;
console.log(typeof (pwlenght));
console.log(pwlenght);
properSelection()
}
//ask for lenght of password
//function to assure correct lenght 


//convert to a number

// ask if these characters are wanted by a function to start over if none is selected

function properSelection() {
  upperCon = confirm("do you want to use upper case?")
  lowerCon = confirm("do you want to use lower case?")
  numberCon = confirm("do you want to use numbers?")
  symbolCon = confirm("do you want to use symbols?")
  console.log(upperCon, lowerCon, numberCon, symbolCon);
  //assure at least one selection is made
  //why can't === flase be used in this case?
  if (upperCon !== true && lowerCon !== true && numberCon !== true && symbolCon !== true) {
    alert("you must at least select one option");
    properSelection();
  }

//add to password if wanted
if (upperCon) {
  userpw = "QWERTYUIOPASDFGHJKLZXCVBNM"
  console.log(userpw);
}
//add to password if wanted
if (lowerCon) {
  userpw += "qwertyuiuiopasdfghjklzxcvbnm"
  console.log(userpw);
}
//add to password if wanted
if (numberCon) {
  userpw += "1234567890"
  console.log(userpw);
}
if (symbolCon) {
  userpw += "!@#$%^&*()"
  console.log(userpw);
}
//add to password if wanted
for (var i = 0; i < pwlenght; i++) {
  password += userpw[Math.floor(Math.random() * userpw.length - 1)]
  console.log(Math.floor(Math.random() * userpw.length) - 1);
  console.log(password);
}
}
//need to return the result to idpassword
//when this is not commented out the page doesn't work
//what is the difference or writing it like this
//var insertPassword = document.querySelector("#password");
//return insertPassword = password;
//return password = document.getElementById("password");
//var insertPassword = document.querySelector("#password");
//return insertPassword.textContent("password");


var userpw = ""
var password = ""




