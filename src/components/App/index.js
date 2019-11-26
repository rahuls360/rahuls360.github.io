import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Header from '../Header';
import About from '../About';
import Projects from '../Projects';

import './App.css';

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
      <About />
      <Projects />
    </div>
  );
}

export default App;
