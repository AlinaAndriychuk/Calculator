"use-strict";

function Count(leftOperand, rightOperand, operator) {  
  if (operator === "+") {
    return Number(leftOperand) + Number(rightOperand);
  } else if (operator === "×") {
    return Number(leftOperand) * Number(rightOperand);
  } else if (operator === "-") {
    return Number(leftOperand) - Number(rightOperand);
  } else {
    return Number(leftOperand) / Number(rightOperand);
  }
}

export default Count;