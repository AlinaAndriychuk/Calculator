"use-strict";
import * as AddSymbol from '../Functions/AddSymbol';
import Count from '../Functions/Count';

function OutputFunction(event) {
  let field = document.getElementById("field");

  field.value = Count(AddSymbol.leftOperand, AddSymbol.rightOperand, AddSymbol.operator)
}

export default OutputFunction;