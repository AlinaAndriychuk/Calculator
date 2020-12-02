"use-strict";

import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NumberButtons from './NumberButtons';
import Actions from './Actions';

ReactDOM.render(
  <React.Fragment>
    <NumberButtons></NumberButtons>
    <Actions></Actions>
    
  </React.Fragment>,
  document.getElementById('container')
);

serviceWorker.unregister();