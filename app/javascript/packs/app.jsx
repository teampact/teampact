import ReactDOM from 'react-dom'
import React from 'react';
import { Hello } from '../src';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Kostas" />,
    document.body.appendChild(document.createElement('div')),
  )
});
