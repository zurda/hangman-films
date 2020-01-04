import React from 'react'
import styled from "@emotion/styled";
import { colours } from '../style/shared'

const Container = styled.header`
  width: 100%; 
  color: ${colours.darkGrey};
  font-weight: bold;
  padding: 16px 32px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; 
  background-color: ${colours.lightGrey};
  height: calc(100vh - 80px);
`

const GameBoard = ({ children }) => <Container>{children}</Container>

export default GameBoard 