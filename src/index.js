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
import TopButtons from './Buttons/TopButtons';

ReactDOM.render(
  <React.Fragment>
    <Field></Field>
    <TopButtons></TopButtons>
    <StateButtons></StateButtons>
    <NumberButtons></NumberButtons>
    <Actions></Actions>
    <EqualButton></EqualButton>
  </React.Fragment>,
  document.getElementById('container')
);

serviceWorker.unregister();