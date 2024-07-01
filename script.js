//FUNCTIONS

function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num2 == 0? "Error, can not divide by 0" : num1/num2;
}

function operate(operator,num1,num2){
    switch(operator){
        case "+":
            return add(num1,num2)
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        default:
            return null;
    }
}

//VARIABLES

let num1,num2,operator = null,displayValue;


//DOM MANIPULATION


