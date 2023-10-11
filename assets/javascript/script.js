// Character arrays
var characterSets = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!~`@#$%^&*()-_=+[{]}\\|;:\'"<>,./?',
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {
  var passChar = '';
  var passTemp = '';

  // Prompt user for password length between 8 and 128 characters
  var userInputLength;
  while (!(userInputLength >= 8 && userInputLength <= 128)) {
    userInputLength = Number(prompt("Please input the length you want your password to be, between 8 and 128 characters. Thank you!"));
  }

  // Define password characteristics through prompts
  var confirmUppercase = confirm("Will the password include UPPERCASE letters?");
  var confirmLowercase = confirm("Will the password include lowercase letters?");
  var confirmNumbers = confirm("Will the password include numbers?");
  var confirmSpecialCharacters = confirm("Will the password include Special Characters?");

  // Check if at least one character type is selected
  if (!(confirmUppercase || confirmLowercase || confirmNumbers || confirmSpecialCharacters)) {
    alert("Please select at least one Character Option to generate a proper password");
    return '';
  }

  // Build the character set based on user selections
  if (confirmUppercase) {
    passChar += characterSets.upperCase;
  }
  if (confirmLowercase) {
    passChar += characterSets.lowerCase;
  }
  if (confirmNumbers) {
    passChar += characterSets.numbers;
  }
  if (confirmSpecialCharacters) {
    passChar += characterSets.symbols;
  }

  // Generate the random password
  for (var i = 0; i < userInputLength; i++) {
    var index = Math.floor(Math.random() * passChar.length);
    passTemp += passChar.charAt(index);
  }

  return passTemp;
}

// Function to write the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
