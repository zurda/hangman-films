import React, { useState, useEffect, useMemo, useCallback } from 'react'

import { allLetters, getGenreId, defaultLetters, getRandom } from '../helpers'
import { fetchGenres, fetchFilm } from '../api'

import { useGameData } from '../hooks/GameData'

import HiddenText from '../components/HiddenText'
import LettersTray from '../components/LettersTray'
import { Dropdown } from '../components/GameControllers'
import ReleaseHint from '../components/ReleaseHint'

import { FaVideo } from 'react-icons/fa'

import {
  Container,
  ContentContainer,
  GenreCard,
  Button,
  ButtonContainer,
  HiddenTextContainer,
  LettersTrayContainer,
  FilmContainer,
  ImageContainer,
  HintButton,
  FilmInfo,
  PosterOverlay,
  Text
} from './styles/GameBoard'

interface FilmInfo {
  id: string
  title: string
  poster_path: string
  overview: string
  tagline: string
  release_date: string;
}

const EMPTY_FILM: FilmInfo = {
  id: '',
  title: '',
  poster_path: '',
  overview: '',
  tagline: '',
  release_date: '',
}

const MAX_HINT_COUNT = 2
const INITIAL_HINT_COST = 2
const MIN_HINT_COST = 1

const GameBoard = () => {
  const { alreadyPlayed, saveMovieId, numberOfLives } = useGameData()

  const [counter, setCounter] = useState(numberOfLives)
  const [film, setFilm] = useState(EMPTY_FILM)
  const [genres, setGenres] = useState<any[]>([])
  const [selectedGenre, setSelectedGenre] = useState({ id: 99 })
  const [guessedLetters, setGuessedLetters] = useState<string[]>(defaultLetters)
  const [hintCounter, setHintCounter] = useState(0)
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [posterOverlay, setPosterOverlay] = useState(
    Array.from({ length: 28 }, () => true)
  )

  const updateCounter = (amount: number) => {
    if (counter + amount < 1) {
      const newPosterOverlay = posterOverlay.map((_) => false)
      setPosterOverlay(newPosterOverlay)
    }
    setCounter(counter + amount)
  }

  const onCharClick = (char: string) => {
    setGuessedLetters([...guessedLetters, char, char.toLowerCase()])
    return film.title.indexOf(char) > -1 ||
      film.title.indexOf(char.toLowerCase()) > -1
      ? null
      : updateCounter(-1)
  }

  const resetState = useCallback(() => {
    setFilm(EMPTY_FILM)
    setGuessedLetters(defaultLetters)
    setCounter(numberOfLives)
    setHintCounter(0)
    setGameWon(false)

    const flushedOverlay = posterOverlay.map(() => true)
    setPosterOverlay(flushedOverlay)
  }, [numberOfLives, posterOverlay])

  const onGetFilmClick = async () => {
    resetState()
    const genreId = getGenreId(selectedGenre, genres)
    const filmId = await fetchFilm(genreId, alreadyPlayed, setFilm)
    saveMovieId(filmId)
  }

  const onHintClick = () => {
    updateCounter(
      -Math.max(MIN_HINT_COST, Math.abs(hintCounter - INITIAL_HINT_COST))
    )

    const newPosterOverlay = posterOverlay
    const availableIndexes = newPosterOverlay.flatMap((item, index) =>
      item ? [index] : []
    )
    const randomAvailableIndex = availableIndexes[getRandom(availableIndexes.length)]

    newPosterOverlay[randomAvailableIndex] = false

    setHintCounter(hintCounter + 1)

    setPosterOverlay(newPosterOverlay)
  }
  const hearts = useMemo(() => {
    return Array.from({ length: counter }, (_, index) => ({ id: `Heart-${index}` }))
  }, [counter])

  useEffect(() => {
    fetchGenres().then((result) => setGenres(result.genres))
  }, [])
  useEffect(() => {
    if (counter < 1) {
      setGuessedLetters(allLetters)
    }
    const remainingLetters = film.title
      .split('')
      .filter((filmLetter) => guessedLetters.indexOf(filmLetter) === -1)
    if (film.title !== '' && remainingLetters.length === 0) {
      setGuessedLetters(allLetters)
      setGameWon(true)
    }
  }, [film.title, guessedLetters, counter])

  useEffect(() => {
    setFilm(EMPTY_FILM)
    setGuessedLetters(defaultLetters)
    setCounter(numberOfLives)
    setHintCounter(0)

    const flushedOverlay = Array.from({ length: posterOverlay.length }, () => true)
    setPosterOverlay(flushedOverlay)
  }, [numberOfLives, posterOverlay.length])

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
              <HiddenText filmTitle={film.title} guessedLetters={guessedLetters} />
            </HiddenTextContainer>

            <LettersTrayContainer>
              <Text>
                {counter > 0 && (
                  <>
                    {gameWon ? (
                      `You won!🎉\nWith ${hearts.length} guess${hearts.length > 1 ? 'es' : ''
                      } to go 👏\n`
                    ) : (
                        <>
                          Guesses left:
                        {hearts.map((item) => (
                          <FaVideo key={item.id} />
                        ))}
                        </>
                      )}
                  </>
                )}
              </Text>
              <LettersTray
                guessedLetters={guessedLetters}
                onClickHandler={onCharClick}
              />
            </LettersTrayContainer>

            <FilmContainer style={{ justifyContent: 'flex-start' }}>
              <ImageContainer posterImage={film.poster_path}>
                {!gameWon &&
                  posterOverlay.map((status, index) => (
                    <PosterOverlay key={`Overlay-${index}`} active={!status} />
                  ))}

                {counter > MAX_HINT_COUNT && hintCounter < MAX_HINT_COUNT && !gameWon && (
                  <HintButton type="button" onClick={onHintClick}>
                    <h4>HINT</h4>
                    <p>
                      This will cost you {Math.abs(hintCounter - INITIAL_HINT_COST)}{' '}
                      guess(es)!
                    </p>
                  </HintButton>
                )}
              </ImageContainer>

              {(counter < 1 || gameWon) && (
                <FilmInfo>
                  <h3>{film.title}</h3>
                  {film.overview || film.tagline ? (
                    <p>{film.overview || film.tagline}</p>
                  ) : null}
                </FilmInfo>
              )}
              <ReleaseHint releaseYear={film.release_date.substring(0, 4)} counter={counter} setCounter={setCounter} gameWon={gameWon} />
            </FilmContainer>
          </>
        )
        }
      </ContentContainer >
    </Container >
  )
}

export default GameBoard
