// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//this spits out the PW for you
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Declare function of generatePassword
function generatePassword() {
  //variables holding the different characters
  var upppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharaacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // var selectedCharacters = [] (this is an empty array)
  var selectedCharacters = [];
  //I need to use promts() to gather PW Criteria

  //var passwordLength = promt("How many charcters would you like in your PW?")
  var passwordLength = prompt("How many characters would you like in your password? Enter a number between 8 & 128.");

  //if(passwordLength < 8) stop function
  //if(passwordLenth > 128) stop functin
  if(passwordLength < 8 || passwordLength > 128) {
    return "You must enter a number between 8 and 128. Please try again.";
  } 

  //confirm() returns a  boolean true/false 
  //confirm() for uppercase letter
  //confirm() for lowercase letter
  //confirm() for special characters
  //confirm() for numeric characters
  var useUpperCase = confirm("Do you want upper case characters?");
  var useLowerCase = confirm("Do you want lowercase characters?");
  var useSpecialChar = confirm("Do you want special characters?");
  var useNumericalChar = confirm("Do you want numerical numbers?");

  //once each confirm/promt has been answered
  //if confirms are true keep or get char type for the confirm
  //if no confirm is true stop function
  if(!useUpperCase && !useLowerCase && !useSpecialChar && !useNumericalChar) {
    alert("you must pick at least one character type.");
    return "You must pick at least one character type. Please try again.";
  }
  //if a confirm is true then concat related list to selected characters array
  //array compounds based off of if statements below so we want to re-assign it to the original variable, selectedCharacters
  if(useUpperCase) {
    selectedCharacters = selectedCharacters.concat(upppercaseCharacters);
  } 

  if(useLowerCase) {
    selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
  }

  if(useSpecialChar) {
    selectedCharacters = selectedCharacters.concat(specialCharaacters);
  }

  if(useNumericalChar) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }
  //we DO NOT have to worry about how of each of the uppercase, lower, spec char, etc. 
  //now we have an array of all selected char. i.e var selectedCharacters ['A', 'B', 'C', a, b, c, 1, 2, 3, %]
 
  //for loop based on pw length
  //use math.floor(Math.random() * selectedCharacters.Lenth) to get random index of selectedCharacters
  //i needs to increase each time to become the password length as soon as pw length > pw length selected it will stop running
  var password = "";
  console.log(selectedCharacters);

  for (var i=0; i <= passwordLength; i++) {
    //below spits out a number
    var index = Math.floor(Math.random()* selectedCharacters.length);
    var randomChar = selectedCharacters[index];
    //we want to insert randomChar into password (re-assigning pw)
    password = password + randomChar;
  }
  //return the passord text (how we end the function)
  return password;
}


// Add event listener to generate button (when you click button X happnes)
generateBtn.addEventListener("click", writePassword);
