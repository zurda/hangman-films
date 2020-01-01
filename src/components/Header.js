import React from 'react'
import styled from "@emotion/styled";

const Container = styled.header`
  width: 100%; 
  background-color: #FCF6B1;
  color: #E3170A;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding: 16px 32px;
`

const Heading = styled.h1`
margin: 0;
`

const Description = styled.p`
margin: 0;
color: #2D1E2F;
`

const Header = ({ appName, appDescription }) => (
  <Container>
    <Heading>{appName}</Heading>
    <Description>{appDescription}</Description>
  </Container>
)

export default Header 