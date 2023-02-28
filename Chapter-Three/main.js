// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// //FOlLOWING DAY
const day = prompt('Enter current day:').toLowerCase()
switch (day) {
  case 'monday':
    alert('Tomorrow is Tuesday')
    break
  case 'tuesday':
    alert('Tomorrow is Wednsday')
    break
  case 'wednesday':
    alert('Tomorrow is Thursday')
    break
  case 'thursday':
    alert('Tomorrow is Friday')
    break
  case 'friday':
    alert('Tomorrow is Saturday')
    break
  case 'saturday':
    alert('Tomorrow is Sunday')
    break
  case 'sunday':
    alert('Tomorrow is Monday')
    break
  default:
    alert('Invalid Day!')
}

// //NUMBER COMPARISON
// Write a program that accepts two numbers, then compares their values and displays an
// appropriate message in all casesz

let num1 = Number(prompt('Enter first number:'))
let num2 = Number(prompt('Enter second number:'))

if (num1 > num2) {
  alert('Number 1 is greater than number 1')
} else if (num1 < num2) {
  alert('Number 2 is greater than number 1')
} else if (num1 === num2) {
  alert('Number 2 is equal to number 1')
} else {
  alert('NAN - NOT A NUMBER')
}

// //Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const month = Number(prompt('Enter month number:'))
switch (month) {
  case 1:
    alert('There are 31 days in January')
    break
  case 2:
    alert('There are 28 days in February and 29 in each leaap year')
    break
  case 3:
    alert('There are 31 days in March')
    break
  case 4:
    alert('There are 30 days in April')

    break
  case 5:
    alert('There are 31 days in May')

    break
  case 6:
    alert('There are 30 days in June')
    break
  case 7:
    alert('There are 31 days in July')
    break
  case 8:
    alert('There are 31 days in August')
    break
  case 9:
    alert('There are 30 days in September')
    break
  case 10:
    alert('There are 31 days in October')
    break
  case 11:
    alert('There are 30 days in November')
    break
  case 12:
    alert('There are 31 days in October')
    break
  default:
    alert('Invalid Number!')
}
