//input variables;
let passwordLength;
let lowercase;
let uppercase;
let specialCharacters;
let numeric;

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

//random num genator
const getRandomArrIndex = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  passwordArr = [];
  passwordLength = Number(
    prompt(
      "Please choose a password length. The password must be at least 9 characters and less than 129 characters in length."
    )
  );
  lowercase = confirm("Do you want lowercase letters?");
  uppercase = confirm("Do you want uppercase letters?");
  specialCharacters = confirm("Do you want special characters?");
  numeric = confirm("Do you want numbers?");
  password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const generatePassword = function () {
  //toggles for loop
  let lowercaseToggle = true;
  let uppercaseToggle = true;
  let specialToggle = true;
  let numericToggle = true;
  //loops through each array picked by user and randomly selects a value from each array
  for (let i = 0; i < passwordLength; i++) {
    if (lowercase && lowercaseToggle) {
      let randomIndex = getRandomArrIndex(lowercaseArr.length);
      passwordArr.push(lowercaseArr[randomIndex]);
      lowercaseToggle = false;
    } else if (uppercase && uppercaseToggle) {
      let randomIndex = getRandomArrIndex(upperCaseArr.length);
      passwordArr.push(upperCaseArr[randomIndex]);
      uppercaseToggle = false;
    } else if (specialCharacters && specialToggle) {
      let randomIndex = getRandomArrIndex(specialCharactersArr.length);
      passwordArr.push(specialCharactersArr[randomIndex]);
      specialToggle = false;
    } else if (numeric && numericToggle) {
      let randomIndex = getRandomArrIndex(numericArr.length);
      passwordArr.push(numericArr[randomIndex]);
      numericToggle = false;
    } else {
      lowercaseToggle = lowercaseToggle ? false : true;
      uppercaseToggle = uppercaseToggle ? false : true;
      specialToggle = specialToggle ? false : true;
      numericToggle = numericToggle ? false : true;
      i--;
    }
  }
  return passwordArr.join("");
};
