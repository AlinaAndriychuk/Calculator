import React from 'react';
import AddSymbol from '../Functions/AddSymbol';

let buttonValues = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function NumberButtons() {
  return (
    <div className="numbers-container">
      {buttonValues.map((item, index)=> {
        return (
          <button className="btn btn--black" onClick={AddSymbol} key={index}>{item}</button>
        )
      })}
      <button className="btn btn--black btn--big" onClick={AddSymbol}>0</button>
      <button className="btn btn--black" onClick={AddSymbol}>.</button>
    </div>
  )
};

export default NumberButtons;