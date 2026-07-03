var a = 6
// console.log(a)
var b = 5
var c = a + b

// console.log(c)
c = a % b

// console.log(c)

// Data Type // Variable 
// String 
// Integar
// decimal/float/double
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


document.getElementById('sum').addEventListener('click', function(){
    addNum()
})



