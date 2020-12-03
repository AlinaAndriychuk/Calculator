"use-strict";

function Count(leftOperand, rightOperand, operator) {
  if (operator === "+") {
    return leftOperand = Number(leftOperand) + Number(rightOperand);
  } else if (operator === "×") {
    return leftOperand = Number(leftOperand) * Number(rightOperand);
  } else if (operator === "-") {
    return leftOperand = Number(leftOperand) - Number(rightOperand);
  } else {
    return Number(leftOperand) / Number(rightOperand);
  }
}

export default Count;