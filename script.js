let display = document.getElementById('display');
let mainDisplay = document.getElementById('main-display');
let output = document.getElementById('output');

const clear = document.getElementById('clear');
const posNeg = document.getElementById('pos-neg');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator');

const deleteBtn = document.getElementById('delete');

// const zero = document.getElementById('zero');
// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');
// const four = document.getElementById('four');
// const five = document.getElementById('five');
// const six = document.getElementById('six');
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');
// const nine = document.getElementById('nine');



// Number event listener functions
let numDisplayArray = [];
let secondNumDisplay = [];
mainDisplay.textContent = '0';
output.textContent = '0';

numBtns.forEach(btn => {
    btn.addEventListener('click', function handler() {
        if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
            numDisplayArray.push(btn.textContent);
            mainDisplay.textContent = btn.textContent
            output.textContent = btn.textContent
        } else if (mainDisplay.innerText.length === 18) {
            this.removeEventListener('click', handler)
        } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
            mainDisplay.textContent = '';
            secondNumDisplay.push(btn.textContent);
            mainDisplay.textContent += btn.textContent
            output.textContent += btn.textContent
        } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
            secondNumDisplay.push(btn.textContent);
            mainDisplay.textContent += btn.textContent
            output.textContent += btn.textContent
        } else {
            numDisplayArray.push(btn.textContent);
            mainDisplay.textContent += btn.textContent
            output.textContent += btn.textContent
        }
    })
})

// Operator event listener functions
let operatorArray = [];

add.addEventListener('click', () => {
    if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
        operatorArray.splice(0, 1, '+');
        let str = output.textContent;
        str.split(' ')
        let newStr = str.slice(0, -3)
        output.textContent = newStr
        output.textContent += ' + ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    } else {
        operatorArray.push('+');
        output.textContent += ' + ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    }
})
subtract.addEventListener('click', () => {
    if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
        operatorArray.splice(0, 1, '-');
        let str = output.textContent;
        str.split(' ')
        let newStr = str.slice(0, -3)
        output.textContent = newStr
        output.textContent += ' - ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    } else {
        operatorArray.push('-');
        output.textContent += ' - ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    }
})
multiply.addEventListener('click', () => {
    if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
        operatorArray.splice(0, 1, '*');
        let str = output.textContent;
        str.split(' ')
        let newStr = str.slice(0, -3)
        output.textContent = newStr
        output.textContent += ' x ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    } else {
        operatorArray.push('*')
        output.textContent += ' x ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    }
})
divide.addEventListener('click', () => {
    if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
        operatorArray.splice(0, 1, '/');
        let str = output.textContent;
        str.split(' ')
        let newStr = str.slice(0, -3)
        output.textContent = newStr
        output.textContent += ' / ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    } else {
        operatorArray.push('/')
        output.textContent += ' / ';
        //numDisplayArray = numDisplayArray.concat(operatorArray)
    }
})

// // COME BACK
// deleteBtn.addEventListener('click', () => {
//     if (secondNumDisplay !== 0) {
//         secondNumDisplay.pop();
//         mainDisplay.textContent.slice(0, -1);
//         output.textContent.slice(0, -1)
//     } else if (numDisplayArray.length !== 0 && operatorArray.length !== 0) {
//         operatorArray.pop();
//         mainDisplay.textContent.slice(0, -1);
//         output.textContent.slice(0, -1)
//     } else if (numDisplayArray.length !== 0 && operatorArray.length === 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent.slice(0, -1);
//         output.textContent.slice(0, -1)
//     }
// })




let result;
equals.addEventListener('click', () => {
    let firstNum = '';
    let secondNum = '';
    let operator;

    //numDisplayArray
    for (let i = 0; i < numDisplayArray.length; i++) {
        let num = numDisplayArray[i]
        firstNum += num
    }

    //operatorArray
    for (let i = 0; i < operatorArray.length; i++) {
        let op = operatorArray[i]
        operator = op
    }

    //secondNumDisplay
    for (let i = 0; i < secondNumDisplay.length; i++) {
        let num2 = secondNumDisplay[i]
        secondNum += num2
    }

    function equation(num1, num2, operation) {
        switch (operation) {
            case '+':
                return Number(num1) + Number(num2);
            case '-':
                return Number(num1) - Number(num2);
            case '*':
                return Number(num1) * Number(num2);
            case '/':
                return Number(num1) / Number(num2)
        }
    }

    result = mainDisplay.textContent = equation(firstNum, secondNum, operator)
    return result

})

