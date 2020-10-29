import { getRandom, testFilm } from '../helpers'

const API_MOVIEDB_KEY = process.env.REACT_APP_MOVIEDB_API_KEY
const RESULTS_PAGES = 1

export const fetchFilm = async (
  genreId: number,
  alreadyPlayed: string[],
  setNewFilm: React.Dispatch<React.SetStateAction<{
    id: string;
    title: string;
    poster_path: string;
    overview: string;
    tagline: string;
    release_date: string;
  }>>): Promise<string> => {
  const result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_MOVIEDB_KEY}&language=en-US&include_adult=false&with_genres=${genreId
    }&sort_by=vote_count.desc&include_video=false&page=${getRandom(RESULTS_PAGES) + 1}`
  ).then((response) => response.json())

  let filmPosition = getRandom(result.results.length)
  while (
    !testFilm(result.results[filmPosition].title)
    || alreadyPlayed.indexOf(result.results[filmPosition].id) >= 0
  ) {
    filmPosition = getRandom(result.results.length)
  }

  const newFilm = result.results[filmPosition]
  setNewFilm(newFilm)
  return newFilm.id
}

