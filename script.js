

let firstNumber = 0;
let secondNumber = 0;
let operator;
let result;
let processStage = "initialStage";

const inputField = document.getElementById('screen');
    
document.querySelectorAll('.numbers button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the data-value from the clicked button
        const buttonValue = this.getAttribute('data-value');

        
        

        if (processStage == "initialStage"){
        inputField.value += buttonValue;    // Append the value to the input field
        firstNumber = parseInt(inputField.value);
        } else if (processStage == "operateStage"){
        inputField.value = "";
        inputField.value += buttonValue;
        processStage = "secondStage";
        } else if (processStage == "secondStage"){
        inputField.value += buttonValue;
        secondNumber = parseInt(inputField.value);
        }
        
        
        
    });
});

//Operator buttons
document.querySelectorAll('.operator-btn').forEach(button => {
    button.addEventListener('click', function() {
        const operatorValue = this.getAttribute('data-value');
        operator = operatorValue;
        inputField.value += operator;
        processStage = "operateStage";
        
    
    });

})

//Equals button

const equals = document.getElementById('=');
  
    equals.addEventListener('click', function() {
    operate(operator);
    inputField.value = result;
    firstNumber = result;

    });

    

//error message

function error(){
    inputField.value = "error";
}

//ADD FUNCTION add number 1 and number 2. Triggered if operator == + when they hit equal. Same code for other operators.

function addition(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

//Function which processes operations.


function operate(operator){

    if (operator == "+"){
        result = addition(firstNumber, secondNumber);
    } else if (operator == "-"){
        result = subtraction(firstNumber, secondNumber);
    } else if (operator == "*"){
        result = multiplication(firstNumber, secondNumber);
    } else if (operator == "/"){
        result = division(firstNumber, secondNumber);
    } 

}

