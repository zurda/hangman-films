import React from 'react'
import styled from '@emotion/styled'

const LetterContainer = styled.span`
  width: 20px;
  min-height: 32px;
  max-height: 32px;
  display: inline-block;
  border-bottom: 1px solid #A9E5BB;
  text-align: center;
  margin-right: 8px;
`



const HiddenText = ({ filmArr, guessedLetters }) => {
  return (
    <>
      {filmArr.map((letter, index) => <LetterContainer key={index}>{guessedLetters.indexOf(letter) > -1 ? letter : '?'}</LetterContainer>)}
    </>
  )
}

export default HiddenText