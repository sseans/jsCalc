let displayNumber = '';

// Selectors
    // Button Selectors
    const buttonClear = document.querySelector('#button1');
    const plusMinus = document.querySelector('#button2');
    const percent = document.querySelector('#button3');
    const divide = document.querySelector('#button4');
    const seven = document.querySelector('#button5');
    const eight = document.querySelector('#button6');
    const nine = document.querySelector('#button7');
    const multiply = document.querySelector('#button8');
    const four = document.querySelector('#button9');
    const five = document.querySelector('#button10');
    const six = document.querySelector('#button11');
    const minus = document.querySelector('#button12');
    const one = document.querySelector('#button13');
    const two = document.querySelector('#button14');
    const three = document.querySelector('#button15');
    const plus = document.querySelector('#button16');
    const zero = document.querySelector('#button17');
    const decimal = document.querySelector('#button18');
    const del = document.querySelector('#button19');
    const equals = document.querySelector('#button20');
    // display Selectors
    


// Event Listeners
equals.addEventListener('click', calculateResult);
one.addEventListener('click',   function() {
                                    addToDisplay('1');
                                } );
two.addEventListener('click',   function() {
                                    addToDisplay('2');
                                } );
                                
// Functions

// Adds numbers to displayNumber Variable as string so it concatenates
function addToDisplay(number) {
    // Assign input element to 
    const inputField = document.getElementById('inputSpan');
    
    if (displayNumber != '') {
        displayNumber += number;
        inputField.textContent = displayNumber;
    } else { 
        displayNumber = number;
        inputField.textContent = number;
    }

}




function calculateResult() {

}