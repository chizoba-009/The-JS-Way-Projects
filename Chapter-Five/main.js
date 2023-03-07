// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show
// the result of the sayHello() function.
// // Say hello to the user
// function sayHello(firstName, lastName) {
// const message = `Hello, ${firstName} ${lastName}!`;
// return message;
// }
// TODO: ask user for first and last name
// TODO: call sayHello() and show its result

// SOLUTION
const firstName = prompt('Enter your first name: ')
const lastName = prompt('Enter your last name: ')

function sayHello(fname, lname) {
  const message = `Hello, ${firstName} ${lastName}!`
  console.log(message)
}

sayHello(firstName, lastName)

// // Number squaring
// Complete the following program so that the square1() and square2() functions work properly.
// // Square the given number x
// function square1(x) {
// TODO: complete the function code
// }
// // Square the given number x
// const square2 = x => // TODO: complete the function code
// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25
// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25

let num = 5
function square1(x) {
  return num ** 2
}

console.log(square1())

const square2 = (x) => {
  return num * num
}

console.log(square2())

// When it’s done, update the program so that it shows the square of every number between 0 and
// 10.
// Writing 10 dumb calls to square() is forbidden! You know how to repeat statements,
// don’t you? ;)

for (let i = 0; i <= 10; i++) {
  console.log(i ** 2)
}

const square3 = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i ** 2)
  }
}
square3()

// //Minimum of two numbers
// Let’s pretend the JavaScript Math.min() function doesn’t exist. Complete the following program
// so that the min() function returns the minimum of its two received numbers.
// TODO: write the min() function
// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9)); // Must show 9
// console.log(min(1, 1)); // Must show 1

function returnMinimum(x, y) {
  if (x > y) {
    return y
  } else {
    return x
  }
}
console.log(returnMinimum(4.5, 5))

// //Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition,
// subtraction, multiplication and division. You can use either a function declaration or a function expression.
// TODO: complete program
// console.log(calculate(4, "+", 6)); // Must show 10
// console.log(calculate(4, "-", 6)); // Must show -2
// console.log(calculate(2, "*", 0)); // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

const calculate = (x, y, z) => {
  if (y === '+') {
    return x + z
  } else if (y === '-') {
    return x - z
  } else if (y === '/') {
    return x / z
  } else if (y === '*') {
    return x * z
  }
}

console.log(calculate(2, '+', 0))

// //Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
// Here are some tips for solving this exercise:
// • Circumference and area calculation formulas should be part of your secondary school memories… Or a Google click away :)
// • The value of number π (Pi) is obtained with Math.PI in JavaScript.
// • You might want to use the exponentiation operator² ** to perform computations.

// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3

const radius = Number(prompt('Enter the radius of the circle: '))

const area = () => {
  return Math.round(Math.PI * radius ** 2)
}

console.log(area())

const circumference = () => {
  return Math.round(2 * Math.PI * radius)
}

console.log(circumference())
