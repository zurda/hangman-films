import React from 'react'
import AppProvider from './hooks';

import ThemeProvider from './style/ThemeProvider';
import GlobalStyle from './style/global';

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'

import ConfigWindow from './components/ConfigWindow';

const App = () => (
  <AppProvider>
    <ThemeProvider>
      <ConfigWindow />
      <Header appName={'Hangman'} appDescription={'Guess the film'} />
      <GameBoard />
      <Footer>
        <span>This project is available on{' '}
          <a href="https://github.com/zurda/hangman-films">Github</a></span>
      </Footer>
      <GlobalStyle />
    </ThemeProvider>
  </AppProvider>
)

export default App
