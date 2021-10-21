//ask password criteria when user clicks"generate password button
document.getElementById("generate").addEventListener("click",function passwordCriteria(){
passwordLength();
passwordIncludeLower();
passwordIncludeUpper();
passwordIncludeNumber();
passwordIncludeSpecial();
checkAtLeastOne();
});
// get password length
var passwordLength=function () {
  var length = window.prompt("Please enter a number between \"8\" to \"28\" for the length of your password. You can include 8 or 28.");
  //convert answer to actual number
  length = parseInt(length);
    if(length >=8 && length <= 128){
      window.alert("Great! Your password will have " + length +" characters in length.")
    } 
    // validate answer
    else{
      window.alert("You did not enter a valid number. Try again. ");
      passwordLength();
    }
    console.log("password length " + length);
};
var checkAtLeastOne = function (){
// ask if user wants to include lowercase letter
var passwordIncludeLower = function () {
  var passwordLowercase = window.prompt("Would you like include lowercase letter in your password? Enter for \"Yes\" or \"No\"");
  //validate prompt answer
  if(passwordLowercase === "" || passwordLowercase === null){
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordIncludeLower();
  }
  //convert answer to lowercase
  passwordLowercase = passwordLowercase.toLowerCase();
  if(passwordLowercase === "yes"){

    useLowercase = true;
    console.log("Password include lowercase");
    console.log(useLowercase);
  }else{
    useLowercase =false;
    console.log("Do not include lowercase");
    console.log(useLowercase);
  }

};

var passwordIncludeUpper = function () {
  var passwordUppercase = window.prompt("Would you like include UPPERCASE letter in your password? Enter for \"Yes\" or \"No\"");
  //validate prompt answer
  if(passwordUppercase === "" || passwordUppercase === null){
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordIncludeUpper();
  }
    //convert answer to lowercase
  passwordUppercase = passwordUppercase.toLowerCase();
  if(passwordUppercase === "yes"){
    useUppercase = true;
    console.log("Password include Uppercase");
    console.log(useUppercase);
  }else{
    useUppercase =false;
    console.log("Do not include Uppercase");
    console.log(useUppercase);
  }

};

var passwordIncludeNumber = function () {
  var passwordNumber= window.prompt("Would you like include numbers in your password? Enter for \"Yes\" or \"No\"");
  //validate prompt answer
  if(passwordNumber === "" || passwordNumber === null){
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordIncludeNumber();
  }
   //convert answer to lowercase
  passwordNumber = passwordNumber.toLowerCase();
  if(passwordNumber === "yes"){
    useNumber = true;
    console.log("Password include Number");
    console.log(useNumber);
  }else{
    useNumber = false;
    console.log("Do not include Number");
    console.log(useNumber);
  }
};

var passwordIncludeSpecial= function () {
  var passwordSpecial= window.prompt("Would you like include special characters in your password? Enter for \"Yes\" or \"No\"");
  //validate prompt answer
  if(passwordSpecial === "" || passwordSpecial === null){
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordIncludeSpecial();
  }
   //convert answer to lowercase
  passwordSpecial = passwordSpecial.toLowerCase();
  if(passwordSpecial === "yes"){
    useSpecial = true;
    console.log("Password include Special characters");
    console.log(useSpecial);
  }else{
    var useSpecial = false;
    console.log("Do not include Special Characters");
    console.log(useSpecial);
  }
};


console.log("checkatleastone");
if(useLowercase == false  && useUppercase == false && useNumber == false && useSpecial == false){
  window.alert("You need to choose at least one type of character to include. Please try again. ")
  passwordInclusion();
}
else{

window.alert("generating password");
}
};


var wishlist =[
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters
];
var useLowercase = "";
var useUppercase = "";
var useNumber = "";
var useSpecial = "";


// Assignment code here
// prompt length of password 8-28 window.prompt


// prompt to select criteria what to include
    // prompt include lowercase window.prompt
    // prompt include uppercase window.prompt
    // prompt include numeric window.prompt
    // prompt include special characters window.prompt
// validate input with recursive call
  // var test = function() {
  //   var response = prompt("Question?");
  //   if (response === "" || response === null) {
  //     window.alert("You need to provide a valid answer! Please try again."); 
  //     test();
  //   }
  //   return response;
  // }

// if all(lowercase uppercase numeric or special) =null.re prompt criteria
//else generate password
  //control length
  //wishlist character
    //construct wishlist:
       //1 lower 
       //2 upper
       //3 numeric
       //4 special character
       //4+6+4+1=15
      // var generatePassword = (
      //   length = 20,
      //   wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
      // ) =>
      //   Array.from(crypto.getRandomValues(new Uint32Array(length)))
      //     .map((x) => wishlist[x % wishlist.length])
      //     .join('')
      
    


//display password in the page 

var generatePassword =function () {


}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Array of special characters to be included in password.
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

generatePassword();


/ Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword{};
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
function generatePassword(choices){
  var passwordArray =[];
  var potentialChars = [];
  var mustHaveChars = [];
  // if in options.uppercase === true 
     // mustHaveChars.push(random from upperCase array)
   
     // if in options.lowercase === true 
     // mustHaveChars.push(random from upperCase array)
     
   // if in options.number === true 
     // mustHaveChars.push(random from upperCase array)
     
   // if in options.special=== true 
     // mustHaveChars.push(random from upperCase array)
  

    // push form  potentialChars to password array

       // loop to the length of the length of password
        // replace for each one in the passwordArray;

        //join the array to string
        

}
function writePassword() {
  // get user options
  var userOptions = getUserOptions();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

