import React from 'react'
import { create } from 'react-test-renderer'
import HiddenText from '../components/HiddenText'

const guessedLetters = [' ', 'a', 'b', 'c']
const filmArr = ['S', 'o', 'm', 'e', ' ', 'f', 'i', 'l', 'm']

describe('LettersTray component', () => {
  test('Matches the snapshot', () => {
    const hiddenText = create(
      <HiddenText guessedLetters={guessedLetters} filmArr={filmArr} />
    )
    expect(hiddenText.toJSON()).toMatchSnapshot()
  })
})
