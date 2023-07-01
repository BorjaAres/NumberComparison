// Prompt the user to enter a number and parse it as a floating-point value
let num1 = parseFloat(prompt("Give me a number", "2"));

// Prompt the user to enter another number and parse it as a floating-point value
let num2 = parseFloat(prompt("And another one!", "3"));

// Compare the two numbers
if (num1 > num2) {
  // If num1 is greater, display the result
  document.getElementById('myDiv1').innerHTML = num1 + " is greater than " + num2;
} else if (num1 < num2) {
  // If num2 is greater, display the result
  document.getElementById('myDiv1').innerHTML = num2 + " is greater than " + num1;
} else {
  // If both numbers are equal, display the result
  document.getElementById('myDiv1').innerHTML = "Both numbers are equal";
}