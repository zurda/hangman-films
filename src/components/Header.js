import React from 'react'
import styled from "@emotion/styled";
import { colours } from '../style/shared'

const Container = styled.header`
  width: 100%; 
  background-color: ${colours.darkGrey};
  color: ${colours.lightGrey};
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding: 16px 32px;
`

const Heading = styled.h1`
margin: 0;
`

const Description = styled.p`
margin: 0;
color: ${colours.lightPink};
`

const Header = ({ appName, appDescription }) => (
  <Container>
    <Heading>{appName}</Heading>
    <Description>{appDescription}</Description>
  </Container>
)

export default Header 