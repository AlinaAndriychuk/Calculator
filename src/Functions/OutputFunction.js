"use-strict";
import AddSymbol from '../Functions/AddSymbol';

function OutputFunction(event) {
  let field = document.getElementById("field");
  field.value = AddSymbol("=");
}

export default OutputFunction;