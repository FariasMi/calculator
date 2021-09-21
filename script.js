var operator = '';
var firstOperand ='';
var secondOperand = '';

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
    updateDisplay();
    preOperate();
     
  
}));
  


function appendNumbers(btnNumber){
    let number = currentDisplay.textContent;
    if(number.includes('.') && btnNumber==='.') return;
    if(operator != ''){
        secondOperand = firstOperand;
        firstOperand = '';
    }
        firstOperand = number + btnNumber;  
   
    updateDisplay();  
}

   

function clear(){
    firstOperand = '';
    secondOperand = '';
    operator = '';
    updateDisplay();
   
}

function del(){
   firstOperand = firstOperand.slice(0,-1);
   currentDisplay.innerHTML = firstOperand;
   

}

function updateDisplay(){
    currentDisplay.innerHTML= firstOperand;
     if(operator!== ''){
     return oldDisplay.innerHTML= `${firstOperand} ${operator}`;
    }
    oldDisplay.innerHTML = secondOperand;
   
}

function preOperate(){
    if(firstOperand === '') return;
        operate();
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
    firstOperand = computation;
    secondOperand = '';
    operator ='';
    updateDisplay();
}
btnEqual.addEventListener('click',operate);
btnClear.addEventListener('click',clear);
btnDelete.addEventListener('click',del);

