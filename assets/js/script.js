//ask password criteria when user clicks"generate password button
document.getElementById("generate").addEventListener("click",function (){
  generatePassword();

});

var chooseLength;
var passwordLowercase;
var passwordUppercase;
var passwordNumber;
var passwordSpecial;
var allChars;
// get password length
var generatePassword=function () {
  var chooseLength = window.prompt("Please enter a number between \"8\" to \"128\" for the chooseLength of your password. You can include 8 or 128.");
  //convert answer to actual number
  chooseLength = parseInt(chooseLength);
 // validate answer
  if (!chooseLength ||chooseLength <8 || chooseLength >128){ 
    window.alert("You did not enter a valid number. Try again.");
  } else{
var passwordInclude =function (){
// ask if user wants to include lowercase letter
  var passwordLowercase = window.confirm("Would you like include lowercase letter in your password? Enter Ok for Yes and Cancel for No.");

  let allChars ='';
  if(passwordLowercase){
    allChars += 'abcdefghijklmnopqrstuvwxyz';
    console.log("lowercase: " + allChars);
    console.log(allChars.length);
  }
var passwordUppercase = window.confirm("Would you like include UPPERCASE letter in your password? Enter Ok for Yes and Cancel for No.");
 
  if(passwordUppercase){
    allChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log("uppercase: " + allChars);
    console.log(allChars.length);
  }
var passwordNumber= window.confirm("Would you like include numbers in your password? Enter Ok for Yes and Cancel for No.");
  if(passwordNumber) {
    allChars +='1234567890';
    console.log("number: " + allChars);
    console.log(allChars.length);
  };
  var passwordSpecial= window.confirm("Would you like include Specials in your password? Enter Ok for Yes and Cancel for No.");
  console.log(passwordSpecial);
  if(passwordSpecial) {
    allChars += "'!@#$%^&*()_+-=[]{}|;,./'";
    console.log("special: " + allChars);
    console.log(allChars.length);
  }};

  if(!passwordLowercase && !passwordUppercase && !passwordNumber && !passwordSpecial){
    window.alert("You need to choose at least one type of character to include. Please try again. ")
    console.log("checkatleastone");
    passwordInclude();
  }else{
  window.alert("generating password");
};

var genPassword ="";
 for (var i =0 ; i < chooseLength; i++){
 includedChars = allChars[Math.floor(Math.random()* allChars.length)];
 genPassword.push(includedChars);
};
var password=genPassword.join("");
UseInput(password);
return password;
}

function UserInput(password){
  document.getElementById("#password").textContent = password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};}
