import React, { useState, useEffect } from 'react';

import Header from './components/Header'
import HiddenText from './components/HiddenText'
import LettersTray from './components/LettersTray'
const API_MOVIEDB_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;


const getRandomFilm = (arrayLength) => {
  return Math.floor(arrayLength * Math.random())
}

const getGenreId = (genreName, genres) => {
  const selectedGenre = genres.filter(genre => genreName === genre.name)
  return selectedGenre[0]
}



function App() {
  const [counter, setCounter] = useState(7)
  const [filmName, setFilmName] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('Drama');
  const [letters, setGuessedLetters] = useState([' ']);

  const onCharClickHandler = (char) => {
    setGuessedLetters([...letters, char, char.toLowerCase()])
    setCounter(counter - 1)
  }

  const fetchFilm = async (genre) => {
    const genreId = getGenreId(genre, genres) || { id: 99 }
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_MOVIEDB_KEY}&language=en-US&with_genres=${genreId.id}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      return response.json();
    })
    const filmPosition = getRandomFilm(result.results.length)
    setFilmName(result.results[filmPosition].title);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_MOVIEDB_KEY}&language=en-US`,
      ).then((response) => {
        return response.json();
      })
      setGenres(result.genres);
    };
    fetchGenres();


  }, []);
  return (
    <div className="App">
      <Header appName={"Hangman"} appDescription={'Guess the film'} />
      {genres && genres.length > 0 ?
        <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
          <option value={''}>Choose a genre</option>
          {genres.map(genre => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
        </select> : null}
      <button onClick={() => fetchFilm(selectedGenre)}>Get film</button>
      {filmName !== '' &&
        <div>
          <div>Guesses left: {counter}</div>
          <HiddenText filmArr={filmName.split('')} guessedLetters={letters} />
          <LettersTray guessedLetters={letters} onClickHandler={onCharClickHandler} />
        </div>
      }
    </div>
  );
}

export default App;
