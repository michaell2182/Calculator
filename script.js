let currentInput = "";
let currentOperator = "";
let firstOperand = "";
let secondOperand = "";

function appendToDisplay(value) {
    document.getElementById("calculation").value += value;
}

function updateDisplay() {
    document.getElementById("calculation").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("calculation").value = "";
    document.getElementById("result").value = "";
}

function deleteLastInput() {
    const calculationField = document.getElementById("calculation");
    const currentInput = calculationField.value;

    // Check if there is any input to delete
    if (currentInput.length > 0) {
        // Remove the last character from the input
        const updatedInput = currentInput.slice(0, -1);
        calculationField.value = updatedInput;
    }
    
    // Prevent the default button behavior
    return false;
}

function appendToCalculation(value) {
    currentInput += value;
    updateDisplay();
}

function calculateResult() {
    if (currentInput && currentOperator) {
        let result;
        try {
            result = eval(currentInput); // Use JavaScript's built-in eval function for calculations.
        } catch (error) {
            result = "Error";
        }

        document.getElementById("result").value = result;
        currentInput = result.toString();
        updateDisplay();

        firstOperand = result;
        currentOperator = "";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("mousedown", () => {
            if (!isNaN(button.textContent) || button.textContent === ".") {
                currentInput += button.textContent;
                updateDisplay();
            } else if (button.textContent === "=") {
                calculateResult();
            } else {
                currentInput += button.textContent;
                currentOperator = button.textContent;
                updateDisplay();
            }
        });
    });
});
