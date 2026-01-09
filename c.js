// Get the display input element
let display = document.getElementById('display');

// Variable to keep track of the current input
let currentInput = '';

// Add event listener for buttons
let buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonText = button.innerText;

        // If it's an equal button, calculate the result
        if (buttonText === '=') {
            try {
                display.value = eval(currentInput);
                currentInput = display.value; // Store the result for further operations
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        }
        // If it's CE (clear button), reset the display
        else if (buttonText === 'CE') {
            currentInput = '';
            display.value = '';
        }
        // Otherwise, it's a number or operator, so add it to the current input
        else {
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});
