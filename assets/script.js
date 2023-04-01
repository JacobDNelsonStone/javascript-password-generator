// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
//my arrays of the different types of characters available
var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var specialcharacters = [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", `"`, "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];

var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ];


//array that passwordSpecs => definePassword results will go into to make options for the random number (index value) generator to pick from
var userPasswordArray = [ ];


// final array of chosen index values from userPasswordArray to be joined back into a string and returned into the password field
var FinalPasswordArray = [ ];


// variables 
var YesUppercase
var YesLowercase
var YesSpecialCharacters
var YesNumbers
var PasswordLengthDefined = 0
var passwordSpecs
var definePassword
var finalArraySelect



function error() {
  alert("You must select at least one type of character set/number of characters for your password.");
  generatePassword();
}


  //function to get initial specs of password, write a contingency function for if they dont choose any of the options? 
  passwordSpecs();
  
  //passing info from passwordspecs into this if statment function to determine length of userPasswordArray.
  definePassword(); 

  //use a for loop to iterate a random math function over the whole length of the userPasswordArray for the number of times that PasswordLengthDefined dictates.
  finalArraySelect();

console.log(userPasswordArray);

function passwordSpecs() {
  YesUppercase = confirm( "Would you Like Uppercase letters? \n Click Okay for yes and Cancel for No.");
  YesLowercase = confirm( "Would you like lowercase letters? \n Click Okay for yes and Cancel for No.");
  YesSpecialCharacters = confirm( "Would you like special characters? \n Click Okay for yes and Cancel for No.");
  YesNumbers = confirm( "Would you like numbers? \n Click Okay for yes and Cancel for No.");
  PasswordLengthDefined = prompt( "How many characters would you like? \n Please enter a number between 8 and 128.");
  
}

function definePassword () {
  if ( YesUppercase === true ) {
    userPasswordArray = userPasswordArray.concat(uppercase);
  }
  if (YesLowercase === true ) {
    userPasswordArray = userPasswordArray.concat(lowercase);
  }
  if ( YesSpecialCharacters === true ) {
    userPasswordArray = userPasswordArray.concat(specialcharacters);
  }
  if ( YesNumbers === true ) {
    userPasswordArray = userPasswordArray.concat(numbers);
  } else if ( YesLowercase === false && YesNumbers === false && YesSpecialCharacters === false && YesUppercase === false || PasswordLengthDefined < 8 > 128 ) {
    return error()
  }
}  

function finalArraySelect() { 
  for (var i = 0; i < PasswordLengthDefined; i++) {
    FinalPasswordArray = [Math.floor(Math.random(PasswordLengthDefined) * userPasswordArray.length)];
  
  } return FinalPasswordArray;

}

console.log(FinalPasswordArray.toString());

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);