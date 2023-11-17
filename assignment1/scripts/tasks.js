/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  var sum = number1 + number2;
  return sum;
}

function addNumbers() {
  let addend1 = Number(document.getElementById('addend1').value);
  let addend2 = Number(document.getElementById('addend2').value);

  let result = add(addend1, addend2);

  document.getElementById('sum').value = result;
}

document.addEventListener('click', addNumbers);

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

function subtract(number1, number2) {
  var result1 = number1 - number2;
  return result1;
}

function subtractNumbers() {
  let addend1 = Number(document.getElementById('minuend').value);
  let addend2 = Number(document.getElementById('subtrahend').value);

  let result = subtract(addend1, addend2);

  document.getElementById('difference').value = result;
}

document.addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

function multiply(number1, number2) {
  var result2 = number1 * number2;
  return result2;
}

function mulitplyNumbers() {
  let addend1 = Number(document.getElementById('factor1').value);
  let addend2 = Number(document.getElementById('factor2').value);

  let result = multiply(addend1, addend2);

  document.getElementById('product').value = result;
}

document.addEventListener('click', mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
  var result3 = number1 / number2;
  return result3;
}

function divideNumbers() {
  let addend1 = Number(document.getElementById('dividend').value);
  let addend2 = Number(document.getElementById('divisor').value);

  let result = divide(addend1, addend2);

  document.getElementById('quotient').value = result;
}

document.addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

let currentDate = new Date();

// Step 2: Declare a variable to hold the current year

let currentYear = currentDate.getFullYear;

document.getElementById('year').innerHTML = new Date();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let numbersArray = [];
for (let i = 1; i <= 25; i++) {
  numbersArray.push(i);
}
document.getElementById('array').innerHTML = numbersArray;
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = numbersArray.filter((number) => number % 2 !== 0);
document.getElementById('odds').innerHTML = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.getElementById('evens').innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numbersArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
document.getElementById('sumOfArray').innerHTML = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById('multiplied').innerHTML = multipliedArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = numbersArray
  .map((number) => number * 2)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;
