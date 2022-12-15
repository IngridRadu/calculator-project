const numberButton = document.querySelectorAll(".number");
const operateButton = document.querySelectorAll(".operator");
const clearButton =document.querySelector(".clear");
const backButton =document.querySelector(".backspace");
const equalsButton = document.querySelector(".equals-key");
const displayResult = document.querySelector(".display-result");
const decimalButton = document.querySelector(".point");
let operatorActive = false;

const add = (num1,num2) => {
  return num1+num2;
}
const substract = (num1,num2) => {
  return num1-num2;
}
const multiply =(num1,num2) => {
  return num1*num2;
}
const divide = (num1,num2) => {
  return num1 / num2; 
}
const operate = (operator, num1,num2) => {
   switch(operator) { 
    case "+" :
     return add(num1,num2);
    case "-" :
     return substract(num1,num2);
    case "*" :
    return multiply(num1,num2);
    case "/" :
    return divide(num1,num2);  
  }
}

let secondNumber = "";
let firstNumber = "";
let clickedOperator = null;
let secondOperator = null;
let result = "";

const calculate = (operator,num1,num2) => {
  const result = operate(operator, parseFloat(num1), parseFloat(num2)).toFixed(5).replace(/[.,]00$/, "");
  displayResult.textContent = parseFloat(result);
  firstNumber = result;
  console.log(parseFloat(result));
  secondNumber = '';
}

numberButton.forEach((number) => {
  number.addEventListener('click', () => {
    if(displayResult.textContent === '0') {
      displayResult.textContent = '0';
    } else if (firstNumber && clickedOperator) {
      secondNumber += parseInt(number.textContent);
      console.log('second', secondNumber);
      displayResult.textContent = secondNumber;
      console.log("DR", displayResult);
    } else {
      firstNumber += parseInt(number.textContent); 
      console.log("FN", firstNumber);
      displayResult.textContent = firstNumber;
      console.log("elseDR", displayResult.textContent);
    }
  })
});
operateButton.forEach((operator) => {
  operator.addEventListener('click', () => {
    if (clickedOperator && firstNumber && secondNumber) {
      calculate(clickedOperator, firstNumber,secondNumber);
      clickedOperator = operator.textContent;
    } else {
      clickedOperator = operator.textContent;
    }
  })
}); 

equalsButton.addEventListener('click', () => {
    if (clickedOperator && firstNumber && secondNumber) {
      if (!parseFloat(secondNumber) && clickedOperator === '/') {
        alert("Invalid dividend");
        secondNumber = "";
      } else {
        calculate(clickedOperator, firstNumber,secondNumber);
      }
    }     
});
clearButton.addEventListener('click', () => {
  displayResult.textContent = "" ;
  firstNumber="";
  secondNumber="";
});
backButton.addEventListener('click', () => {  
    displayResult.textContent = displayResult.textContent.slice(0,-1);
    if (firstNumber && secondNumber) {
      secondNumber = secondNumber.slice(0,-1);
    } else if (firstNumber) {
      firstNumber = firstNumber.slice(0,-1);
    }
    
});
decimalButton.addEventListener('click', () => {
  if(operatorActive) {
    displayResult.textContent = ('0.');
    operatorActive = false;
  } else if(displayResult.textContent.indexOf('.') === -1) {
    displayResult.textContent = displayResult.textContent + '.';
  }
})
window.addEventListener('keypress', (event) => {  
  if(
   event.key === '0' ||
   event.key === '1' ||
   event.key === '2' ||
   event.key === '3' ||
   event.key === '4' ||
   event.key === '5' ||
   event.key === '6' ||
   event.key === '7' ||
   event.key === '8' ||
   event.key === '9' 
  ){
    if(displayResult.textContent === '0') {
      displayResult.textContent = '0';
    } else if (firstNumber && clickedOperator) {
      secondNumber += parseInt(event.key);
      console.log('second', secondNumber);
      displayResult.textContent = secondNumber;
      console.log("DR", displayResult);
    } else {
      firstNumber += parseInt(event.key); 
      console.log("FN", firstNumber);
      displayResult.textContent = firstNumber;
      console.log("elseDR", displayResult.textContent);
    }
  }else if (
  event.key === "+" ||
  event.key === "-" ||
  event.key === "*" ||
  event.key === "/"
  ){
    if (clickedOperator && firstNumber && secondNumber) {
      calculate(clickedOperator, firstNumber,secondNumber);
      clickedOperator = event.key;
    } else {
      clickedOperator = event.key;
    }
  }else if (event.key === "Enter") {
    if (clickedOperator && firstNumber && secondNumber) {
      if (!parseFloat(secondNumber) && clickedOperator === '/') {
        alert("Invalid dividend");
        secondNumber = "";
      } else {
        calculate(clickedOperator, firstNumber,secondNumber);
      }
    }     
  } else if (event.key === "Backspace") {
    
  }    
});
