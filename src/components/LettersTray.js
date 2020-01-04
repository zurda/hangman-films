import React from 'react'
import styled from '@emotion/styled'

import { upprecaseLettersArr } from '../helpers/letters'

const LettersContainer = styled.div`
  display: flex;
  flex-direction: row;
flex-wrap: wrap;
margin: 32px auto;
`

const Char = styled.button`
  padding: 8px;
  font-weight: bold;
  margin: 2px;
  width: 10%;
`

const LettersTray = ({ guessedLetters, onClickHandler }) => <LettersContainer>{upprecaseLettersArr.map((char, i) => <Char onClick={e => onClickHandler(e.target.innerHTML)} key={i} value={char} disabled={guessedLetters.indexOf(char) > -1}>{char}</Char>)}</LettersContainer >

export default LettersTray