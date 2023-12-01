// By effectively captures the user's preferences, this code generates a password based on those preferences, and displays the password on a webpage when the user clicks a button

/* standard password constant variables that define character sets from which a password can be made. the min/max lengths define lengths for the generated password (found via reviewing online tutorials). the variable below assigns the "generate" HTML ID to the generateBtn object */
const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const minLength = 8;
const maxLength = 128;

var generateBtn = document.querySelector("#generate");

/* this is main function of the generator: the prompt generates a password, returns string | void. parseInt then tries to convert the string into a number, and compares the input with min/max password length using condition isNaN. if conditions are true (the input is not a number OR is too short, OR is too long) the user is sent back to the start of the process via the return alert */

function generatePassword(){ 
const length = prompt("Start by choosing a number between 8 and 128. You'll be asked to choose how you want your password. Remember: the greater your variation, the stronger your password."); 
const passwordLength = parseInt(length); 
    if(
      isNaN(passwordLength) ||
        passwordLength < minLength ||
        passwordLength > maxLength
    )
  {
    return alert("No, no, you have to use a number between 8 and 128. Remember?"); 
  }

  /* consts use confirm dialogs for user inputs (ie. okay/cancel = true/false boolean). var characters initializes an empty string and builds the password based on user inputs with 'if' statements to check which of the corresponding constants is true. if all inputs are false, the last 'if' statement issues an alert and sends the user back to the start */
const useUpperCase = confirm("Start by choosing an uppercase letter.");
const useLowerCase = confirm("Now, choose whether you want lowercase letters.");
const useNumber = confirm("Now add some numbers.");
const useSymbol = confirm("Now add some symbols!");

var characters = ""; 
    if(useUpperCase){
      characters += upCase; 
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
    if(characters === ''){
      alert("Come on, you gotta pick at least ONE ...")
    return "Let's go again!" 
    }

/* loop runs passwordLength (user defined). inside the loop random index is generated using Math.random times the length of the string defined from the previous block and then rounded down with Math.floor and shown in the 'characters' string (which is then added to the 'generatedPassword' string) and logged to console */  
let generatedPassword = ""; 
  for(let i=0; i < passwordLength; i++){ 
  const randomIndex = Math.floor(Math.random() * characters.length); 
  generatedPassword += characters.charAt(randomIndex);
}

console.log('Generated Password: ' , generatedPassword);

return generatedPassword
}

/* last function calls 'generatePassword' to retrieve the generated password, and selects the HTML id 'password' with a querySelector. this sets the value to the generated password and displays it on the card */
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      passwordText.value = password;
}

/* lastly, this event listener triggers writePassword when the 'generate' button is clicked */
  generateBtn.addEventListener("click", writePassword);