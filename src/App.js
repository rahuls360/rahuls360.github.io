import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header';

import './index.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <h1>hi</h1>
    </div>
  );
}

export default App;
