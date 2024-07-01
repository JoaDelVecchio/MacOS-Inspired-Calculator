//FUNCTIONS

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
  return num2 == 0 ? "Error, can not divide by 0" : num1 / num2;
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
  displayValue.textContent = num1 + operator + num2;
}

//VARIABLES

let num1 = "",
  num2 = "",
  operator = "",
  displayValue = "";

//DOM MANIPULATION

const operators = ["+", "-", "*", "/", "="];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const functionality = ["R", "C", "%"];

displayValue = document.querySelector("#displayValue");
const Buttons = document.querySelectorAll("button");
Buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (numbers.includes(button.textContent)) {
      if (operator == "") {
        num1 += button.textContent;
      } else if (operator != "") {
        num2 += button.textContent;
      }
      displayOperation();
    } else if (operators.includes(button.textContent)) {
      if (button.textContent != "=") {
        operator = button.textContent;
        displayOperation();
      } else {
        let result = operate(operator, parseFloat(num1), parseFloat(num2));
        displayValue.textContent = result;
        num1 = result.toString();
        num2 = "";
        operator = "";
      }
    } else if (functionality.includes(button.textContent)) {
      switch (button.textContent) {
        case "R":
          if (operator === "") {
            num1 = num1.slice(0, -1);
          } else if (num2 !== "") {
            num2 = num2.slice(0, -1);
          } else {
            operator = "";
          }
          break;
        case "C":
          num1 = "";
          num2 = "";
          operator = "";
          break;
        case "%":
            return null;
          break;
      }
    }
    displayOperation();
  });
});
