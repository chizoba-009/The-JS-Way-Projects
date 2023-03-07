// // Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// for (let i = 1; i <= 10; i++) {
//   alert(i)
// }
// When it’s done, improve it so that the number of turns is given by the user.

// const number = Number(prompt('Enter a number:'))

// for (let i = 1; i <= number; i++) {
//   console.log(i)
// }

// // Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.
// for (let i = 1; i <= 10; i++) {
// if (i % 2 === 0) {
// console.log(`${i} is even`);
// } }
// This program uses the modulo operator %, which calculates the remainder after division of one
// number by another. It’s often used to assess number parity.
// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
// Improve the program so that it also shows odd numbers.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`)
//   } else if (i % 2 !== 0) {
//     console.log(`${i} is odd`)
//   }
// }

// Improve it again to replace the initial number 1 by a number given by the user.
// This program must show exactly 10 numbers including the first one, not 11 numbers!

// const number = Number(prompt('Enter starting number:'))
// if (number === 0) {
//   for (let i = number; i < 10; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`)
//     } else if (i % 2 !== 0) {
//       console.log(`${i} is odd`)
//     }
//   }
// } else {
//   for (let i = number; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`)
//     } else if (i % 2 !== 0) {
//       console.log(`${i} is odd`)
//     }
//   }
// }

// Input validation
// Write a program that continues to ask the user for a number until the entered number is less
// than or equal to 100.

// let num = Number(prompt('Enter any random number: '))

// // if (num <= 100) {
// // } else {
// //   console.log('object')
// // }

// // When you are done with the above, improve the program so that the terminating number is
// // between 50 and 100.
// while (num <= 100) {
//   console.log('object')
//   num = Number(prompt('Enter any number again : '))
//   num++
// }

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// • It shows "Fizz" instead if the number is divisible by 3.
// • It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// for (let i = 1; i <= 100; i++) {
//   // console.log(i)
//   if (i % 3 === 0) {
//     console.log('fizz')
//   } else if (i % 5 === 0) {
//     console.log('buzz')
//   } else {
//     console.log(i)
//   }
// }

// When it’s done, improve it so that the program shows "FizzBuzz" instead for numbers divisible
// both by 3 and by 5.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}

// This exercise has many, many solutions¹. It’s a job interview classic² that a significant
// number of candidates fail. Try your best!
