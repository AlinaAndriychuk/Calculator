"use-strict";

import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NumberButtons from './Buttons/NumberButtons';
import Actions from './Buttons/Actions';
import EqualButton from './Buttons/EqualButton';
import Field from './Field/Field';

ReactDOM.render(
  <React.Fragment>
    <Field></Field>
    <NumberButtons></NumberButtons>
    <Actions></Actions>
    <EqualButton></EqualButton>
  </React.Fragment>,
  document.getElementById('container')
);

serviceWorker.unregister();