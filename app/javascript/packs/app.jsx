import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src';
import { store } from '../src/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App store={store} />,
    document.body.appendChild(document.createElement('div')),
  );
});
