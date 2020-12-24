// Global Variables
    // Responsible for the calculators input field display area
    let displayNumber = ''
    let calculationNumber = ''

// Selectors
    // Button Selectors
    const buttonClear = document.querySelector('#button1')
    const plusMinus = document.querySelector('#button2')
    const percent = document.querySelector('#button3')
    const divide = document.querySelector('#button4')
    const seven = document.querySelector('#button5')
    const eight = document.querySelector('#button6')
    const nine = document.querySelector('#button7')
    const multiply = document.querySelector('#button8')
    const four = document.querySelector('#button9')
    const five = document.querySelector('#button10')
    const six = document.querySelector('#button11')
    const minus = document.querySelector('#button12')
    const one = document.querySelector('#button13')
    const two = document.querySelector('#button14')
    const three = document.querySelector('#button15')
    const plus = document.querySelector('#button16')
    const zero = document.querySelector('#button17')
    const decimal = document.querySelector('#button18')
    const del = document.querySelector('#button19')
    const equals = document.querySelector('#button20')
    // display Selectors
    const inputField = document.getElementById('inputSpan')
    const calculationField = document.getElementById('calculationSpan')


// Event Listeners
one.addEventListener('click',   function() {
                                    addToDisplay('1');
                                } )
two.addEventListener('click',   function() {
                                    addToDisplay('2');
                                } )
three.addEventListener('click',   function() {
                                    addToDisplay('3');
                                } )
four.addEventListener('click',   function() {
                                    addToDisplay('4');
                                } )
five.addEventListener('click',   function() {
                                    addToDisplay('5');
                                } )
six.addEventListener('click',   function() {
                                    addToDisplay('6');
                                } )
seven.addEventListener('click',   function() {
                                    addToDisplay('7');
                                } )
eight.addEventListener('click',   function() {
                                    addToDisplay('8');
                                } )
nine.addEventListener('click',   function() {
                                    addToDisplay('9');
                                } )
zero.addEventListener('click',   function() {
                                    addToDisplay('0');
                                } )
decimal.addEventListener('click',   function() {
                                    addToDisplay('.');
                                } )
del.addEventListener('click',   function() {
                                    backspace();
                                } )
plus.addEventListener('click',   function() {
                                    addition();
                                } )
minus.addEventListener('click',   function() {
                                    subtraction();
                                } )
multiply.addEventListener('click',   function() {
                                    multiplication();
                                } )
divide.addEventListener('click',   function() {
                                    division();
                                } )
buttonClear.addEventListener('click',   function() {
                                    clearMemory();
                                } )
plusMinus.addEventListener('click',   function() {
                                    switchPositiveNegativeState();
                                } )
equals.addEventListener('click',   function() {
                                    calculateResult();
                                } )

                                
// Functions
// Adds numbers to displayNumber Variable as string so it concatenates
function addToDisplay(number) {
    /* If (displayNumber == Anything but an empty string ''
        aka - numbers have already been input) */
    if (displayNumber != '') {
        displayNumber += number;
        inputField.textContent = displayNumber;
    } else { 
        displayNumber = number;
        inputField.textContent = number;
    }

}

function backspace() {
    const newDisplayNumber = displayNumber.slice(0,-1)
    displayNumber = newDisplayNumber;
    inputField.textContent = displayNumber
}

function addition() {
    if (calculationNumber == '') {
        calculationNumber = displayNumber + ' ' + '+'
        calculationField.textContent = calculationNumber
        inputField.textContent = ''
        displayNumber = ''
    } else {
        calculationNumber = calculationNumber + ' ' + displayNumber + ' ' + '+'
        calculationField.textContent = calculationNumber
        inputField.textContent = ''
        displayNumber = ''
    }
}

function subtraction() {
    if (displayNumber == '') {
        displayNumber = '-'
        inputField.textContent = '-'
    } else {
        if (calculationNumber == '') {
            calculationNumber = displayNumber + ' ' + '-'
            calculationField.textContent = calculationNumber
            inputField.textContent = ''
            displayNumber = ''
        } else {
            calculationNumber = calculationNumber + ' ' + displayNumber + ' ' + '-'
            calculationField.textContent = calculationNumber
            inputField.textContent = ''
            displayNumber = ''
        }
    }
}

function multiplication() {
    if (calculationNumber == '') {
        calculationNumber = displayNumber + ' ' + '*'
        calculationField.textContent = calculationNumber
        inputField.textContent = ''
        displayNumber = ''
    } else {
        calculationNumber = calculationNumber + ' ' + displayNumber + ' ' + '*'
        calculationField.textContent = calculationNumber
        inputField.textContent = ''
        displayNumber = ''
    }
}

function division() {
    if (calculationNumber == '') {
        calculationNumber = displayNumber + ' ' + '/'
        calculationField.textContent = calculationNumber
        inputField.textContent = ''
        displayNumber = ''
    } else {
        calculationNumber = calculationNumber + ' ' + displayNumber + ' ' + '/'
        calculationField.textContent = calculationNumber
        inputField.textContent = ''
        displayNumber = ''
    }
}

function clearMemory() {
    displayNumber = ''
    calculationNumber = ''
    inputField.textContent = ''
    calculationField.textContent = ''
}


function switchPositiveNegativeState() {
    if (displayNumber.includes('-')) {
        const newDisplayNumber = displayNumber.slice(1)
        displayNumber = newDisplayNumber
        inputField.textContent = displayNumber
    } else {
        displayNumber = '-' + displayNumber
        inputField.textContent = displayNumber
    }
}

function calculateResult() {
    calculationNumber = calculationNumber + ' ' + displayNumber
    displayNumber = ''
    inputField.textContent = ''
    calculationField.textContent = calculationNumber
    let result = eval(calculationNumber)
    calculationNumber = calculationNumber + ' ' + '=' + ' ' + result
    calculationField.textContent = calculationNumber
}

