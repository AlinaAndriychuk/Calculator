"use-strict";
import Count from '../Functions/Count';

export let leftOperand = "";
export let rightOperand = ""; 
export let operator;
let enterRightOperand = false;

function AddSymbol(event) {
  let field = document.getElementById("field");
  let symbol = event.target.innerHTML;
  let lastSymbol = field.value.slice(field.value.length - 1, field.value.length)

  if (event.target.closest(".numbers-container")) {
    if (enterRightOperand) {
      rightOperand += symbol;
    } else {
      leftOperand += symbol;
    }

    field.value = field.value + symbol;
  } else if (event.target.closest(".actions-container")) {
    if (!isFinite(lastSymbol)) {
      field.value = field.value.slice(0, field.value.length - 1) + symbol;
    } else {
      field.value = field.value + symbol;
    };

    if (enterRightOperand) {
      leftOperand = Count(leftOperand, rightOperand, operator);
      rightOperand = "";
    } else {
      enterRightOperand = true;
    }

    operator = symbol;
  }

  field.scrollBy(50, 0);
}

export default AddSymbol;