// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//variables
var pwlenght
var upperCon
var lowerCon
var numberCon
var symbolCon
//ask for lenght of password
pwlenght = prompt("how long would you like your password to be, between 8-128?")
if (pwlenght < 8 || pwlenght > 128){
  prompt ("must be between 8-128")
}
else {
  alert("nice lenght selection");
}
  //convert to a number
  pwlenght = +pwlenght;
  console.log(typeof(pwlenght));
  console.log(pwlenght);
// ask if these characters are wanted 
upperCon = confirm("do you want to use upper case?")
lowerCon = confirm("do you want to use lower case?")
numberCon = confirm("do you want to use numbers?")
symbolCon = confirm("do you want to use symbols?")
console.log(upperCon,lowerCon, numberCon, symbolCon);
//add to password if wanted
if (upperCon){
  userpw = "QWERTYUIOPASDFGHJKLZXCVBNM"
  console.log(userpw);
}
//add to password if wanted
if (lowerCon){
  userpw += "qwertyuiuiopasdfghjklzxcvbnm"
  console.log(userpw);
}
//add to password if wanted
if (numberCon){
  userpw += "1234567890"
  console.log(userpw);
}
if (symbolCon){
  userpw += "!@#$%^&*()"
  console.log(userpw);
}
//add to password if wanted
for (var i = 0; i < pwlenght; i++){
  password = userpw[Math.floor(Math.random() * userpw.length - 1)]
  console.log(password);
}
//return password


var userpw = ""
var password = ""

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


