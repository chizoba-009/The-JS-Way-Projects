// //Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays
// them in one sentence.

const firstName = prompt('What is your first name?')
const lastName = prompt('What is your last name?')

alert(`Your full name is ${firstName} ${lastName}`)

// //Final values
// Observe the following program and try to predict the final values of its variables.
let a = 2
a -= 1
a++
let b = 8
b += 2
const c = a + b * b
const d = a * b + b
const e = a * (b + b)
const f = (a * b) / a
const g = (b / a) * a
console.log(a, b, c, d, e, f, g)
// Check your prediction by executing it.

// //VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding
// final price using a VAT rate of 20.6%.

const price = Number(prompt('Enter price:'))
let finalPrice = price * (20.6 / 100)
alert(finalPrice)

// // From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit
// degrees.
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

const celsius = Number(prompt('Enter temperature in celsius'))

const converted = (celsius * 9) / 5 + 32
console.log(`Your temperature in fahrenheit is ${converted}`)

// // Variable swapping
// Observe the following program.
let number1 = 5
let number2 = 3
// // TODO: type your code here (and nowhere else!)
number1 -= 2
number2 += 2

console.log(number1) // Should show 3
console.log(number2) // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.
