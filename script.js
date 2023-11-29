// constant variables for password text
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const min_Password_Length = 8;
const max_Password_Length = 128;

var generateBtn = document.querySelector("#generate");

// This function generates the password
function generatePassword(){ 

// First Prompt: Enter Password
const length = prompt("Enter password length between 8 and 128:");

// Validation code
const passwordLength = parseInt(length); // attempts to turn string into a number
    if (
      isNaN(passwordLength) || // compares numbers to numbers (and not strings)
        passwordLength < min_Password_Length ||
        passwordLength > max_Password_Length
    )
    {
      return alert("Yo what the hell is this, try a password between 8 and 128 characters."); // returns the alert after calling function
    }


// User Prompts: Add to Input Pool // okay/cancel boolean
const useUpperCase = confirm("Do you want uppercase, bro?");
const useLowerCase = confirm("How about some lowercase letters, homes?");
const useNumber = confirm("Now add some numbers!");
const useSymbol = confirm("Now add some sweet symbols, guy!");

// These lines build the password from the pool generated from the above prompts
let characters = ""; // changes to a string
    if(useUpperCase === true){
      characters += useUpperCase 
    }
// if (useUpperCase) characters += upperCase;
if (useLowerCase) characters += lowerCase;
if (useNumber) characters += number;
if (useSymbol) characters += symbol;

// Validation minimum 1 character type // conditional gates 
    if (characters === ''){
      alert("Come on, you gotta pick at least ONE.")
      return;
    }

    console.log(characters.length)

// generating password from user input 
let generatedPassword = "";
for (let i=0; i < passwordLength; i++) { // user input determines .length loops X times
const randomIndex = Math.floor(Math.random() * characters.length); // shows between 0 - 35 (if using letters + numbers only); math.floor rounds down, and math.random generates 0-1
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
// this function calls writePassword when the "generate" button is clicked
  generateBtn.addEventListener("click", writePassword);




6