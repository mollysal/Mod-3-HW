// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Declare function of generatePassword
function generatePassword() {
  //variables holding the different characters
  var upppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
  var specialCharaacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // var selectedCharacters = [] (this is an empty array)
  var selectedCharacters = [];
  //I need to use promts() to gather PW Criteria

  //var passwordLength = promt("How many charcters would you like in your PW?")
  var passwordLength = promt("How many characters would you like in your password?");

  //if(passwordLength < 8) stop function
  //if(passwordLenth > 128) stop functin
  if(passwordLength < 8 || passwordLength > 128) {
    return;
  } 

  //confirm() returns a  boolean true/false 
  //confirm() for uppercase letter
  //confirm() for lowercase letter
  //confirm() for special characters
  //confirm() for numeric characters
  var useUpperCase = confirm("Do you want upper case characters?");
  var useLowerCase = confrim("Do you want lowercase characters?");
  var useSpecialChar = confirm("Do you want special characters?");
  var useNumericalChar = confirm("Do you want numerical numbers?");

  //once each confirm/promt has been answered
  //if confirms are true keep or get char type for the confirm
  //if no confirm is true stop function
  if(!useUpperCase && !useLowerCase && !useSpecialChar && !useNumericalChar) {
    alert("you must pick at least one character type.");
    return;
  }
  //if a confirm is true then concat related list to selected characters array
  //we DO NOT have to worry about how of each of the uppercase, lower, spec char, etc. 
  //now we have an array of all selected char. i.e var selectedCharacters ['A', 'B', 'C', a, b, c, 1, 2, 3, %]
    // if(isuppercase) {
    //   selectedCharacters.concat(upppercaseCharacters);
    // }
 
  //for loop based on pw length
  //use math.floor(Math.random() * selectedCharacters.Lenth) to get random index of selectedCharacters

  //return the passord text (how we end the function)

}


// Add event listener to generate button (when you click button X happnes)
generateBtn.addEventListener("click", writePassword);
