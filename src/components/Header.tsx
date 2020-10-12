import React from 'react'
import { Container, Title } from './styles/Header';

interface IHeaderProps {
  appName: string
  appDescription: string
}

const Header = ({ appName, appDescription }: IHeaderProps) => (
  <Container>
    <Title>
      <h1>{appName}</h1>
      <h2>{appDescription}</h2>
    </Title>
  </Container>
)

export default Header
