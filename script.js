// Assignment Code

// Element References
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const min_Password_Length = '8';
const max_Password_Length = '128';

var generateBtn = document.querySelector("#generate");

// This function generates the password
function generatePassword(){ 

// First Prompt: Enter Password
const length = prompt("Enter password length between 8 and 128:");

// Validation code
const passwordLength = parseInt(length);
    if (
      isNaN(passwordLength) ||
        passwordLength < min_Password_Length ||
        passwordLength > max_Password_Length
    )
    {
          alert("Yo what the hell is this, try a password between 8 and 128 characters.");
    return;
    }


// User Prompts: Add to Input Pool
const useUpperCase = confirm("Do you want uppercase, bro?");
const useLowerCase = confirm("How about some lowercase letters, homes?");
const useNumber = confirm("Now add some numbers!");
const useSymbol = confirm("Now add some sweet symbols, guy!");

// These lines build the password from the pool generated from the above prompts
let characters = "";
if (useUpperCase) characters += upperCase;
if (useLowerCase) characters += lowerCase;
if (useNumber) characters += number;
if (useSymbol) characters += symbol;

// Validation minimum 1 character type
    if (characters === ''){
      alert("Come on, you gotta pick at least ONE.")
      return;
    }

// Generating password from user input
let generatedPassword = "";
for (let i=0; i < passwordLength; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
generatedPassword += characters.charAt(randomIndex);
}

// Display generated password in the console
console.log('Generated Password: ' , generatedPassword);

return generatedPassword
}

function writePassword() { // write.Password func is called stored into password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// this function fires writePassword when the "generate" button is clicked
  generateBtn.addEventListener("click", writePassword);




