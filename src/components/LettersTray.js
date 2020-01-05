import React from 'react'
import styled from '@emotion/styled'
import { colours } from '../style/shared'
import { upprecaseLettersArr } from '../helpers'

const LettersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px auto;
`

const Char = styled.button`
  padding: 8px;
  font-weight: bold;
  margin: 2px;
  width: 10%;
  background-color: ${(props) => (props.disabled ? 'white' : colours.pictonBlue)};
  color: ${(props) => (props.disabled ? colours.diamond : 'white')};
`

const LettersTray = ({ guessedLetters, onClickHandler }) => (
  <LettersContainer>
    {upprecaseLettersArr.map((char, i) => (
      <Char
        onClick={(e) => onClickHandler(e.target.innerHTML)}
        key={i}
        value={char}
        disabled={guessedLetters.indexOf(char) > -1}
      >
        {char}
      </Char>
    ))}
  </LettersContainer>
)

export default LettersTray
