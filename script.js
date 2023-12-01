// By effectively captures the user's preferences, this code generates a password based on those preferences, and displays the password on a webpage when the user clicks a button

// standard password constant variables that define character sets from which a password can be made. the min/max lengths define lengths for the generated password (found via reviewing online tutorials) 
const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const minLength = 8;
const maxLength = 128;

// using querySelector this variable assigns HTML id to the generateBtn variable
var generateBtn = document.querySelector("#generate");

// this function generates a password, it returns string | void
function generatePassword(){ 

// this is the first user prompt
const length = prompt("Start by choosing a number between 8 and 128. You'll be asked to choose how you want your password. Remember: the greater your variation, the stronger your password.");

const passwordLength = parseInt(length); // <- attempts to turn a string into a number. 
    if(
      isNaN(passwordLength) || // <- if input is not a number OR if too short OR if too long
        passwordLength < minLength ||
        passwordLength > maxLength
    )
  {
    return alert("No, no, you have to use a number between 8 and 128. Remember?"); 
      // returns the alert after calling function
  }

//  user okay/cancel boolean
const useUpperCase = confirm("Start by choosing an uppercase letter.");
const useLowerCase = confirm("Now, choose whether you want lowercase letters.");
const useNumber = confirm("Now add some numbers.");
const useSymbol = confirm("Now add some sweet symbols, guy!");

// these lines build the password from the pool generated from the above prompts
var characters = ""; // changes to an empty string
    if(useUpperCase){ // conditions to evaluate boolean
      characters += upCase; // based on user select, calls const value 
  }
    if(useLowerCase){
      characters += lowCase;
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

let generatedPassword = ""; // generates password from user input
    for(let i=0; i < passwordLength; i++){ 
      // user input determines .length loops X times, looping over available character set based on user input

      const randomIndex = Math.floor(Math.random() * characters.length); 
// ie. shows between 10 - 87 (if all characters); math.floor rounds down, and math.random generates 0-1. 
generatedPassword += characters.charAt(randomIndex);
}

// Display generated password in the console
console.log('Generated Password: ' , generatedPassword);

return generatedPassword
}
// the below function declares both generate.Password and write.Password is called stored into password
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      passwordText.value = password;
}

// this triggers writePassword when the "generate" button is clicked
  generateBtn.addEventListener("click", writePassword);