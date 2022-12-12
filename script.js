const numberButton = document.querySelectorAll(".number");
const operateButton = document.querySelectorAll(".operator");
const clearButton =document.querySelector(".clear");
const backButton =document.querySelector(".backspace");
const equalsButton = document.querySelector(".equals-key");
const displayResult = document.querySelector(".display-result");
const decimalButton = document.querySelector(".point");

displayResult.textContent = "";

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

let storedNumber = "";
let firstNumber = "";
let clickedOperator = "";
let result = "";
displayResult.textContent = "";

numberButton.forEach((number) => {
  number.addEventListener('click', () => {
    storedNumber += parseInt(number.textContent);
    displayResult.textContent = storedNumber;
  })
});
operateButton.forEach((operator) => {
  operator.addEventListener('click', () => {
        firstNumber = parseInt(displayResult.textContent);
        clickedOperator = operator.textContent;
        storedNumber = "";
  })
}); 
equalsButton.addEventListener('click', () => {
    if (clickedOperator && firstNumber && storedNumber) {
      if (!parseFloat(storedNumber) && clickedOperator === '/') {
        alert("Invalid dividend");
        storedNumber = "";
      } else {
        result = operate(clickedOperator, parseFloat(firstNumber), parseFloat(storedNumber)).toFixed(2).replace(/[.,]00$/, "");
        displayResult.textContent = result;
        storedNumber = result;
      }
    }     
});
clearButton.addEventListener('click', () => {
  displayResult.textContent = "" ;
  storedNumber="";
});
backButton.addEventListener('click', () => {  
    displayResult.textContent = displayResult.textContent.slice(0,-1);
    storedNumber = storedNumber.slice(0,-1);
});

// window.addEventListener('keypress', (event) => {  
//   if(
//    event.key === '0' ||
//    event.key === '1' ||
//    event.key === '2' ||
//    event.key === '3' ||
//    event.key === '4' ||
//    event.key === '5' ||
//    event.key === '6' ||
//    event.key === '7' ||
//    event.key === '8' ||
//    event.key === '9' 
//   ){
//     storedNumber += parseInt(event.key);
//     displayResult.textContent = storedNumber;
//   } else if (
//     event.key === "+" ||
//     event.key === "-" ||
//     event.key === "*" ||
//     event.key === "/"
//   ){
//     firstNumber = parseInt(event.key);
//     clickedOperator = operateButton;
//     storedNumber = "";
//   } else if (event.key === "Enter") {
//     if (clickedOperator && firstNumber && storedNumber) {
//       if (!parseFloat(storedNumber) && clickedOperator === '/') {
//         alert("Invalid dividend");
//         storedNumber = "";
//       } else {
//         result = operate(clickedOperator, parseFloat(firstNumber), parseFloat(storedNumber)).toFixed(2).replace(/[.,]00$/, "");
//         displayResult.textContent = result;
//         storedNumber = result;
//       }
//     }    
//   } else if (event.key === "Backspace") {
    
//   }    
// });
  
