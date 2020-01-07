const API_MOVIEDB_KEY = process.env.REACT_APP_MOVIEDB_API_KEY

export const fetchGenres = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_MOVIEDB_KEY}&language=en-US`
  ).then((response) => response.json())
}
