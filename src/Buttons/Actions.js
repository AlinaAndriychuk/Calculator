import React from 'react';
import AddSymbol from '../Functions/AddSymbol';

let buttonValues = ["×", "-", "+"];

function Actions() {
  return (
    <React.Fragment>
      {buttonValues.map((item, index)=> {
        return (
          <button className="btn btn--orange btn--action" onClick={AddSymbol} key={index}>{item}</button>
        )
      })}
    </React.Fragment>
  )
};

export default Actions;