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

// Loop through number buttons and add value to the display
let index = undefined;
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', () => {
        index = i;
        switch (index) {
            case 0:
                display.textContent = seven.value;
                break;
            case 1:
                display.textContent = eight.value;
                break;
            case 2:
                display.textContent = nine.value;
                break;
            case 3:
                display.textContent = four.value;
                break;
            case 4:
                display.textContent = five.value;
                break;
            case 5:
                display.textContent = six.value;
                break;
            case 6:
                display.textContent = one.value;
                break;
            case 7:
                display.textContent = two.value;
                break;
            case 8:
                display.textContent = three.value;
                break;
            case 9:
                display.textContent = zero.value;
                break;
            default:
                display.textContent = '0';
        }
    })
}


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

