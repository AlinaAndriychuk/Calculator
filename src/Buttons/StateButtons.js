"use-strict"
import React, {useState} from 'react';
import AddSymbol from '../Functions/AddSymbol';
import Count from '../Functions/Count';

function StateButtons() {
  let [memory, setMemory] = useState(0);

  function addMemeory() {
    setMemory( Count(memory, AddSymbol("m"), "+") );
  };

  function reduceMemory() {
    setMemory( Count(memory, AddSymbol("m"), "-") );
  };

  function cleanMemory() {
    setMemory(0);
  };

  function readMemory() {
    let field = document.getElementById("field");
    let lastSymbol = field.value.slice(field.value.length - 1, field.value.length);

    if( isFinite(lastSymbol) || lastSymbol === "." || lastSymbol === ")") {
      field.value = memory;
      AddSymbol(memory, "setField");
    } else {
      if(memory.toString().startsWith("-")) {
        field.value = field.value + "(" + memory + ")";
      } else {
        field.value = field.value + memory;
      }
      AddSymbol(memory, "addMemory");
    }
  };

  return (
    <React.Fragment>
      <button className="btn btn--black btn--small" onClick={cleanMemory}>mc</button>
      <button className="btn btn--black btn--small" onClick={readMemory}>mr</button>
      <button className="btn btn--black btn--small" onClick={reduceMemory}>m-</button>
      <button className="btn btn--orange btn--small" onClick={addMemeory}>m+</button>
    </React.Fragment>
  )
};

export default StateButtons;