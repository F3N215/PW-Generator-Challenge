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

/* the following consts use confirm dialogs for user inputs (ie. okay/cancel = true/false boolean). the variable characters initializes an empty string and builds the password based on user inputs using the 'if' statements to check which corresponding constant is true. if all inputs are false the final 'if' statement issues an alert and sends the user back to the start */
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

let generatedPassword = ""; 
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