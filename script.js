const btn = document.getElementById('calculator');

btn.addEventListener('click',function(e){
    const number = e.target.getAttribute('data-number');
    if(!number)return;
    const displayNumber= document.getElementById('current-display');
    displayNumber.innerHTML += number;
});



const element = document.querySelector('.number');

//console.log(number)
//function getNumbers(){    
//    document.getElementById('current-value').innerHTML = numbers.value

//}


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