equals.onclick = function () {
    numDisplayArray = []
    numDisplayArray.push(result)
    secondNumDisplay = [];
    operatorArray = [];
    //output.textContent += ` = ${result}`
}

// Clear button click function
clear.addEventListener('click', () => {
    mainDisplay.textContent = '0';
    output.textContent = '0';
    numDisplayArray = [];
    secondNumDisplay = [];
    operatorArray = [];
})
































// zero.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else {
//         numDisplayArray.push(0)
//         mainDisplay.textContent += '0'
//         output.textContent += '0';
//     }
// })
// one.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(1);
//         mainDisplay.textContent = '1'
//         output.textContent = '1'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(1);
//         mainDisplay.textContent += '1'
//         output.textContent += '1'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(1);
//         mainDisplay.textContent += '1'
//         output.textContent += '1'
//     } else {
//         numDisplayArray.push(1);
//         mainDisplay.textContent += '1'
//         output.textContent += '1'
//     }
// })
// two.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(2)
//         mainDisplay.textContent = '2'
//         output.textContent = '2'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(2);
//         mainDisplay.textContent += '2'
//         output.textContent += '2'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(1);
//         mainDisplay.textContent += '2'
//         output.textContent += '2'
//     } else {
//         numDisplayArray.push(2)
//         mainDisplay.textContent += '2'
//         output.textContent += '2'
//     }
// })
// three.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(3)
//         mainDisplay.textContent = '3'
//         output.textContent = '3'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(3);
//         mainDisplay.textContent += '3'
//         output.textContent += '3'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(3);
//         mainDisplay.textContent += '3'
//         output.textContent += '3'
//     } else {
//         numDisplayArray.push(3)
//         mainDisplay.textContent += '3'
//         output.textContent += '3'
//     }
// })
// four.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(4)
//         mainDisplay.textContent = '4'
//         output.textContent = '4'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(4);
//         mainDisplay.textContent += '4'
//         output.textContent += '4'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(4);
//         mainDisplay.textContent += '4'
//         output.textContent += '4'
//     } else {
//         numDisplayArray.push(4)
//         mainDisplay.textContent += '4'
//         output.textContent += '4'
//     }
// })
// five.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(5)
//         mainDisplay.textContent = '5'
//         output.textContent = '5'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(5);
//         mainDisplay.textContent += '5'
//         output.textContent += '5'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(5);
//         mainDisplay.textContent += '5'
//         output.textContent += '5'
//     } else {
//         numDisplayArray.push(5)
//         mainDisplay.textContent += '5'
//         output.textContent += '5'
//     }
// })
// six.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(6)
//         mainDisplay.textContent = '6'
//         output.textContent = '6'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(6);
//         mainDisplay.textContent += '6'
//         output.textContent += '6'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(6);
//         mainDisplay.textContent += '6'
//         output.textContent += '6'
//     } else {
//         numDisplayArray.push(6)
//         mainDisplay.textContent += '6'
//         output.textContent += '6'
//     }
// })
// seven.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(7)
//         mainDisplay.textContent = '7'
//         output.textContent = '7'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(7);
//         mainDisplay.textContent += '7'
//         output.textContent += '7'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(7);
//         mainDisplay.textContent += '7'
//         output.textContent += '7'
//     } else {
//         numDisplayArray.push(7)
//         mainDisplay.textContent += '7'
//         output.textContent += '7'
//     }
// })
// eight.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(8)
//         mainDisplay.textContent = '8'
//         output.textContent = '8'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(8);
//         mainDisplay.textContent += '8'
//         output.textContent += '8'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(8);
//         mainDisplay.textContent += '8'
//         output.textContent += '8'
//     } else {
//         numDisplayArray.push(8)
//         mainDisplay.textContent += '8'
//         output.textContent += '8'
//     }
// })
// nine.addEventListener('click', function handler() {
//     if (mainDisplay.innerText.length === 1 && mainDisplay.textContent === '0') {
//         numDisplayArray.push(9)
//         mainDisplay.textContent = '9'
//         output.textContent = '9'
//     } else if (mainDisplay.innerText.length === 18) {
//         this.removeEventListener('click', handler)
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length === 0) {
//         mainDisplay.textContent = '';
//         secondNumDisplay.push(9);
//         mainDisplay.textContent += '9'
//         output.textContent += '9'
//     } else if (operatorArray.length !== 0 && secondNumDisplay.length > 0) {
//         secondNumDisplay.push(9);
//         mainDisplay.textContent += '9'
//         output.textContent += '9'
//     } else {
//         numDisplayArray.push(9)
//         mainDisplay.textContent += '9'
//         output.textContent += '9'
//     }
// })

// // Operator event listener functions
// let operatorArray = [];

// add.addEventListener('click', () => {
//     if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
//         operatorArray.splice(0, 1, '+');
//         let str = output.textContent;
//         str.split(' ')
//         let newStr = str.slice(0, -3)
//         output.textContent = newStr
//         output.textContent += ' + ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     } else {
//         operatorArray.push('+');
//         output.textContent += ' + ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     }
// })
// subtract.addEventListener('click', () => {
//     if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
//         operatorArray.splice(0, 1, '-');
//         let str = output.textContent;
//         str.split(' ')
//         let newStr = str.slice(0, -3)
//         output.textContent = newStr
//         output.textContent += ' - ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     } else {
//         operatorArray.push('-');
//         output.textContent += ' - ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     }
// })
// multiply.addEventListener('click', () => {
//     if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
//         operatorArray.splice(0, 1, '*');
//         let str = output.textContent;
//         str.split(' ')
//         let newStr = str.slice(0, -3)
//         output.textContent = newStr
//         output.textContent += ' x ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     } else {
//         operatorArray.push('*')
//         output.textContent += ' x ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     }
// })
// divide.addEventListener('click', () => {
//     if (operatorArray.includes('+') || operatorArray.includes('-') || operatorArray.includes('*') || operatorArray.includes('/')) {
//         operatorArray.splice(0, 1, '/');
//         let str = output.textContent;
//         str.split(' ')
//         let newStr = str.slice(0, -3)
//         output.textContent = newStr
//         output.textContent += ' / ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     } else {
//         operatorArray.push('/')
//         output.textContent += ' / ';
//         //numDisplayArray = numDisplayArray.concat(operatorArray)
//     }
// })

// let result;
// equals.addEventListener('click', () => {
//     let firstNum = '';
//     let secondNum = '';
//     let operator;

//     //numDisplayArray
//     for (let i = 0; i < numDisplayArray.length; i++) {
//         let num = numDisplayArray[i]
//         firstNum += num
//     }

//     //operatorArray
//     for (let i = 0; i < operatorArray.length; i++) {
//         let op = operatorArray[i]
//         operator = op
//     }

//     //secondNumDisplay
//     for (let i = 0; i < secondNumDisplay.length; i++) {
//         let num2 = secondNumDisplay[i]
//         secondNum += num2
//     }

//     function equation(num1, num2, operation) {
//         switch (operation) {
//             case '+':
//                 return Number(num1) + Number(num2);
//             case '-':
//                 return Number(num1) - Number(num2);
//             case '*':
//                 return Number(num1) * Number(num2);
//             case '/':
//                 return Number(num1) / Number(num2)
//         }
//     }

//     result = mainDisplay.textContent = equation(firstNum, secondNum, operator)
//     return result

// })

// equals.onclick = function () {
//     numDisplayArray = []
//     numDisplayArray.push(result)
//     secondNumDisplay = [];
//     operatorArray = [];
// }



// // // Clear button click function
// clear.addEventListener('click', () => {
//     mainDisplay.textContent = '0';
//     output.textContent = '0';
//     numDisplayArray = [];
//     secondNumDisplay = [];
//     operatorArray = [];
// })




// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case '+': return num1 + num2
//         case '-': return num1 - num2
//         case '*': return num1 * num2
//         case '/': return num1 / num2
//         case '%': return num1 % num2
//     }
// }





// const num1Box = document.getElementById("num1");
// const num2Box = document.getElementById("num2");
// const opBox = document.getElementById("op");
// const resultArea = document.getElementById("result");

// document.getElementById("calculate").addEventListener("click", () => {
//   const x = Number(num1Box.value);
//   const y = Number(num2Box.value);
//   const op = opBox.value;
//   resultArea.innerHTML = `Result: ${calculate(x, y, op)}`;
// });




// numBtns.onclick = function () {
//     let numDisplayArray = [];
//     numBtns.forEach(btn => {
//         numDisplayArray.push(btn)
//     })
//     console.log(numDisplayArray)
// }




// // Function for input display for click events
//const clickNums = function (num1, num2) {
//
//}


// let firstNumber;
// let secondNumber;
// let number = false;
// let valEntered = false;


// // Loop through number buttons and add it's value to the display for first number variable
// function firstNum() {
//     numBtns.forEach(num => {
//         let handler = function (e) {
//             let str = display.textContent;
//             display.textContent = str.replace(/^0+/, '');

//             if (valEntered) {
//                 firstNumber = display.e.target.value;
//             } else {
//                 firstNumber = display.textContent += num.value;
//             }
//             let numText = parseInt(firstNumber);
//             console.log(numText);
//         }
//         firstNumber = num.addEventListener('click', handler);
//     })
// }

// function secondNum() {
//     numBtns.forEach(num => {
//         let handler = function (e) {
//             let str = display.textContent;
//             display.textContent = str.replace(/^0+/, '');

//             if (valEntered) {
//                 secondNumber = display.e.target.value;
//             } else {
//                 secondNumber = display.textContent += num.value;
//             }
//             let numText = parseInt(secondNumber);
//             console.log(numText);
//         }
//         secondNumber = num.addEventListener('click', handler);
//     })
// }

// function appendOperator() {
//     operatorBtns.forEach(operator => {
//         let operatorHandler = function (e) {
//             let operator = e.target.value;
//             display.append(operator);
//             console.log(operator)
//         }
//         operator.addEventListener('click', operatorHandler)
//     })
// }

// let numDisplay;
// let valEntered = false;

// function displayNum() {
//     numBtns.forEach(num => {
//         let handler = function (e) {
//             let str = display.textContent;
//             display.textContent = str.replace(/^0+/, '');

//             if (valEntered) {
//                 numDisplay = display.e.target.value;
//             } else {
//                 numDisplay = display.textContent += num.value;
//             }
//             let numText = parseInt(numDisplay);
//             console.log(numText);
//         }
//         numDisplay = num.addEventListener('click', handler);
//     })
// }
// displayNum();




// function operate(operator, a, b) {
//     if (operator === add) {
//         return addition(a, b);
//     } else if (operator === subtract) {
//         return subtraction(a, b);
//     } else if (operator === multiply) {
//         return multiplication(a, b);
//     } else if (operator === divide) {
//         if (b === 0) {
//             return null
//         } else {
//             return division(a, b);
//         }
//     }
// }

// // Operator functions
// function addition(a, b) {
//     return a + b;
// }
// function subtraction(a, b) {
//     return a - b
// }
// function multiplication(a, b) {
//     return a * b
// }
// function division(a, b) {
//     return a / b;
// }











// function operate(operator, a, b) {
//     switch (operator) {
//         case '+':
//             return addition(a, b);
//         case '-':
//             return subtraction(a, b);
//         case 'x':
//             return multiplication(a, b);
//         case '/':
//             if (b === 0) return null;
//             else return division(a, b);
//         default:
//             return null;
//     }
// }


// $('.num-btn').on('click', function () {
//     let i = $(this).text();
//     let firstNum = $('#display').text($('#display').text().replace('0', i));
//     firstNum;
// });




// // jQuery
// $('.num-btn').each(function () {
//     $(this).click(function () {
//         let i = $(this).text();
//         $('#display').text($('#display').text().replace('0', i));
//         $('#display').append(i);

//     })
// })





// // Operator buttons click listener
// operators.forEach(operator => {
//     operator.addEventListener('click', () => )
// })

// function setOperation() {

// }
// function resetScreen() {
//     display.textContent = '';
// }


// const display = document.getElementById('display');
// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]');

// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.clear();
//     }
// }

// clear() {
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operation = undefined;

//     const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
// }

// delete () {

// }

// appendNumber(number) {

// }

// chooseOperation(operation) {

// }

// getComputedStyle() {

// }

// updateDisplay() {

// }
