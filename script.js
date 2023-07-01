// Prompt the user to enter three numbers and parse them as a floating-point value
let num1 = parseFloat(prompt("Give me a number"));
let num2 = parseFloat(prompt("And another one!"));
let num3 = parseFloat(prompt("Last one"));

// Compare the numbers and display the result
if (num1 > num2 && num1 > num3) {
    document.getElementById('myDiv1').innerHTML = num1 + " is greater than " + num2 + " and " + num3;
} else if (num2 > num1 && num2 > num3) {
    document.getElementById('myDiv1').innerHTML = num2 + " is greater than " + num1 + " and " + num3;
} else if (num3 > num1 && num3 > num2) {
    document.getElementById('myDiv1').innerHTML = num3 + " is greater than " + num1 + " and " + num2;
} else {
    document.getElementById('myDiv1').innerHTML = "The numbers are equal";
}
