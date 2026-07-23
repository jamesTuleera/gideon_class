var a = 6
// console.log(a)
var b = 5
var c = a + b

// console.log(c)
c = a % b

// console.log(c)

// Data Type // Variable 
// String  let 
// let myName = 'akdflalj9800'


// Integar

// let numdfd = 89
// decimal/float/double

// let numdfd = 89.6245
// Boolean (true or false)


// Operators (assignment, Arithmetics, increment, decrement)

// operator


// Function


function myfunc() {
    alert('hello world')
}

function myName(name) {

    alert(" Hello " + name)

}


function addNumbers(a, b) {
    let c = a + b
    document.querySelector('.show').innerHTML = c
}

// addNumbers(7,8)

function addNum() {

    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let result = parseInt(num1.value) + parseInt(num2.value)

    document.querySelector('.result').innerHTML = result
}










//////////JS-5 CONDITIONAL STATEMENT//////////
// if, else,  else if, tenary, DOM //////////


let numa = 2

// if(numa >= 8){
//     console.log('The value is 2')
// }else if(numa > 2){
//     console.log('The value is greater than 2')
// }else if(numa < 2){
//     console.log('The value is less than 2')
// }else{
//     console.log('Please check the number again')
// }

numa == 20 ? console.log('tenary 2') : console.log('tenary not 2')






// Assignment


function checkAge() {
    const __ = (e) => document.querySelector(e)

    const name = __('.fullName').value
    const gender = __('.gender').value
    const age = __('.age').value

    __('.sname').innerHTML = name
    __('.sgender').innerHTML = gender

    let sgender = __('.sage')

    if (age < 18) {
        sgender.innerHTML = ' MINOR'
        sgender.style.color = 'red'
    } else {
        sgender.innerHTML = ' ADULT'
        sgender.style.color = 'green'
        sgender.fontSize = '20px'
    }

}



///// JS-6 SWITCH STATEMENT ///////

// let age = 12

// let day = new Date().getDay()

// console.log(new Date())

// switch (day) {
//     case 1: console.log('Monday')

//         break;
//     case 2: console.log('Tuesday')
//         break;
//     case 3: console.log('Wednesday')
//         break;
//     case 4: console.log('Thursday')
//         break;
//     case 5: console.log('Friday')
//         break;
//     case 6: console.log('Saturday')
//         break;
//     case 7: console.log('Sunday')
//         break;
//     default:
//         console.log('Invalid day')
//         break;
// }

// switch (age) {
//     case 18:
//         console.log('You are 18 years old')
//         break;
//     case 25:
//         console.log('You are 25 years old')
//         break;
//     default:
//         console.log('You are not 18 or 25 years old')
//         break;
// }


let ab = 'red'
let bb = 'blue'

if(ab == 'red' || bb == 'pink'){
    console.log('true')
}else{
    console.log('false')
}

