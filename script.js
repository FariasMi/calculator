const calculator = document.getElementById('calculator');
const currentDisplay = document.getElementById('current-display');
const oldDisplay = document.getElementById('old-display');

calculator.addEventListener('click',function(e){
    const numbers = e.target.getAttribute('data-number');  
    if(!numbers) return;
    currentDisplay.innerHTML += numbers;
    let number = currentDisplay.textContent;
    
});






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
//numbers.addEventListener('click',getNumbers);