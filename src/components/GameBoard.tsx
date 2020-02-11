import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { getGenreId } from '../helpers/index'
import { colours } from '../style/shared'
import HiddenText from '../components/HiddenText'
import LettersTray from '../components/LettersTray'
import HintContainer from '../components/PosterHint'
import { allLetters } from '../helpers'
import { fetchGenres, fetchFilm } from '../api'
import {
  Button,
  ButtonContainer,
  RoundButton,
  FlexResponsive,
  Dropdown
} from '../components/GameControllers'
import FilmInfo from '../components/FilmInfo'

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

const Text = styled.p`
  font-family: 'Roboto';
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

const GameBoard = () => {
  const [counter, setCounter] = useState(MAX_ATTEMPTS)
  const [film, setFilm] = useState(EMPTY_FILM)
  const [genres, setGenres] = useState<any[]>([])
  const [selectedGenre, setSelectedGenre] = useState({ id: 99 })
  const [letters, setGuessedLetters] = useState([' '])
  const [isHinted, setIsHinted] = useState(false)
  const [isRevealed, setRevealed] = useState(false)

  const onCharClick = (char: string) => {
    setGuessedLetters([...letters, char, char.toLowerCase()])
    return film.title.indexOf(char) > -1 ||
      film.title.indexOf(char.toLowerCase()) > -1
      ? null
      : setCounter(counter - 1)
  }

  const onHintClick = () => {
    setCounter(counter - 2)
    setIsHinted(true)
  }

  const resetState = () => {
    setFilm(EMPTY_FILM)
    setGuessedLetters([' '])
    setRevealed(false)
    setIsHinted(false)
    setCounter(MAX_ATTEMPTS)
  }

  useEffect(() => {
    fetchGenres().then((result) => setGenres(result.genres))
  }, [])
  useEffect(() => {
    if (counter < 1) {
      setGuessedLetters(allLetters)
      setRevealed(true)
    }
  }, [counter])
  useEffect(() => {
    const remainingLetters = film.title
      .split('')
      .filter((filmLetter) => letters.indexOf(filmLetter) === -1)
    if (film.title !== '' && remainingLetters.length === 0) {
      setRevealed(true)
    }
  }, [film.title, letters])
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
            <Button onClick={() => {
              resetState()
              const genreId = getGenreId(selectedGenre, genres) || { id: 99 }
              fetchFilm(genreId, setFilm)
            }
            }>
              Get film
            </Button>
          </ButtonContainer>
        </FlexResponsive>
        {film.title !== '' && (
          <div>
            <HiddenText filmArr={film.title.split('')} guessedLetters={letters} />
            <Text>{counter > 0 ? `Guesses left: ${counter}` : null}</Text>
            <LettersTray
              guessedLetters={letters}
              onClickHandler={onCharClick}
            />
            {!isHinted && counter > 2 &&
              <>
                <RoundButton onClick={onHintClick}>
                  Hint
              </RoundButton>
                <Text>This will cost you two guesses!</Text>
              </>
            }
            {isHinted && !isRevealed && <HintContainer imgSrc={`http://image.tmdb.org/t/p/w154${film.poster_path}`} />}
            {isRevealed && <FilmInfo film={film} />}
          </div>
        )}
      </ContentContainer>
    </Container>
  )
}

export default GameBoard
