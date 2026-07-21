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
