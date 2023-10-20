let firstNumber = 0;
let secondNumber = 0;
let operator;

function sum(a,b){
    return console.log(a + b);
}
function substract (a,b){
    return console.log(a - b);
}
function multiply(a,b){
    return console.log(a * b);
}
function divide (a,b){
    return console.log(a / b);
}
    
function operate(a,b,op){
    let result = 0;
    if(op === 'sum'){
        result = sum(a,b);
    }
    if(op === 'substract'){
        result = substract(a,b);
    }
    if(op === 'multiply'){
        result =  multiply(a,b);
    }
    if(op === 'divide'){
        result = divide(a,b);
    }
    return result;
}
operate(6,3, 'substract')


