import React from 'react'
import styled from '@emotion/styled'
import { colours } from '../style/shared'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 32px;
`

const LetterContainer = styled.span`
  
  padding: 0 8px;
  display: inline-block;
  border-bottom: ${props => props.letter === ' ' ? 'none' : `2px solid ${colours.darkGrey}`};
  color: ${colours.darkGrey};
  text-align: center;
  margin-right: 4px;
`

const HiddenText = ({ filmArr, guessedLetters }) => <Container>{filmArr.map((letter, index) => <LetterContainer key={index} letter={letter}>{guessedLetters.indexOf(letter) > -1 ? letter : '?'}</LetterContainer>)}</Container>


export default HiddenText