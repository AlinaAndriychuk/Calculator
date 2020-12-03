"use-strict";
import * as AddSymbol from '../Functions/AddSymbol';

function OutputFunction(event) {
  let field = document.getElementById("field");
  field.value = AddSymbol.leftOperand;
}

export default OutputFunction;