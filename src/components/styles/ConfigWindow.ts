import styled from 'styled-components';

interface ContainerProps {
  active: boolean;
}

interface DifficultyButtonProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  display: ${(props) => props.active ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;

export const OverlayBackground = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0,0,0,0.55);

  z-index: 1;

  cursor: default;
`;

export const ContentCard = styled.div`
  width: 95%;

  max-width: 500px;

  background-color: #fff;

  z-index: 2;

  border-radius: 8px;

  box-shadow: ${props => props.theme.utils.boxShadow};

  overflow: hidden;
`;

export const TopBar = styled.div`
  width: 100%;

  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    padding-left: 16px;
    font-size: 20px;
  }

  button {
    margin: 4px 8px 2px 2px;
    background-color: transparent;
    border: none;
  }
`;

export const Content = styled.div`
  padding: 16px;

  h3 {
    margin-bottom: 8px;
  }
`;

export const GameDifficulty = styled.div`
  margin: 16px 0;
`;

export const DifficultyButton = styled.button<DifficultyButtonProps>`
  padding: 4px 8px;

  border: 0;
  border-radius: 8px;

  font-weight: 500;
  color: #fff;

  background-color: ${(props) => {
    return props.active
      ? props.theme.colors.darker
      : props.theme.colors.mediumLight;
  }};

  &+button{
    margin-left: 8px;
  }
`;