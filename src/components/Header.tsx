import React from 'react'
import { Container, Title } from './styles/Header';

import { useGameData } from "../hooks/GameData";

import { FiSettings } from 'react-icons/fi'

interface IHeaderProps {
  appName: string
  appDescription: string
}

const Header = ({ appName, appDescription }: IHeaderProps) => {
  const { setConfigWindowOpen } = useGameData();

  return (
    <Container>
      <Title>
        <h1>{appName}</h1>
        <h2>{appDescription}</h2>
      </Title>
      <button type="button" onClick={() => setConfigWindowOpen(true)}>
        <FiSettings size="24" color="#fff" />
      </button>
    </Container>
  )
}

export default Header
