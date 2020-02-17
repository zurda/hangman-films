import React from 'react'
import { create } from 'react-test-renderer'
import LettersTray from '../components/LettersTray'

const guessedLetters = [' ', 'a', 'b', 'c']

describe('LettersTray component', () => {
  test('Matches the snapshot', () => {
    const lettersTray = create(
      <LettersTray
        guessedLetters={guessedLetters}
        onClickHandler={(char = 'd') => console.log()}
      />
    )
    expect(lettersTray.toJSON()).toMatchSnapshot()
  })
})
