import React, { useState, useEffect } from 'react';

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import HiddenText from './components/HiddenText'
import LettersTray from './components/LettersTray'
import { allLetters, getRandom, testFilm, getGenreId } from './helpers'
import fetchGenres from './api/fetchGenres'
import { Button, Dropdown } from './components/GameControllers'

const API_MOVIEDB_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const MAX_ATTEMPTS = 7
const RESULTS_PAGES = 6
const EMPTY_FILM = { title: '', poster_path: '' }

function App() {
  const [counter, setCounter] = useState(MAX_ATTEMPTS)
  const [film, setFilm] = useState(EMPTY_FILM);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('Drama');
  const [letters, setGuessedLetters] = useState([' ']);
  const [isRevealed, setRevealed] = useState(false)

  const onCharClickHandler = (char) => {
    setGuessedLetters([...letters, char, char.toLowerCase()])
    return film.title.indexOf(char) > -1 || film.title.indexOf(char.toLowerCase()) > -1 ? null : setCounter(counter - 1)
  }

  const isGameOver = () => {
    return counter < 1
  }

  const fetchFilm = async (genre) => {
    setFilm(EMPTY_FILM)
    setGuessedLetters([' '])
    setRevealed(false)
    setCounter(MAX_ATTEMPTS)
    const genreId = getGenreId(genre, genres) || { id: 99 }
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_MOVIEDB_KEY}&language=en-US&with_genres=${genreId.id}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${getRandom(RESULTS_PAGES) + 1}`
    ).then((response) => response.json())
    let filmPosition = getRandom(result.results.length)
    while (!testFilm(result.results[filmPosition].title)) {
      filmPosition = getRandom(result.results.length)
    }
    setFilm(result.results[filmPosition]);
  };
  const gameOver = isGameOver()

  useEffect(() => {
    fetchGenres().then(result => setGenres(result.genres));
  }, []);
  useEffect(() => {
    if (counter < 1) {
      setGuessedLetters(allLetters)
      setRevealed(true)
    }
  }, [counter]);
  return (
    <>
      <Header appName={"Hangman"} appDescription={'Guess the film'} />

      <GameBoard>
        <div>
          {genres && genres.length > 0 && <Dropdown title="Choose a genre" options={genres} onClick={() => setFilm(EMPTY_FILM)} onChange={setSelectedGenre} />}
          <Button onClick={() => fetchFilm(selectedGenre)}>Get film</Button>
        </div>
        {gameOver ? <div>Game over!</div> : null}
        {film.title !== '' &&
          <div>
            <HiddenText filmArr={film.title.split('')} guessedLetters={letters} />
            <LettersTray guessedLetters={letters} onClickHandler={onCharClickHandler} />
            <div>Guesses left: {counter}</div>
            {!isRevealed ?
              <Button onClick={() => {
                setGuessedLetters(allLetters)
                setRevealed(true)
              }
              }>Reveal</Button> :
              <>
                < img src={`http://image.tmdb.org/t/p/w185${film.poster_path}`} alt="Film poster" />
                {film.overview || film.tagline ? <p>{film.overview || film.tagline}</p> : null}
              </>
            }
          </div>
        }
      </GameBoard>
    </>
  );
}

export default App;
