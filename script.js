const display = document.getElementById('display');
const clear = document.getElementById('clear');
const posNeg = document.getElementById('pos-neg');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subtract = document.getElementById('subtract');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const add = document.getElementById('add');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

const numBtns = document.querySelectorAll('.num-btn');

// Clear button click function
clear.addEventListener('click', () => {
    display.textContent = zero.value;
})

// Loop through number buttons and add it's value to the display
numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        display.textContent = numBtn.value;
    })
})



function addition() {
    return numOne + numTwo
}
function subtraction() {
    return numOne - numTwo
}
function multiplication() {
    return numOne * numTwo
}
function division() {
    return numOne / numTwo
}

function operate() {

}

