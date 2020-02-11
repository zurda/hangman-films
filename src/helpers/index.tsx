export const upprecaseLettersArr = [...Array(26)].map((q, w) =>
  String.fromCharCode(w + 65)
)

export const defaultLetters = [
  ' ',
  "'",
  ':',
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "?"
]

export const allLetters = [
  ...defaultLetters,
  ...upprecaseLettersArr,
  ...upprecaseLettersArr.map((letter) => letter.toLowerCase())
]

export const getRandom = (max: number) => Math.floor(max * Math.random())

export const testFilm = (str: string) => {
  const regex = /^[A-Za-z ]+$/
  return regex.test(str)
}

export const getGenreId = (genreName: any, genres: any) => {
  const selectedGenre = genres.filter((genre: any) => genreName === genre.name)
  return selectedGenre[0].id
}
