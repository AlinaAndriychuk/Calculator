"use-strict";
import Count from '../Functions/Count';

export let leftOperand = "";
let rightOperand = ""; 
let operator;
let enterRightOperand = false;

function AddSymbol(event, anew) {
  let field = document.getElementById("field");
  let str = field.value;
  
  if(event === "=") {
    leftOperand = Count(leftOperand, rightOperand, operator);
    rightOperand = "";
    enterRightOperand = false;
    return leftOperand;
  } else if (isFinite(event)) {
    if (anew) {
      leftOperand = event;
      rightOperand = "";
      enterRightOperand = false;
      return;
    } else {
      rightOperand += event;
      return;
    }
  } else if (event === "m") {
    return Count(leftOperand, rightOperand, operator);
  }

  let symbol = event.target.innerHTML;
  let lastSymbol = str.slice(str.length - 1, str.length);

  if (event.target.closest(".numbers-container")) {
    if (enterRightOperand) {
      rightOperand += symbol;
    } else {
      leftOperand += symbol;
    }

    field.value = str + symbol;
  } else if (event.target.closest(".actions-container")) {
    if (enterRightOperand) {
      leftOperand = Count(leftOperand, rightOperand, operator);
      rightOperand = "";
    } else {
      enterRightOperand = true;
    }

    if ( !isFinite(lastSymbol) ) {
      field.value = leftOperand.slice(0, field.value.length - 1) + symbol;
    } else {
      field.value = leftOperand + symbol;
    };

    operator = symbol;
  }

  field.scrollBy(50, 0);
}

export default AddSymbol;