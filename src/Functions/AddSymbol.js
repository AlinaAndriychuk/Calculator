"use-strict";
import Count from '../Functions/Count';

export let leftOperand = "";
let rightOperand = ""; 
let operator;
let enterRightOperand = false;

function AddSymbol(event, anew) {
  let field = document.getElementById("field");
  let str = field.value;
  let lastSymbol = str.slice(str.length - 1, str.length);
  
  if(event === "=") {
    leftOperand = Count(leftOperand, rightOperand, operator);
    rightOperand = "";
    operator = "";
    enterRightOperand = false;
    return leftOperand;
  } else if (anew === "setField") {
      leftOperand = event;
      rightOperand = "";
      operator = "";
      enterRightOperand = false;
      return;
  } else if (anew === "addMemory") {
      rightOperand += event;
      return;
  } else if (event === "m") {
    return Count(leftOperand, rightOperand, operator);
  } else if (event === "clean") {
    leftOperand = "";
    rightOperand = "";
    enterRightOperand = false;
    operator = "";
    field.value = "";
    return;
  } else if (event === "change") {
    if(enterRightOperand) {
      if (lastSymbol === operator) {
        if (leftOperand.toString().startsWith("-")) {
          leftOperand = leftOperand.slice(1);
        } else {
          leftOperand = "-" + leftOperand;
        }
      } else {
        if (rightOperand.startsWith("(-")) {
          rightOperand = rightOperand.slice(1);
        } else {
          rightOperand = "(-" + rightOperand + ")";
        }
      }
    } else {
      if (leftOperand.toString().startsWith("-")) {
        leftOperand = leftOperand.slice(1);
      } else {
        leftOperand = "-" + leftOperand;
      }
    }
    
    field.value = leftOperand + operator + rightOperand;
    return;
  }

  let symbol = event.target.innerHTML;

  if (event.target.closest(".numbers-container")) {
    if (enterRightOperand) {
      if (symbol === "." && !rightOperand.includes(".")) {
        if (lastSymbol === ")") {
          rightOperand = rightOperand.slice(0, rightOperand.length - 1) + symbol + ")";
          field.value = str.slice(0, str.length - 1) + symbol + ")";
        } else {
          rightOperand += symbol;
          field.value = str + symbol;
        }
      } else if (symbol !== ".") {
        if (lastSymbol === ")") {
          rightOperand = rightOperand.slice(0, rightOperand.length - 1) + symbol + ")";
          field.value = str.slice(0, str.length - 1) + symbol + ")";
        } else {
          rightOperand += symbol;
          field.value = str + symbol;
        }
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
  } else if (event.target.closest(".btn--action")) {
    if (enterRightOperand) {
      leftOperand = Count(leftOperand, rightOperand, operator);
      rightOperand = "";
    } else {
      enterRightOperand = true;
    }

    if (!isFinite(lastSymbol) && lastSymbol !== "." && lastSymbol !== ")") {
      field.value = leftOperand.slice(0, field.value.length - 1) + symbol;
    } else {
      field.value = leftOperand + symbol;
    };

    operator = symbol;
  }

  field.scrollBy(50, 0);
}

export default AddSymbol;