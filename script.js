const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator');
const btnEqual = document.querySelector('[data-equals]');
const btnDelete = document.querySelector('[data-delete]');
const btnClear = document.querySelector('[data-clear]');
const currentDisplay = document.getElementById('current-display');
const oldDisplay =  document.getElementById('old-display');
var operator;


btnNumbers.forEach(btn => btn.addEventListener('click',()=>{
    appendNumbers (btn.innerText);
    
}));

btnOperators.forEach(btn => btn.addEventListener('click',()=>{
    operator = btn.innerText;
    chooseOperator (operator);
    updateDisplay();
       

}));
  


function appendNumbers(btnNumber){
    let number = currentDisplay.textContent;
    if(number.includes('.') && btnNumber==='.') return;
     number = number + btnNumber;
     currentDisplay.innerHTML = number.toString();  
        
}

function chooseOperator(){
    if(currentDisplay.innerText === '') return;
    if(oldDisplay.innerText !== ''){
        operate();
    }
    oldDisplay.innerHTML = currentDisplay.innerText;
    currentDisplay.innerHTML = '';
   
}

function clear(){
    currentDisplay.innerHTML = '';
    oldDisplay.innerHTML = '';
 }

function del(){
    let number = currentDisplay.innerText;
    currentDisplay.innerHTML = number.slice(0,-1);
}

function updateDisplay(){
    if(operator != ''){
    
    }
}

function operate(){
    let computation;
    const prevNumber = parseFloat(oldDisplay.innerText);
    console.log(prevNumber);
    const currentNumber = parseFloat(currentDisplay.innerText);
    console.log(currentNumber);
    console.log(operator);
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

