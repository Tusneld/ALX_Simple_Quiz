// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Div by Zero";
    }
    return number1 / number2;
}

// Helper function to get and parse input values
function getInputs() {
    // Get the value of the number input fields
    const number1String = document.getElementById('number1').value;
    const number2String = document.getElementById('number2').value;

    // Convert to floating-point numbers. Use || 0 to default to 0 for empty or invalid input.
    const number1 = parseFloat(number1String) || 0;
    const number2 = parseFloat(number2String) || 0;

    return { number1, number2 };
}

// Helper function to display the result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach Event Listeners
    
    // Addition
    document.getElementById('add').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = add(number1, number2);
        displayResult(result);
    });

    // Subtraction
    document.getElementById('subtract').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = subtract(number1, number2);
        displayResult(result);
    });

    // Multiplication
    document.getElementById('multiply').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = multiply(number1, number2);
        displayResult(result);
    });

    // Division
    document.getElementById('divide').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = divide(number1, number2);
        displayResult(result);
    });
});