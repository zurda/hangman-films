import React from 'react'
import { Char, LettersContainer } from './styles/LettersTray';
import { upprecaseLettersArr } from '../helpers'

interface ILettersTray {
  guessedLetters: string[]
  onClickHandler: (char: string) => void
}

const LettersTray = ({ guessedLetters, onClickHandler }: ILettersTray) => (
  <LettersContainer>
    {upprecaseLettersArr.map((char, i) => (
      <Char
        onClick={() => onClickHandler(char)}
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
