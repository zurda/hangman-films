import { getRandom, testFilm, getGenreId } from '../helpers'

const API_MOVIEDB_KEY = process.env.REACT_APP_MOVIEDB_API_KEY
const RESULTS_PAGES = 5

export const fetchGenres = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_MOVIEDB_KEY}&language=en-US`
  ).then((response) => response.json())
}

interface IGenre {
  id?: number
  name?: string
}

export const fetchFilm = async (genre: IGenre, genresList: IGenre[], resetCurrentState: VoidFunction, setNewFilm: any) => {
  resetCurrentState()
  const genreId = getGenreId(genre, genresList) || { id: 99 }
  const result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_MOVIEDB_KEY}&language=en-US&with_genres=${
    genreId.id
    }&sort_by=popularity.desc&include_adult=false&include_video=false&page=${getRandom(
      RESULTS_PAGES
    ) + 1}`
  ).then((response) => response.json())
  let filmPosition = getRandom(result.results.length)
  while (!testFilm(result.results[filmPosition].title)) {
    filmPosition = getRandom(result.results.length)
  }
  setNewFilm(result.results[filmPosition])
}

