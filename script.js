// FUNCTIONS

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 == 0 ? "Error, you can't divide by 0" : num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
}

function displayOperation() {
  if (result !== "") {
    displayValue.textContent = result;
  } else {
    displayValue.textContent = num1 + operator + num2;
  }
}

// VARIABLES

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";
let result = "";
let lastOperator = "";
let lastNum2 = "";

const operators = ["+", "-", "*", "/", "="];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const functionality = ["R", "C", "%"];

// DOM MANIPULATION

document.addEventListener("DOMContentLoaded", () => {
  displayValue = document.querySelector("#displayValue");

  const Buttons = document.querySelectorAll("button");
  Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Handle number button clicks
      if (numbers.includes(button.textContent)) {
        if (operator == "") {
          if (result !== "" || displayValue.textContent === "NaN") {
            // Reset num1 and result to start a new operation after displaying a result or NaN
            num1 = button.textContent;
            result = "";
            displayValue.textContent = num1;
          } else {
            num1 += button.textContent;
          }
        } else {
          num2 += button.textContent;
        }
        displayOperation();

        // Handle operator button clicks
      } else if (operators.includes(button.textContent)) {
        if (button.textContent != "=") {
          if (result !== "") {
            // Use the result as num1 to start a new operation with the current result
            num1 = result.toString();
            operator = button.textContent;
            num2 = "";
            result = "";
          } else if (num2 !== "") {
            // Calculate the result if the second number is not empty, and prepare for the next operation
            result = operate(operator, parseFloat(num1), parseFloat(num2));
            displayValue.textContent = result;
            num1 = result.toString();
            num2 = "";
            operator = button.textContent;
            result = "";
          } else {
            operator = button.textContent;
          }
          displayOperation();
        } else {
          if (num2 === "" && result !== "") {
            // If num2 is empty but a result exists, reuse the last second number for repeated operations
            num2 = lastNum2;
          }
          // Perform the operation with the last operator and num2 to support repeated equals presses
          result = operate(
            operator || lastOperator,
            parseFloat(num1),
            parseFloat(num2)
          );
          displayValue.textContent = result;
          num1 = result.toString();
          lastOperator = operator || lastOperator; // Store the last operator for repeated operations
          lastNum2 = num2; // Store the last second number for repeated operations
          num2 = "";
          operator = "";
        }

        // Handle functionality button clicks
      } else if (functionality.includes(button.textContent)) {
        switch (button.textContent) {
          case "R":
            // Remove last character based on the current state
            if (operator === "") {
              num1 = num1.slice(0, -1);
            } else if (num2 !== "") {
              num2 = num2.slice(0, -1);
            } else {
              operator = "";
            }
            result = ""; // Ensure result is reset so displayOperation works correctly
            displayOperation();
            break;

          case "C":
            // Clear all values and reset the display for a fresh start
            num1 = "";
            num2 = "";
            operator = "";
            result = "";
            lastOperator = "";
            lastNum2 = "";
            displayOperation();
            break;

          case "%":
            // Convert the current number or result to a percentage for percentage-based calculations
            if (result !== "") {
              result = (parseFloat(result) / 100).toString();
              displayValue.textContent = result;
            } else if (operator === "") {
              num1 = (parseFloat(num1) / 100).toString();
              displayOperation();
            } else if (num2 !== "") {
              num2 = (parseFloat(num2) / 100).toString();
              displayOperation();
            }
            break;
        }
      }
    });
  });
});
