
// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword{

    
};
function getUserOptions{
  var userChoices = {};
  //check user options
  //ask for length
  var length = prompt("how long would you like your password? 8-28.");
console.log(length);
length =parseInt(length);


//ask for uppercase
var uppercase = confirm("uppercase?.");
console.log({userChoices.uppercase});
return userChoices;
userChoices.uppercase =uppercase;



// to do validate if is between 8-28;
// sign to userOptions
userChoice.uppercase = length;
console.log (userChoice);
//ask for uppercase

};
// Write password to the #password input
function writePassword() {
  // get user options
  var userOptions = getUserOptions();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
