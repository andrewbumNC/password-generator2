//Create Prompts and variables to store data
//Prompt for length of password 8 or more, less than 129
//Prompt for length
//Prompt for lowercase characters
//Prompt for uppercase
//Prompt for numberic
//Prompt for special characters
//create variables to store all these valeus
//create array for upper case characters
//create characters for lower case characters
//create array for numeric
//create array for special characters
//create for loop that loops over all options and only selects from the option if the category was selected
//create variables for toggles
//create empty array to store password

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//input variables, remove defaults later
let passwordLength = 10;
let lowercase = true;
let uppercase = true;
let specialCharacters = true;
let numeric = true;

//toggles for loop
let lowercaseToggle = true;
let uppercaseToggle = true;
let specialToggle = true;
let numericToggle = true;

//random num genator
const getRandomArrIndex = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};

//arrays
let passwordArr = [];

const lowercaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const specialCharactersArr = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//loops through each array picked by user and randomly selects a value from each array
for (let i = 0; i < passwordLength; i++) {
  if (lowercase && lowercaseToggle) {
    let randomIndex = getRandomArrIndex(lowercaseArr.length);
    console.log(randomIndex);
    passwordArr.push(lowercaseArr[randomIndex]);
    lowercaseToggle = false;
  } else if (uppercase && uppercaseToggle) {
    let randomIndex = getRandomArrIndex(lowercaseArr.length);
    console.log(randomIndex);
    passwordArr.push(upperCaseArr[randomIndex]);
    uppercaseToggle = false;
  } else if (specialCharacters && specialToggle) {
    let randomIndex = getRandomArrIndex(lowercaseArr.length);
    console.log(randomIndex);
    passwordArr.push(specialCharactersArr[randomIndex]);
    specialToggle = false;
  } else if (numeric && numericToggle) {
    let randomIndex = getRandomArrIndex(numericArr.length);
    console.log(randomIndex);
    passwordArr.push(numericArr[randomIndex]);
    numericToggle = false;
  } else {
    console.log(`current loop is ${i}`);
    lowercaseToggle = lowercaseToggle ? false : true;
    uppercaseToggle = uppercaseToggle ? false : true;
    specialToggle = specialToggle ? false : true;
    numericToggle = numericToggle ? false : true;
    i--;
    console.log(`adjusted loop ${i}`);
    console.log(passwordArr);
  }
}
