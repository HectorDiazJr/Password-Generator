// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password

  function generatePassword(){
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

 
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordlenght = prompt("How long do you want your password to be?");
console.log(passwordlenght);
// Need an if statement to assure password is between 8-128 characters


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
var specialchar = confirm("Do you want a special charecter in your password");
var uppercase = confirm("Do you want an uppercase in your password?");
var lowercase = confirm("Do you want an lowercase in your password?");
var number = confirm("Do you want numbers in your password?");
console.log(specialchar);
console.log(uppercase);
console.log(lowercase);
console.log(number);
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// We need a character array
// We need a uppercase array
// We need a lowercase array
// We need a number array
// We need an array to hold user selected options
var characterarray = ["!", "@","#", "$", "%", "^", "&", "*"];
var uppercasearray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowercasearray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numbersarray = ["1","2","3","4","5","6","7","8","9","0"];
var totalarray = []
if (specialchar===true){
  totalarray = totalarray.concat(characterarray);
}
if (uppercase===true){
  totalarray = totalarray.concat(uppercasearray);
}
if (lowercase===true){
  totalarray = totalarray.concat(lowercasearray);
}
if (number===true){
  totalarray= totalarray.concat(numbersarray);
}
//create a for loop based on the number selected by user 


//need math floor and math random to select randomly from total array 
for (i = 0; i < "passwordlength"; i++);{
  var generatedPassword = totalarray[Math.floor(Math.random())];
}
console.log(generatedPassword);

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

  }

  




 