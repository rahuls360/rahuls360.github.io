import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import theme from './theme.js'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'));

serviceWorker.unregister();
