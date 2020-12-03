import React from 'react';
import AddSymbol from '../Functions/AddSymbol';

let buttonValues = ["×", "-", "+"];

function Actions() {
  return (
    <div className="actions-container">
      {buttonValues.map((item, index)=> {
        return (
          <button className="btn btn--orange" onClick={AddSymbol} key={index}>{item}</button>
        )
      })}
    </div>
  )
};

export default Actions;