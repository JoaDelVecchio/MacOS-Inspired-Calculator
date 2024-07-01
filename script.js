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

function displayOperation(){
    displayValue.textContent = num1 + operator +num2 ;
}

//VARIABLES

let num1='',
    num2='',
    operator ='',
    displayValue='';


//DOM MANIPULATION

// displayValue = document.querySelector("#displayValue");
// const NumButtons = document.querySelectorAll(".numbersContainer button")
// NumButtons.forEach(button => {
//     button.addEventListener("click",()=>{
//         if (operator == ''){
//             num1 += button.textContent;
//         }else if (operator != ''){
//             num2 += button.textContent;
//         }
//         displayOperation();
//     });
// });

// const opsButtons = document.querySelectorAll("#operationsButtons button");
// opsButtons.forEach((button)=>button.addEventListener("click",()=>{
//     if (button.textContent != "="){
//         operator = button.textContent;
//         displayOperation();
//     }else{
//         displayValue.textContent = operate(operator,num1,num2);
//     }
// }));

const operators = ['+','-','*','/','='];
const numbers = [0,1,2,3,4,5,6,7,8,9,'.'];
const functionality = ['R','C','%'];

displayValue = document.querySelector("#displayValue");
const Buttons = document.querySelectorAll("button")
Buttons.forEach(button => {
    button.addEventListener("click",()=>{
        if (numbers.includes(parseInt(button.textContent))){
            if (operator == ''){
                num1 += button.textContent;
            }else if (operator != ''){
                num2 += button.textContent;
            }
            displayOperation();
        }else if(operators.includes(button.textContent)){
                if (button.textContent != "="){
                    operator = button.textContent;
                    displayOperation();
                }else{
                    displayValue.textContent = operate(operator,num1,num2);
                }
        }
    });
});

