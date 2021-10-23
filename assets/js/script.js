// Assignment code here
var random = function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
};

const special = "'!@#$%^&*()_+-=[]{}|;,./'";
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const randomSpecial = special[random(0,special.length)];
console.log(randomSpecial);
const randomNumber = random(0,9);
console.log(randomNumber);
const randomUppercase = uppercase[random(0,uppercase.length)]; 
console.log(randomUppercase);
const randomLowercase = lowercase[random(0,lowercase.length)];
console.log(randomLowercase);
var chooseLength = parseInt(prompt("Please enter a number between \"8\" to \"128\" for the chooseLength of your password. You can include 8 or 128."));
console.log(chooseLength);
var passwordLowercase = window.confirm("Click OK to include lowercase letter in your password.");
console.log(passwordLowercase);
 var passwordUppercase = window.confirm("Click Ok to include UPPERCASE letter in your password.");
 console.log(passwordUppercase);
 var passwordNumber= window.confirm("Click Ok to include numbers in your password.");
 console.log(passwordNumber);
var passwordSpecial= window.confirm("Click OK include Special symbols in your password");
console.log(passwordSpecial);
function test() {
    const char ="";
    if (passwordLowercase) char.push(randomLowercase);
    console.log("HI"+passwordLowercase);
    console.log("HI"+randomLowercase);
    if (passwordUppercase) char.push(randomUppercase);
    if (passwordNumber) char.push(randomNumber);
    if(passwordSpecial) char.push (randomSpecial)
    console.log(randomSpecial);
    const passwordLength = chooseLength;
    console.log(chooseLength);
    var result ='';
    for (var i =0; i < passwordLength; i++){
      result += char[random(0,char.length)]();
    console.log(result);
    }
  };
    
test();
// function generatePassword(){
//   //convert answer to actual number
//   var chooseLength = parseInt(prompt("Please enter a number between \"8\" to \"128\" for the chooseLength of your password. You can include 8 or 128."));
//     if(chooseLength >=8 && chooseLength <= 128){
//       window.alert("Great! Your password will have " + chooseLength +" characters in Length.")
//      passwordInclude();
//     }  
//     // validate answer
//     else{
//       window.alert("You did not enter a valid number. Try again. ");
//       return chooseLength;
//     };

// // ask if user wants to include lowercase letter
// function passwordInclude () {
//   var passwordLowercase = window.confirm("Click OK to include lowercase letter in your password.");
 
//   var passwordUppercase = window.confirm("Click Ok to include UPPERCASE letter in your password.");
  
//   var passwordNumber= window.confirm("Click Ok to include numbers in your password.");

//   var passwordSpecial= window.confirm("Click OK include Special symbols in your password");
// }
  
// if(!(passwordLowercase ||passwordUppercase || passwordNumber ||passwordSpecial)){
//   window.alert("You need to choose at least one type of character to include. Please try again. ")
//   return passwordInclude(); 
// }
// if((passwordLowercase||passwordUppercase||passwordNumber||passwordSpecial)){
//   const char =[];
//   if (passwordLowercase) char.push(randomUppercase);
//   if (passwordUppercase) char.push(randomUppercase);
//   if (passwordNumber) char.push(randomNumber);
//   if(passwordSpecial) char.push (randomSpecial)
//   console.log(randomSpecial);
//   const passwordLength = chooseLength;
//   var result ='';
//   for (var i =0; i < passwordLength; i++){
//     result += char[random(0,char.length)]();
//   }
// }
  
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
