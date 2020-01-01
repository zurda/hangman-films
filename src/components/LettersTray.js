import React from 'react'
import styled from '@emotion/styled'
import { upprecaseLettersArr } from '../helpers/letters'
const Char = styled.button`
  padding: 8px;
  font-weight: bold;
  margin: 2px;
`

const LettersTray = ({ guessedLetters, onClickHandler }) => <div>{upprecaseLettersArr.map((char, i) => <Char onClick={e => onClickHandler(e.target.innerHTML)} key={i} value={char} disabled={guessedLetters.indexOf(char) > -1}>{char}</Char>)}</div >

export default LettersTray