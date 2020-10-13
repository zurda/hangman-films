import React from 'react'
import { Container, LetterContainer } from './styles/HiddenText';

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
