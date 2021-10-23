// Assignment code here
//Function to generate random character
var random = function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
};
// string of special symbols, lowercase and uppcase
const special = "'!@#$%^&*()_+-=[]{}|;,./'";
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//declare global varibles
var passwordLowercase;
var passwordUppercase;
var passwordNumber;
var passwordSpecial;
var length;

// generate password function
function generatePassword(){
  //first ask length
  chooseLength();
  //then ask what type of characters to include
  passwordInclude();
  //generating password
  //declare functions to generate random values in each category
  
  var randomSpecial = () => special[random(0,special.length)];
  var randomNumber = () =>random(0,9);
  var randomUppercase = () =>uppercase[random(0,uppercase.length)]; 
  var randomLowercase = () =>lowercase[random(0,lowercase.length)];
  //create an array char[]to hold the function to push a random character of the selected type. if lowercase is true then array include () =>lowercase[random(0,lowercase.length)
  const char =[];
  //if passwordLowercase true, char[] includes 
  if (passwordLowercase) char.push(randomLowercase);
  //console log to make sure this is working
  console.log(passwordLowercase);
  console.log(randomLowercase);
  if (passwordUppercase) char.push(randomUppercase);
  console.log(passwordUppercase);
  console.log(randomUppercase);

  if (passwordNumber) char.push(randomNumber);
  if(passwordSpecial) char.push (randomSpecial)
  console.log(randomSpecial);
  //console log char[] to see which functions(type) to include
  console.log(char);
  //passwordlength is length user entered
  const passwordLength =  length;
  //consolelog to make sure this is correct
  console.log(passwordLength);
  //create placeholder variable for password
  let result = '';
  // for loop to generate the chosen length from array;
  for (let i = 0; i <= passwordLength; i++) {
    result += char[random(0,char.length)]();   
  }
  //check the generated password
  console.log(result);
  return result;
}
//what type of characters to include
function passwordInclude(){
  passwordLowercase = window.confirm("Click OK to include lowercase letter in your password.");
  console.log(passwordLowercase);
   passwordUppercase = window.confirm("Click Ok to include UPPERCASE letter in your password.");
   console.log(passwordUppercase);
   passwordNumber= window.confirm("Click Ok to include numbers in your password.");
   console.log(passwordNumber);
  passwordSpecial= window.confirm("Click OK include Special symbols in your password");
  console.log(passwordSpecial);
  // validate -- if none is checked ask again
  if(!(passwordLowercase||passwordUppercase||passwordNumber||passwordSpecial)){
    alert("You must choose at least one type of characters. Please try again!");
    return passwordInclude();
  };
  }

//get length of the password
function chooseLength(){
  length = parseInt(prompt("Please enter a number between \"8\" to \"128\" for the Length of your password. You can include 8 or 128."));
// If null or not number or not between 8-128, ask again.
  if(!(length>=8 &&length <=128)){
    alert("You did not enter a valid number. Please try again!");
    return chooseLength();
  }else {
    alert("Great! Your password will have " + length + " characters.")
  };
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
generateBtn.addEventListener("click", function(){generatePassword();});