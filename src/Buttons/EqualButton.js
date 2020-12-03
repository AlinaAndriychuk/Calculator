import React from 'react';
import OutputFunction from '../Functions/OutputFunction';

function EqualButton() {
  return (
    <button className="btn btn--orange" onClick={OutputFunction}>=</button>
  )
};

export default EqualButton;