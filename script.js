

let firstNumber;
let secondNumber;
let operator;
let result;
let calculateStage = "1";
let clearScreen = false;

//stageOne is the initial stage of the calculator where the operator is not selected and the first number data is being collected.
//stageTwo means the operator has been selected and the second number data is being collected.

const inputField = document.getElementById('screen');
    
document.querySelectorAll('.number-btn').forEach(button => {
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
     
        handleOperator(operatorValue);

    });

})

//Handles the operator
function handleOperator(operatorValue){
            if (calculateStage == "1"){
        firstNumber = parseFloat(inputField.value);
        operator = operatorValue;
        clearScreen = true;
        calculateStage = "2";
        } else if (calculateStage == "2"){
        secondNumber = parseFloat(inputField.value);
        clearScreen = true;
            if ((operator == "/") && (secondNumber == 0)){
                error();
            }else{
                operate(operator, firstNumber, secondNumber);
                operator = operatorValue;
                inputField.value = result;
                firstNumber = result;
            }
        }
    
}

//Equals button

const equals = document.getElementById('=');
  
    equals.addEventListener('click', function() {
     if (operator == null){
        error();
    } else if ((operator == "/") && (secondNumber == 0)){
        error();
    }else{
    secondNumber = parseFloat(inputField.value);
    operate(operator, firstNumber, secondNumber);
    inputField.value = result;
    firstNumber = result;
    calculateStage = "1";
    }
    });



//Clear button
const clearButton = document.getElementById('buttAc');    
    clearButton.addEventListener('click', function() {
    reset();
      });

//Delete button
const delButton = document.getElementById('buttDel');    
    delButton.addEventListener('click', function() {
    inputField.value = inputField.value.slice(0, -1);
      });


//error message

function error(){
    inputField.value = "How dare you?";
}

//reset function for AC button

function reset(){
    inputField.value = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    calculateStage = "1";
    result = null;
}

//ADD FUNCTION add number 1 and number 2. Triggered if operator == + when they hit equal. Same code for other operators.

function addition(a, b){
    return a + b;
}
function subtraction(a, b){
    return a - b;
}
function multiplication(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}

//Function which processes operations.

function operate(operator, a, b){

    if (operator == "+"){
        result = addition(a, b);
    } else if (operator == "-"){
        result = subtraction(a, b);
    } else if (operator == "*"){
        result = multiplication(a, b);
    } else if (operator == "/"){
        result = division(a, b);
       }
    } 



