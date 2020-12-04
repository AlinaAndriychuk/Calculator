"use-strict"
import React from 'react';
import AddSymbol from '../Functions/AddSymbol';

function TopButtons() {
  function cleanField() {
    AddSymbol("clean")
  }

  function changeOperand() {
    AddSymbol("change")
  }

  return (
    <React.Fragment>
      <button className="btn btn--gray" onClick={cleanField}>AC</button>
      <button className="btn btn--gray" onClick={changeOperand}>+/-</button>
      <button className="btn btn--gray" onClick={AddSymbol}>%</button>
      <button className="btn btn--orange btn--action" onClick={AddSymbol}>÷</button>
    </React.Fragment>
  )
};

export default TopButtons;