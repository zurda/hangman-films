import React from 'react'
import styled from '@emotion/styled'

const LetterContainer = styled.span`
  font-size: 16px;
  height: 24px;
  padding: 0 8px;
  display: inline-block;
  border-bottom: ${props => props.letter === ' ' ? 'none' : '2px solid black'};
  text-align: center;
  margin-right: 4px;
`



const HiddenText = ({ filmArr, guessedLetters }) => {
  return (
    <>
      {filmArr.map((letter, index) => <LetterContainer key={index} letter={letter}>{guessedLetters.indexOf(letter) > -1 ? letter : '?'}</LetterContainer>)}
    </>
  )
}

export default HiddenText