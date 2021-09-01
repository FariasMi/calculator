const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator');
const btnEqual = document.querySelector('[data-equal');
const btnDelete = document.querySelector('[data-delete]');
const btnClear = document.querySelector('[data-clear]');
const currentDisplay = document.getElementById('current-display');
const oldDisplay =  document.getElementById('old-display');


function clear(){
    currentDisplay.innerHTML = '';
    oldDisplay.innerHTML = '';
    

}

function del(){

}

function getNumbers(){

}

function getOperators(){
    
}

function add(number1,number2){
    return number1+ number2;
}

function subtract(number1,number2){
    return number1-number2;
}

function multiply(number1,number2){
    return number1 * number2;

}

function divide (number1,number2){
    if(number1 === 0){
       return  alert('You can\'t divide by zero!!!!!');
    }
   return  number1 / number2;
}

function operate(operator,...numbers){


    switch(operator){
        case '+':
            add(...numbers);
        break;
        case '-':
            subtract(...numbers);
        break;
        case '*' :
            multiply(...numbers);
        break;
        case'/':
            divide(...numbers);


    }

}

calculator.addEventListener('click',getNumbers);
