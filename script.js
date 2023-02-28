// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to include?'),
    10
  );

  // Conditional statements to generate password
  if (Number.isNaN(length)) {
    alert ('The length of the password must be entered as a number.');
    return null;
  }
  if (length < 8) {
    alert('The length of the password must include a minimum of 8 characters.')
    return null;
  }
  if (length > 128) {
    alert('The length of the password must not exceed 128 characters.');
    return null;
  }


  //Variable statements to store booleans
  var includeLowercaseCharacters = confirm(
    'Click OK to include lowercase characters.'
  );
  var includeUppercaseCharacters = confirm(
    'Click OK to include uppercase characters.'
  );
  var includeNumericCharacters = confirm(
    'Click OK to include numeric characters.'
  );
  var includeSpecialCharacters = confirm(
    'Click OK to include special characters.'
  );

  //Condition statement for password criteria
  if (
    includeLowercaseCharacters === false &&
    includeUppercaseCharacters === false &&
    includeNumericCharacters === false && 
    includeSpecialCharacters === false 
  ) 
  {
    alert('At least one character type must be selected.');
    return null;
  }
var passwordOptions = {
  length: length,
  includeLowercaseCharacters: includeLowercaseCharacters,
  includeUppercaseCharacters: includeUppercaseCharacters,
  includeNumericCharacters: includeNumericCharacters,
  includeSpecialCharacters: includeSpecialCharacters,
};
  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

//Function to generate password
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!options) return null;

  // Conditional statements for arrays
  if (!options) return null;

  if (options.includeLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }
  if (options.includeUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  }
  if (options.includeNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  //loop
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i< guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

// Lowercase characters 
var lowercaseCharacters = [
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
  'z',
];
 
// Uppercase characters
var uppercaseCharacters = [
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
  'Z',
];

// Numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Special characters
var specialCharacters = ['!','"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '\\', '[', '^', '_', '`', '{', '|', '}', '~', ']', '/',];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);