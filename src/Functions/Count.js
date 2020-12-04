"use-strict";

function Count(leftOperand, rightOperand, operator) {
  let strLeft = leftOperand;
  let strRight = rightOperand;

  if (strRight.includes("(")) {
    strRight = strRight.split("(").join("").split(")").join("");
  }

  if (operator === "+") {
    return Number(strLeft) + Number(strRight);
  } else if (operator === "×") {
    return Number(strLeft) * Number(strRight);
  } else if (operator === "-") {
    return Number(strLeft) - Number(strRight);
  } else if (operator === "÷") {
    return Number(strLeft) / Number(strRight);
  } else {
    return strLeft;
  }
}

export default Count;