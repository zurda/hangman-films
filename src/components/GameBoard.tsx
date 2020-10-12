import React, { useState, useEffect } from 'react'

import { allLetters, getGenreId, defaultLetters } from '../helpers'
import { fetchGenres, fetchFilm } from '../api'


import HiddenText from '../components/HiddenText'
import LettersTray from '../components/LettersTray'
import PosterHint from '../components/PosterHint'
import FilmInfo from '../components/FilmInfo'
import { Dropdown } from '../components/GameControllers'

import {
  Container,
  ContentContainer,
  GenreCard,
  Button,
  ButtonContainer,
  HiddenTextContainer,
  LettersTrayContainer,
  PosterContainer,
  Text
} from './styles/GameBoard'

const MAX_ATTEMPTS = 7
const EMPTY_FILM = { title: '', poster_path: '' }

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
        <GenreCard>
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
        </GenreCard>
        {film.title !== '' && (
          <>
            <HiddenTextContainer>
              <HiddenText filmArr={film.title.split('')} guessedLetters={guessedLetters} />
            </HiddenTextContainer>

            <LettersTrayContainer>
              <Text>{counter > 0 ? `Guesses left: ${counter}` : null}</Text>
              <LettersTray
                guessedLetters={guessedLetters}
                onClickHandler={onCharClick}
              />
            </LettersTrayContainer>

            <PosterContainer>
              <PosterHint counter={counter} setCounter={setCounter} poster={film.poster_path} />
              {counter < 1 && <FilmInfo film={film} />}
            </PosterContainer>
          </>
        )}
      </ContentContainer>
    </Container>
  )
}

export default GameBoard
