import React from 'react'
import { FiXSquare } from 'react-icons/fi'

import { useGameData } from '../hooks/GameData';

import {
  Container,
  OverlayBackground,
  ContentCard,
  TopBar,
  Content,
  ConfigItem,
  ConfigButton
} from './styles/ConfigWindow';

const ConfigWindow = () => {
  const {
    darkTheme,
    difficultyLevel,
    configWindowOpen,
    handleThemeChange,
    setConfigWindowOpen,
    handleDifficultyChange,
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
          <ConfigItem>
            <h3>Game Difficulty</h3>

            <section>
              <ConfigButton
                type="button"
                onClick={() => handleDifficultyChange('easy')}
                active={difficultyLevel === 'easy'}
              >
                Easy
              </ConfigButton>

              <ConfigButton
                type="button"
                onClick={() => handleDifficultyChange('medium')}
                active={difficultyLevel === 'medium'}
              >
                Medium
              </ConfigButton>

              <ConfigButton
                type="button"
                onClick={() => handleDifficultyChange('hard')}
                active={difficultyLevel === 'hard'}
              >
                Hard
              </ConfigButton>

              <ConfigButton
                type="button"
                onClick={() => handleDifficultyChange('expert')}
                active={difficultyLevel === 'expert'}
              >
                Expert
              </ConfigButton>
            </section>
          </ConfigItem>

          <ConfigItem>
            <h3>Color Theme</h3>

            <section>
              <ConfigButton
                type="button"
                onClick={() => handleThemeChange(false)}
                active={!darkTheme}
              >
                Light
              </ConfigButton>

              <ConfigButton
                type="button"
                onClick={() => handleThemeChange(true)}
                active={darkTheme}
              >
                Dark
              </ConfigButton> 
            </section>
          </ConfigItem>

        </Content>

      </ContentCard>
    </Container>
  );
}



export default ConfigWindow