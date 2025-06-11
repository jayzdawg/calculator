



//Pseudocode

//Number 1 and Number 2
let firstNumber;
let secondNumber;
let operator;

//ADD FUNCTION add number 1 and number 2. Triggered if operator == + when they hit equal. Same code for other operators.

function addition(firstNumber, secondNumber){
    return firstNumber + secondNumber;

}

function subtration(firstNumber, secondNumber){
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

    if (operator === "+"){
        return addition(firstNumber, secondNumber);
    } else if (operator === "-"){
        return subtration(firstNumber, secondNumber);
    } else if (operator === "*"){
        return multiplication(firstNumber, secondNumber);
    } else if (operator === "/"){
        return division(firstNumber, secondNumber);
    } 

}
    
