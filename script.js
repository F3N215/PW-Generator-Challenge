// Assignment Code

// #generate element refeerences
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const min_Password_Length = '8';
const max_Password_Length = '128';

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){ 

// These are the user prompts
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

// Input prompts
const useUpperCase = confirm("Do you want uppercase, bro?");
const useLowerCase = confirm("How about some lowercase letters, homes?");
const useNumber = confirm("Now add some numbers!");
const useSymbol = confirm("Now add some sweet symbols, guy!");

// Password builder using pool of inputs from prompts
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// writePassword is waiting for a value
// from generatePassword, and then that value is stored
// into password, and then password in turn
// password. Text value. Line 21 tests if password 
// text appears in the box. So the event listener
// working means conneciton is good. At the end we generate
// a password
// 


