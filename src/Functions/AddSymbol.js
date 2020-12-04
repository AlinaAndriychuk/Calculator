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
  } else if (anew === "setField") {
      leftOperand = event;
      rightOperand = "";
      enterRightOperand = false;
      return;
  } else if (anew === "addMemory") {
      rightOperand += event;
      return;
  } else if (event === "m") {
    if (rightOperand === "") {
      return leftOperand;
    }
    return Count(leftOperand, rightOperand, operator);
  }

  let symbol = event.target.innerHTML;
  let lastSymbol = str.slice(str.length - 1, str.length);

  if (event.target.closest(".numbers-container")) {
    if (enterRightOperand) {
      if (symbol === "." && !rightOperand.includes(".")) {
        rightOperand += symbol;
        field.value = str + symbol;
      } else if (symbol !== ".") {
        rightOperand += symbol;
        field.value = str + symbol;
      } else {
        field.value = str;
      }
    } else {
      if (symbol === "." && !leftOperand.includes(".")) {
        leftOperand += symbol;
        field.value = str + symbol;
      } else if (symbol !== ".") {
        leftOperand += symbol;
        field.value = str + symbol;
      } else {
        field.value = str;
      }
    }
  } else if (event.target.closest(".actions-container")) {
    if (enterRightOperand) {
      leftOperand = Count(leftOperand, rightOperand, operator);
      rightOperand = "";
    } else {
      enterRightOperand = true;
    }

    if (!isFinite(lastSymbol) && lastSymbol !== ".") {
      field.value = leftOperand.slice(0, field.value.length - 1) + symbol;
    } else {
      field.value = leftOperand + symbol;
    };

    operator = symbol;
  }

  field.scrollBy(50, 0);
}

export default AddSymbol;