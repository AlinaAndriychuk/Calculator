"use-strict";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NumberButtons from './Buttons/NumberButtons';
import Actions from './Buttons/Actions';
import EqualButton from './Buttons/EqualButton';
import Field from './Field/Field';
import StateButtons from './Buttons/StateButtons';

ReactDOM.render(
  <React.Fragment>
    <Field></Field>
    <StateButtons></StateButtons>
    <NumberButtons></NumberButtons>
    <Actions></Actions>
    <EqualButton></EqualButton>
  </React.Fragment>,
  document.getElementById('container')
);

serviceWorker.unregister();