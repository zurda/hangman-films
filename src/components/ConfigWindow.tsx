import React from 'react'
import { FiXSquare } from 'react-icons/fi'

import { useGameData } from '../hooks/GameData';

import {
  Container,
  OverlayBackground,
  ContentCard,
  TopBar,
  Content,
  GameDifficulty,
  DifficultyButton
} from './styles/ConfigWindow';

const ConfigWindow = () => {
  const {
    difficultyLevel,
    configWindowOpen,
    setConfigWindowOpen,
    handleDifficultyChange
  } = useGameData();

  return (
    <Container active={configWindowOpen}>
      <OverlayBackground
        type="button"
        onClick={() => setConfigWindowOpen(false)}
      />

      <ContentCard>
        <TopBar>
          <h2>Game Configuration</h2>
          <button type="button" onClick={() => setConfigWindowOpen(false)}>
            <FiXSquare size="24" />
          </button>
        </TopBar>

        <Content>
          <GameDifficulty>
            <h3>Game Difficulty</h3>

            <section>
              <DifficultyButton
                type="button"
                onClick={() => handleDifficultyChange('easy')}
                active={difficultyLevel === 'easy'}
              >
                Easy
              </DifficultyButton>

              <DifficultyButton
                type="button"
                onClick={() => handleDifficultyChange('medium')}
                active={difficultyLevel === 'medium'}
              >
                Medium
              </DifficultyButton>

              <DifficultyButton
                type="button"
                onClick={() => handleDifficultyChange('hard')}
                active={difficultyLevel === 'hard'}
              >
                Hard
              </DifficultyButton>

              <DifficultyButton
                type="button"
                onClick={() => handleDifficultyChange('expert')}
                active={difficultyLevel === 'expert'}
              >
                Expert
              </DifficultyButton>
            </section>
          </GameDifficulty>

        </Content>

      </ContentCard>
    </Container>
  );
}



export default ConfigWindow