import React from 'react'
import styled from '@emotion/styled'
import { colours } from '../style/shared'

const Container = styled.div`
  width: 100%;
  color: ${colours.maastrichtBlue};
  padding: 16px 32px;
  background-color: ${colours.lightest};
  min-height: calc(100vh - 130px);
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const GameBoard = ({ children }) => (
  <Container>
    <ContentContainer>{children}</ContentContainer>
  </Container>
)

export default GameBoard
