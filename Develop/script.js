// elements from DOM
var generateBtn = document.querySelector("#generate");
var password = document.getElementsByClassName(".card-body");


var result = document.getElementById("result");
//var length = document.getElementById("length");
var lower = document.getElementById("setLower");
var upper = document.getElementById("setUpper");
var number = document.getElementById("setNumeric");
var special = document.getElementById("setSpecial");


 /* const randomFunction = {
  lower: getRandomLC,
  upper: getRandomUC,
  number: getRandomNum,
  special: getRandomSpecial

  element.addEventListener("click", function(){ alert("Hello World!"); });
}; */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
generateBtn.addEventListener("click", showPassword());


//randomization functions 
function getRandomLC() {
 return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUC() {
 return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNum() {
 return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function getRandomSpecial() {
 var special= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
 return symbols(Math.floor(Math.random() * s));
}

function allRandom() {
  getRandomLC();
  getRandomUC();
  getRandomNum();
  getRandomSpecial();
};



// prints slider value to screen
function rangeSlide(value) {
  document.getElementById("howlong").innerHTML = value;
};


//generated password appears!
function showPassword() {
   password.style.display = "block";
};


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#passcode");
  //passwordText.value = password;

  console.log(typeof length);
};


rangeSlide();




