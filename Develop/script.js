// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Need to prompt user for password length (between 8-128 characters) and use of
// the following character types: lowercase, uppercase, numbers, or special characters

let lowerArr = "abcdefghijklmnopqrstuvwxyz";
let upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numArr = "0123456789";
let specArr = "!'#$%&()[]{}*=+-_.,/;:<>?@~|`^";


function generatePassword(){
  let array = "";
  let passLength = 0;
  let lengthCheck = false;

  while(!lengthCheck){
    passLength = prompt("How many characters do you want in your password? (min 8, max 128)");
    if(passLength >= 8 && passLength < 129){
      lengthCheck = true;
    } else{
      alert("Password length unacceptable.")
    }
  }

  let confirmCheck = false;
  while(!confirmCheck){
    if(confirm("Do you want lowercase letters in your password?")){
      array = array + lowerArr;
      confirmCheck = true;
    }
    if(confirm("Do you want uppercase letters in your password?")){
      array = array + upperArr;
      confirmCheck = true;
    }
    if(confirm("Do you want numbers in your password?")){
      array = array + numArr;
      confirmCheck = true;
    }
    if(confirm("Do you want special characters in your password?")){
      array = array + specArr;
      confirmCheck = true;
    }
    if(!confirmCheck){
      alert("You didn't select anything. Try again.");
    }
    let word = "";
    let rand;
    for(let i = 0; i < passLength; i++){
      rand = Math.floor(Math.random()*array.length);
      word = word + array.charAt(rand);
    }
    
    return word;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
