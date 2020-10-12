import React from 'react'
import { Container, Img, Info } from './styles/FilmInfo';

const FilmInfo = ({ film }: any) => (
  <Container>
    <Img
      src={`http://image.tmdb.org/t/p/w154${film.poster_path}`}
      alt="Film poster"
    />
    {film.overview || film.tagline ? (
      <Info>{film.overview || film.tagline}</Info>
    ) : null}
  </Container>
)

export default FilmInfo
