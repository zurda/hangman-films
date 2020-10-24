import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useGameData } from '../hooks/GameData';

import {dark, light} from './theme'

const Theme: React.FC  = ({children}) => {
  const { darkTheme } = useGameData();

  const selectedTheme = darkTheme? dark : light;

  return (
    <ThemeProvider theme={selectedTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme
