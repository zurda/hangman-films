import React from 'react'

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'


const App = () => (
  <>
    <Header appName={'Hangman'} appDescription={'Guess the film'} />
    <GameBoard />
    <Footer>
      <span>This project is available on{' '}
        <a href="https://github.com/zurda/hangman-react">Github</a></span>
    </Footer>
  </>
)

export default App
