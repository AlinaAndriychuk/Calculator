"use-strict";

function Count(leftOperand, rightOperand, operator) {
  let strLeft = leftOperand;
  let strRight = rightOperand;

  // if (strLeft.includes(",")) {
  //   strLeft = strLeft.split(",");
  //   strLeft = strLeft.join(".");
  // }

  // if (strRight.includes(",")) {
  //   strRight = strRight.split(",");
  //   strRight = strRight.join(".");
  // }
  
  if (operator === "+") {
    return Number(strLeft) + Number(strRight);
  } else if (operator === "×") {
    return Number(strLeft) * Number(strRight);
  } else if (operator === "-") {
    return Number(strLeft) - Number(strRight);
  } else {
    return Number(strLeft) / Number(strRight);
  }
}

export default Count;