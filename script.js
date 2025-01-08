const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');

const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');

const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

// container
let previousValue = '';
let currentValue = '';
let operatorValue = '';

// Enter number
number.forEach(num => num.addEventListener('click', (e)=>{
  if(currentValue.length <= 6){
    displayNum(e.target.textContent);
    currentScreen.textContent = currentValue;
  }
}));

// clear
clear.addEventListener('click', ()=>{
  previousValue = '';
  currentValue = '';
  operatorValue = '';
  currentScreen.textContent = currentValue;
  previousScreen.textContent = previousValue;
});

// operator
operator.forEach((ope) => ope.addEventListener('click', (e)=>{
  addOperator(e.target.textContent)
  previousScreen.textContent = `${previousValue} ${operatorValue}`;
  currentScreen.textContent = currentValue;
}));

// equal
equal.addEventListener('click', ()=>{
  if(currentValue.length != '' && previousValue != ''){
    calculate();
    previousScreen.textContent = '';
    
    if(previousValue.length <= 7){
      currentScreen.textContent = previousValue;
    } else{
      currentScreen.textContent = 
      `
        ${previousValue.slice(0, 5)}...
      `;
    }
     
  }
});

// decimal
decimal.addEventListener('click', ()=>{
  if(!currentValue.includes('.')){
    currentValue += '.';
  }
});

function displayNum(num){
  currentValue += num
}

function addOperator(value){
  previousValue = currentValue;
  operatorValue = value;
  currentValue = '';
}

function calculate(){
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  switch(operatorValue){
    case '+': 
      previousValue += currentValue;
    break;
    case '-':
      previousValue -= currentValue;
    break;
    case '*':
      previousValue *= currentValue;
    break;
    case '/':
      previousValue /= currentValue;
    break;
    default:
      alert('operator Invalid!');
    break;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}


function roundNumber(num){
  return Math.round(num * 1000) / 1000;
}


// static- information wlaang interact
// dynamic - may interaction or request

// assignment: nextline dapat kunwari echo ganon dapat netx line di magkadikit bawal mag br or html