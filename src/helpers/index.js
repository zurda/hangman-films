export const upprecaseLettersArr = [...Array(26)].map((q, w) =>
  String.fromCharCode(w + 65)
)

export const allLetters = [
  ' ',
  "'",
  ':',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  ...upprecaseLettersArr,
  ...upprecaseLettersArr.map((letter) => letter.toLowerCase())
]

export const getRandom = (max) => Math.floor(max * Math.random())

export const testFilm = (str) => {
  const regex = /^[A-Za-z ]+$/
  return regex.test(str)
}

export const getGenreId = (genreName, genres) => {
  const selectedGenre = genres.filter((genre) => genreName === genre.name)
  return selectedGenre[0]
}
