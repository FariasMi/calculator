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

function operate(...numbers, operator){
    switch(op){
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
