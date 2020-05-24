import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { colours, Text } from '../style/shared'
import { allLetters, getGenreId, defaultLetters } from '../helpers'
import { fetchGenres, fetchFilm } from '../api'

import HiddenText from '../components/HiddenText'
import LettersTray from '../components/LettersTray'
import PosterHint from '../components/PosterHint'
import FilmInfo from '../components/FilmInfo'
import { Button, ButtonContainer, FlexResponsive, Dropdown } from '../components/GameControllers'

const MAX_ATTEMPTS = 7
const EMPTY_FILM = { title: '', poster_path: '' }

const Container = styled.div`
  width: 100%;
  color: ${colours.maastrichtBlue};
  padding: 16px 32px;
  background-color: ${colours.lightest};
  min-height: calc(100vh - 130px);
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const GameBoard = () => {
  const [counter, setCounter] = useState(MAX_ATTEMPTS)
  const [film, setFilm] = useState(EMPTY_FILM)
  const [genres, setGenres] = useState<any[]>([])
  const [selectedGenre, setSelectedGenre] = useState({ id: 99 })
  const [guessedLetters, setGuessedLetters] = useState<string[]>(defaultLetters)

  const onCharClick = (char: string) => {
    setGuessedLetters([...guessedLetters, char, char.toLowerCase()])
    return film.title.indexOf(char) > -1 ||
      film.title.indexOf(char.toLowerCase()) > -1
      ? null
      : setCounter(counter - 1)
  }

  const resetState = () => {
    setFilm(EMPTY_FILM)
    setGuessedLetters(defaultLetters)
    setCounter(MAX_ATTEMPTS)
  }

  const onGetFilmClick = () => {
    resetState()
    const genreId = getGenreId(selectedGenre, genres)
    fetchFilm(genreId, setFilm)
  }

  useEffect(() => {
    fetchGenres().then((result) => setGenres(result.genres))
  }, [])
  useEffect(() => {
    if (counter < 1) {
      setGuessedLetters(allLetters)
    }
    const remainingLetters = film.title.split('').filter((filmLetter) => guessedLetters.indexOf(filmLetter) === -1)
    if (film.title !== '' && remainingLetters.length === 0) {
      setGuessedLetters(allLetters)
    }
  }, [film.title, guessedLetters, counter])
  return (
    <Container>
      <ContentContainer>
        <FlexResponsive>
          {genres && genres.length > 0 && (
            <Dropdown
              options={genres}
              title=""
              onClick={() => setFilm(EMPTY_FILM)}
              onChange={setSelectedGenre}
            />
          )}
          <ButtonContainer>
            <Button onClick={onGetFilmClick}>Get film</Button>
          </ButtonContainer>
        </FlexResponsive>
        {film.title !== '' && (
          <>
            <HiddenText filmArr={film.title.split('')} guessedLetters={guessedLetters} />
            <Text>{counter > 0 ? `Guesses left: ${counter}` : null}</Text>
            <LettersTray
              guessedLetters={guessedLetters}
              onClickHandler={onCharClick}
            />
            <PosterHint counter={counter} setCounter={setCounter} poster={film.poster_path} />
            {counter < 1 && <FilmInfo film={film} />}
          </>
        )}
      </ContentContainer>
    </Container>
  )
}

export default GameBoard
