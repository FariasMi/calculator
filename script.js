let firstOperand ='';
let secondOperand = '';
let currentOperator = '';
let operator = '';
let isComputation=false;

const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator]');
const btnEqual = document.querySelector('[data-equals]');
const btnDelete = document.querySelector('[data-delete]');
const btnClear = document.querySelector('[data-clear]');
const currentDisplay = document.getElementById('current-display');
const oldDisplay =  document.getElementById('old-display');
const calculator = document.getElementById('calculator');


btnNumbers.forEach(btn => btn.addEventListener('click',()=>{
    appendNumbers (btn.innerText);    
}));

btnOperators.forEach(btn => btn.addEventListener('click',()=>{
    operator = btn.innerText;
    if(currentOperator!=''){
        verifyOperands();
    }
    updateDisplay();
    preOperate();
     
  
}));
  
function appendNumbers(btnNumber){
    let number = currentDisplay.textContent;
    if(isComputation){
        number = '';
        isComputation=false;
    }
    if(number.includes('.') && btnNumber==='.') return;
    firstOperand = number+ btnNumber; 
    updateDisplay();
    
    
}

   

function clear(){
    firstOperand = '';
    secondOperand = '';
    operator = '';
    updateDisplay();
   
}

function del(){
   if(firstOperand === '') return;
   firstOperand = firstOperand.slice(0,-1);
   currentDisplay.innerHTML = firstOperand;
   

}

function updateDisplay(){
    currentDisplay.innerHTML= firstOperand;
     if(operator!== '' && secondOperand!==''){         
        return oldDisplay.innerHTML= `${secondOperand} ${operator}`;
    }
    oldDisplay.innerHTML = secondOperand;
   
}

function preOperate(){
    if(firstOperand === '')return;
    currentOperator = operator;
    secondOperand = firstOperand;
    firstOperand = '';
    updateDisplay();
       
}

function verifyOperands(){
   if(firstOperand!=='' && secondOperand !==''){
       operate();
   }   

}

function operate(){
    let computation;
    const prevNumber = parseFloat(secondOperand);
    const currentNumber = parseFloat(firstOperand);
    if(isNaN(prevNumber) || isNaN(currentNumber && currentOperator !=''))return;


    switch(currentOperator){
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
            if(currentNumber === 0){
                clear();
              return alert('Hey, you know you can\'t divide numbers by zero right?????');
              
            }
            break
        default:
            return;

    }

    firstOperand = computation.toString();
    isComputation=true;
    secondOperand = '';
    currentOperator='';
    updateDisplay();
}
btnEqual.addEventListener('click',operate);
btnClear.addEventListener('click',clear);
btnDelete.addEventListener('click',del);

