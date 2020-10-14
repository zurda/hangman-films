import React from 'react'
import AppProvider from './hooks';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import theme from './style/theme';

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'

const App = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <Header appName={'Hangman'} appDescription={'Guess the film'} />
      <GameBoard />
      <Footer>
        <span>This project is available on{' '}
          <a href="https://github.com/zurda/hangman-react">Github</a></span>
      </Footer>
      <GlobalStyle />
    </AppProvider>
  </ThemeProvider>
)

export default App
