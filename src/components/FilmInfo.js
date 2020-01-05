import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Info = styled.p`
  margin: 16px 32px;
`

const FilmInfo = ({ film }) => (
  <Container>
    <img
      src={`http://image.tmdb.org/t/p/w154${film.poster_path}`}
      alt="Film poster"
    />
    {film.overview || film.tagline ? (
      <Info>{film.overview || film.tagline}</Info>
    ) : null}
  </Container>
)

export default FilmInfo
