// Assignment Code
var generateBtn = document.querySelector("#generate");

var globalpassword = {

  uppercase: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],

  lowercase: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ],

  specialcharacters: [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", `"`, "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ],

  numbers: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]

}

var all = [ ];
var PasswordCharLength
var YesUppercase
var YesLowercase
var YesSpecialCharacters
var YesNumbers
var PasswordLengthDefined = function() {
  var PasswordCharlength = prompt( "How many characters would you like? \n Please enter a number between 8 and 128.") = PasswordLength >= 8 <= 128;
  return PasswordCharLength;
  definePassword();

}


function passwordSpecs() {
  
  var YesUppercase = confirm( "Would you Like Uppercase letters? \n Click Okay for yes and Cancel for No.");
  var YesLowercase = confirm( "Would you like lowercase letters? \n Click Okay for yes and Cancel for No.");
  var YesSpecialCharacters = confirm( "Would you like special characters? \n Click Okay for yes and Cancel for No.");
  var YesNumbers = confirm( "Would you like numbers? \n Click Okay for yes and Cancel for No.");
  var PasswordLengthDefined = prompt( "How many characters would you like? \n Please enter a number between 8 and 128.");
}


function error() {
  alert("You must select at least one type of character set/number of characters for your password.");
  passwordSpecs();
}


function definePassword() {

  
}


/*function validatePassword() {
  if( YesUppercase || YesLowercase || YesSpecialCharacters || YesNumbers ) {
    PasswordLengthDefined();
    definePassword(); 
  } else if( YesUppercase || YesLowercase || YesSpecialCharacters && YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else if( YesUppercase || YesLowercase && YesSpecialCharacters && YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else if( YesUppercase && YesLowercase && YesSpecialCharacters && YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else if( YesUppercase && YesLowercase || YesSpecialCharacters || YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else if( YesUppercase && YesLowercase && YesSpecialCharacters || YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else if( YesUppercase && YesLowercase || YesSpecialCharacters || YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else if( YesUppercase || YesLowercase && YesSpecialCharacters || YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else if( YesUppercase && YesLowercase || YesSpecialCharacters && YesNumbers ) {
    PasswordLengthDefined();
    definePassword();
  } else {            
    return error();
  }
}
*/




function generatePassword() {
    
    passwordSpecs()
    validatePassword()
    definePassword()


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);