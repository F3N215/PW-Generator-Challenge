// standard password constant variables for character sets (from reviewing online tutorials) 
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const minPasswordLength = 8;
const maxPasswordLength = 128;

var generateBtn = document.querySelector("#generate");

// this function generates a password returns string | void
function generatePassword(){ 

// first user prompt
const length = prompt("Start by choosing a number between 8 and 128. You'll be asked to choose how you want your password. Remember: the greater your variation, the stronger your password.");

const passwordLength = parseInt(length); // <- attempts to turn a string into a number. 
    if(
      isNaN(passwordLength) || // <- if input is not a number OR if too short OR if too long
        passwordLength < minPasswordLength ||
        passwordLength > maxPasswordLength
    )
  {
    return alert("Yo what the hell is this, try a number between 8 and 128."); 
      // returns the alert after calling function
  }

//  user okay/cancel boolean
const useUpperCase = confirm("Start by choosing an uppercase letter.");
const useLowerCase = confirm("Now, choose whether you want lowercase letters.");
const useNumber = confirm("Now add some numbers.");
const useSymbol = confirm("Now add some sweet symbols, guy!");

/* testing conditional gate placement ...
if(useUpperCase = ""lowerCase && !useNumber && !useSymbol) {
  alert("Come on, you gotta pick at least ONE ...")
  return "Let's go again!"
} */

// these lines build the password from the pool generated from the above prompts
var characters = ""; // changes to an empty string
    if(useUpperCase){ // conditions to evaluate boolean
      characters += upperCase; // based on user select, calls const value 
  }
    if(useLowerCase){
      characters += lowerCase;
  }
    if(useNumber){
      characters += number;
  }
    if(useSymbol){
      characters += symbol; // appends const variables set out above
  }
  
// conditional gate sends user to beginning of process if all false
if(characters === ''){
  alert("Come on, you gotta pick at least ONE ...")
  return "Let's go again!" 
}

// ^ can also be expressed as ...    
    // if (useUpperCase) characters += upperCase;    
    // if (useNumber) characters += number;
    // if (useSymbol) characters += symbol;

// generating password from user input 
let generatedPassword = "";
    for(let i=0; i < passwordLength; i++){ 
      // user input determines .length loops X times, loop over available character set based on user input

      const randomIndex = Math.floor(Math.random() * characters.length); 
// ie. shows between 10 - 87 (if all characters); math.floor rounds down, and math.random generates 0-1. 
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