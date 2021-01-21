import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline /> {/* Esse cara vai resetar as margens e paddings default do navegador */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);