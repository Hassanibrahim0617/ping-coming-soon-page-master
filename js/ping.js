let myError = document.getElementById("error");
console.log("myError");
let myButton = document.getElementsByTagName("button");
console.log("myButton");
let myEmail = document.getElementsByTagName("input").value;

function errorMessage() {
  console.log("button clicked");
  myError.textContent = "Please provide a valid email address";
}



