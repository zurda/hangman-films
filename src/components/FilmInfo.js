import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 600px) {
  flex-direction: row;
  justify-content: space-between;
}
`

const Info = styled.p`
  margin: 16px 32px;
`

const Img = styled.img`
  width: 154px;
`

const FilmInfo = ({ film }) => (
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
