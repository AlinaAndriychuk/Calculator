import React, {useState} from 'react';

let buttonValues = ["mc", "mr", "m-"];

function StateButtons() {
  return (
    <React.Fragment>
      {buttonValues.map((item, index)=> {
        return (
          <button className="btn btn--black btn--small" key={index}>{item}</button>
        )
      })}
      <button className="btn btn--orange btn--small">m+</button>
    </React.Fragment>
  )
};

export default StateButtons;