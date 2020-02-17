import React from 'react'
import { create } from 'react-test-renderer'
import PosterHint from '../components/PosterHint'

const posterData = 'sM33SANp9z6rXW8Itn7NnG1GOEs.jpg'
const counterData = 5

describe('PosterHint component', () => {
  test('Matches the snapshot', () => {
    const posterHint = create(
      <PosterHint
        poster={posterData}
        setCounter={(n) => null}
        counter={counterData}
      />
    )
    expect(posterHint.toJSON()).toMatchSnapshot()
  })
})
