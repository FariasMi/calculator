var operator;
var firstOperand;
var secondOperand;

const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator]');
const btnEqual = document.querySelector('[data-equals]');
const btnDelete = document.querySelector('[data-delete]');
const btnClear = document.querySelector('[data-clear]');
const currentDisplay = document.getElementById('current-display');
const oldDisplay =  document.getElementById('old-display');



btnNumbers.forEach(btn => btn.addEventListener('click',()=>{
    appendNumbers (btn.innerText);
    
}));

btnOperators.forEach(btn => btn.addEventListener('click',()=>{
    operator = btn.innerText;
    chooseOperator();
}));
  


function appendNumbers(btnNumber){
    let number = currentDisplay.textContent;
    if(number.includes('.') && btnNumber==='.') return;
    firstOperand = number + btnNumber;
    currentDisplay.innerHTML = firstOperand.toString();  
        
}

function chooseOperator(){
  if (firstOperand === '') return;
  if(secondOperand !== ''){
      operate();
  }
  
  secondOperand = firstOperand;
  firstOperand = '';
  updateDisplay();
}

function clear(){
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
   
}

function del(){
    currentDisplay.innerHTML = firstOperand.slice(0,-1);
    firstOperand = currentDisplay.innerText;
}

function updateDisplay(){
   currentDisplay.innerHTML = firstOperand;
   oldDisplay.innerHTML = secondOperand;
}

function operate(){
    let computation;
    const prevNumber = parseFloat(secondOperand);
    const currentNumber = parseFloat(firstOperand);
 
    if (operator === '') return;
    if(isNaN(prevNumber) || isNaN(currentNumber))return;


    switch(operator){
        case '+':
            computation = prevNumber + currentNumber;
            break;
        case '-':
            computation = prevNumber - currentNumber;
            break;
        case 'x' :
            computation = prevNumber * currentNumber;
            break;
        case'÷':
            computation = prevNumber / currentNumber;
            break
        default:
            return;


    }
    console.log(computation);
    currentDisplay.innerHTML = computation.toString();
    operator = '';
    oldDisplay.innerHTML = '';


}
btnEqual.addEventListener('click',operate);
btnClear.addEventListener('click',clear);
btnDelete.addEventListener('click',del);

