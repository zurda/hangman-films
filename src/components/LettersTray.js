import React from 'react'
import styled from '@emotion/styled'

const Char = styled.button`
  padding: 8px;
  font-weight: bold;
  margin: 2px;
`

const lowercaseLettersArr = [...Array(26)].map((q, w) => String.fromCharCode(w + 65))

const LettersTray = ({ guessedLetters, onClickHandler }) => <div>{lowercaseLettersArr.map((char, i) => <Char onClick={e => onClickHandler(e.target.innerHTML)} key={i} value={char} disabled={guessedLetters.indexOf(char) > -1}>{char}</Char>)}</div >

export default LettersTray