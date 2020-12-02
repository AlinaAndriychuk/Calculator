import React from 'react';

let buttonValues = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function NumberButtons() {
  return (
    <div className="numbers-container">
      {buttonValues.map((item, index)=> {
        return (
          <button className="btn btn--black" key={index}>{item}</button>
        )
      })}
      <button className="btn btn--black btn--big">0</button>
    </div>
  )
};

export default NumberButtons;