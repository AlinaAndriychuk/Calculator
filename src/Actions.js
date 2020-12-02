import React from 'react';

let buttonValues = ["×", "-", "+"];

function Actions() {
  return (
    <div className="actions-container">
      {buttonValues.map((item, index)=> {
        return (
          <button className="btn btn--orange" key={index}>{item}</button>
        )
      })}
    </div>
  )
};

export default Actions;