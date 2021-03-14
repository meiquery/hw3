// elements from DOM
var generateBtn = document.querySelector("#generate");
var password = document.querySelector(".card-body");
var result = document.getElementById("result");
var length = document.getElementById("length");
var lower = document.getElementById("result");
var upper = document.getElementById("result");
var number = document.getElementById("result");
var special = document.getElementById("result");

const randomFunction = {
  lower: getRandomLC,
  upper: getRandomUC,
  number: getRandomNum,
  special: getRandomSpecial
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", showPassword);


//randomization functions
function getRandomLC() {
 return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUC() {
 return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNum() {
 return String.fromCharCode(Math.floor(Math.random() *10 + 48);
}
function getRandomSpecial() {
 var special= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
 return symbols(Math.floor(Math.random() * s));
}



// prints slider value to screen
function rangeSlide(value) {
  document.getElementById("length").innerHTML = value;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//generated password appears!
function showPassword() {
password.style.display = "block";
};

