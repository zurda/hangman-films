import React from 'react'
import { Container, WordContainer, LetterContainer } from './styles/HiddenText';

interface IFilmArr {
  filmTitle: string
  guessedLetters: string[]
}

const HiddenText = ({ filmTitle, guessedLetters }: IFilmArr) => {
  /*
  * Divide movie title in 2 groups of array (words and letters)
  * This will be useful for line wraping
  */
  const filmArr = filmTitle.split(' ').map((word, index, array) => {
    const lettersArray = word.split('')

    // if not last word return the word with an ending space
    return index < array.length - 1 ? [...lettersArray, ' '] : lettersArray
  })

  return (
    <Container>
      {filmArr.map((word, index) => (
        <WordContainer key={`${index}-${word}`}>
          {word.map((letter, idx) => (
            <LetterContainer
              key={`${index}-${word}-${letter}-${idx}`}
              letter={letter}
            >
              {guessedLetters.indexOf(letter) > -1 ? letter : '?'}
            </LetterContainer>
          ))}
        </WordContainer>
      ))}
    </Container>
  )
}

export default HiddenText
