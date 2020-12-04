"use-strict";

function Count(leftOperand, rightOperand, operator) {
  let strLeft = leftOperand;
  let strRight = rightOperand;

  if (strRight.toString().includes("(")) {
    strRight = strRight.split("(").join("").split(")").join("");
  }
  
  if (strRight.toString().includes("%")) {
    strRight = strLeft / 100 * strRight.slice(0, strRight.length - 1);
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