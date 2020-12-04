"use-strict"
import React, {useState} from 'react';
import AddSymbol from '../Functions/AddSymbol';
import Count from '../Functions/Count';

function TopButtons() {
  return (
    <React.Fragment>
      <button className="btn btn--gray">AC</button>
      <button className="btn btn--gray">+/-</button>
      <button className="btn btn--gray">%</button>
      <button className="btn btn--orange">÷</button>
    </React.Fragment>
  )
};

export default TopButtons;