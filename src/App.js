import React, { useState, useEffect } from 'react';

import Header from './components/Header'
import HiddenText from './components/HiddenText'
import LettersTray from './components/LettersTray'
import { allLetters } from './helpers/letters'

const API_MOVIEDB_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const MAX_ATTEMPTS = 7
const RESULTS_PAGES = 5

const testFilm = str => {
  const regex = /^[A-Za-z ]+$/
  return regex.test(str)
};


const getRandom = (arrayLength) => {
  return Math.floor(arrayLength * Math.random())
}

const getGenreId = (genreName, genres) => {
  const selectedGenre = genres.filter(genre => genreName === genre.name)
  return selectedGenre[0]
}



function App() {
  const [counter, setCounter] = useState(MAX_ATTEMPTS)
  const [filmName, setFilmName] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('Drama');
  const [letters, setGuessedLetters] = useState([' ']);

  const onCharClickHandler = (char) => {
    setGuessedLetters([...letters, char, char.toLowerCase()])

    return filmName.indexOf(char) > -1 || filmName.indexOf(char.toLowerCase()) > -1 ? null : setCounter(counter - 1)
  }

  const fetchFilm = async (genre) => {
    setFilmName('')
    setGuessedLetters([' '])
    setCounter(MAX_ATTEMPTS)
    const genreId = getGenreId(genre, genres) || { id: 99 }
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_MOVIEDB_KEY}&language=en-US&with_genres=${genreId.id}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${getRandom(RESULTS_PAGES) + 1}`
    ).then((response) => response.json())
    let filmPosition = getRandom(result.results.length)
    while (!testFilm(result.results[filmPosition].title)) {
      filmPosition = getRandom(result.results.length)
    }

    setFilmName(result.results[filmPosition].title);
  };
  useEffect(() => {
    const fetchGenres = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_MOVIEDB_KEY}&language=en-US`,
      ).then((response) => response.json());
      setGenres(result.genres);
    };
    fetchGenres();
  }, []);
  return (
    <div className="App">
      <Header appName={"Hangman"} appDescription={'Guess the film'} />
      {genres && genres.length > 0 ?
        <select value={selectedGenre} onClick={() => setFilmName('')} onChange={e => setSelectedGenre(e.target.value)}>
          <option value={''}>Choose a genre</option>
          {genres.map(genre => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
        </select> : null}
      <button onClick={() => fetchFilm(selectedGenre)}>Get film</button>

      {filmName !== '' &&
        <div>
          <div>Guesses left: {counter}</div>
          <button onClick={() => setGuessedLetters(allLetters)}>Reveal</button>
          <HiddenText filmArr={filmName.split('')} guessedLetters={letters} />
          <LettersTray guessedLetters={letters} onClickHandler={onCharClickHandler} />
        </div>
      }

    </div >
  );
}

export default App;
