import React from 'react'
import { create } from 'react-test-renderer'
import FilmInfo from '../components/FilmInfo'

const filmData = {
  overview: 'Some text',
  poster_path: 'sometext.png',
  tagline: 'Some more text'
}

describe('FilmInfo component', () => {
  test('Matches the snapshot', () => {
    const filmInfo = create(<FilmInfo film={filmData} />)
    expect(filmInfo.toJSON()).toMatchSnapshot()
  })
})
