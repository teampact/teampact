import ReactDOM from 'react-dom'
import React from 'react';
import { App } from '../src';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="Kostas" />,
    document.body.appendChild(document.createElement('div')),
  )
});
