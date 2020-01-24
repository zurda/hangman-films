import React from 'react'
import styled from '@emotion/styled'
import { colours } from '../style/shared'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 32px;
  font-family: 'Roboto';
`

interface ILetterContainer {
  letter: string
}

const LetterContainer = styled.span<ILetterContainer>`
  padding: 0 8px;
  display: inline-block;
  border-bottom: ${(props) =>
    props.letter === ' ' ? 'none' : `2px solid ${colours.maastrichtBlue}`};
  width: 20px;
  padding: 2px;
  text-align: center;
  margin-right: 4px;
  font-size: 20px;
  @media (min-width: 420px) {
    font-size: 22px;
  }
`

interface IFilmArr {
  filmArr: string[]
  guessedLetters: string[]
}

const HiddenText = ({ filmArr, guessedLetters }: IFilmArr) => (
  <Container>
    {filmArr.map((letter, index) => (
      <LetterContainer key={index} letter={letter}>
        {guessedLetters.indexOf(letter) > -1 ? letter : '?'}
      </LetterContainer>
    ))}
  </Container>
)

export default HiddenText
