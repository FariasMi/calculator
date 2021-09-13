const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator');
const btnEqual = document.querySelector('[data-equals]');
const btnDelete = document.querySelector('[data-delete]');
const btnClear = document.querySelector('[data-clear]');
const currentDisplay = document.getElementById('current-display');
const oldDisplay =  document.getElementById('old-display');

btnNumbers.forEach(btn => btn.addEventListener('click',()=>{
    appendNumbers (btn.innerText);
    
}));

btnOperators.forEach(btn => btn.addEventListener('click',()=>{
    chooseOperator(btn.innerText);

}));
  

function appendNumbers(btnNumber){
    let number = currentDisplay.textContent;
    if(number.includes('.') && btnNumber==='.') return;
     number = number + btnNumber;
     currentDisplay.innerHTML = number;  
        
}

function chooseOperator(btnOperator){
    let operator = btnOperator;
    if(currentDisplay.innerText ==='')return;
    if(oldDisplay.innerText != ''){
       operate(operator);
    }
    oldDisplay.innerHTML = currentDisplay.innerText;
    currentDisplay.innerHTML = '';
}



function clear(){
    currentDisplay.innerHTML = '';
    oldDisplay.innerHTML = '';
 }

function del(){

}

function operate(operator){
    let computation;
    const oldNumber = oldDisplay.innerText;
    const currentNumber = currentDisplay.innerText;
    

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

btnEqual.addEventListener('click',operate);
btnClear.addEventListener('click',clear);

