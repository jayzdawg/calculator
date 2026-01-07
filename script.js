

let firstNumber;
let secondNumber;
let operator;
let result;
let processStage = "stageOne";
let clearScreen = false;

//stageOne is the initial stage of the calculator where the operator is not selected and the first number data is being collected.
//stageTwo means the operator has been selected and the second number data is being collected.

const inputField = document.getElementById('screen');
    
document.querySelectorAll('.numbers button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the data-value from the clicked button
        const buttonValue = this.getAttribute('data-value');

        if (clearScreen == true){
        inputField.value = "";
        clearScreen = false;    
        } 

        inputField.value += buttonValue;    // Append the value to the input field
        
    });
});

// If the operator is has not been selected, it will save as 

//Operator buttons
document.querySelectorAll('.operator-btn').forEach(button => {
    button.addEventListener('click', function() {

        const operatorValue = this.getAttribute('data-value');
     
        if (processStage == "stageOne"){
        firstNumber = parseFloat(inputField.value);
        operator = operatorValue;
        clearScreen = true;
        processStage = "stageTwo";
        } else if (processStage == "stageTwo"){
        secondNumber = parseFloat(inputField.value);
        clearScreen = true;
        operate(operator);
        operator = operatorValue;
        inputField.value = result;
        firstNumber = result;
        }

    });

})

//Equals button

const equals = document.getElementById('=');
  
    equals.addEventListener('click', function() {
     if (operator == null || secondNumber == null){
        error();
    }
    secondNumber = parseFloat(inputField.value);
    operate(operator);
    inputField.value = result;
    firstNumber = result;
    processStage = "stageOne";
    });


const clearButton = document.getElementById('butt ac');    
    clearButton.addEventListener('click', function() {
    reset();
      });


//error message

function error(){
    inputField.value = "excuse me?";
}

function reset(){
    inputField.value = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    processStage = "stageOne";
    result = null;
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

