import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';

import ConfigWindow from '../components/ConfigWindow';

type DifficultyModes = 'easy' | 'medium' | 'hard' | 'expert';

interface IGameData {
  alreadyPlayed: string[];
  difficultyLevel: DifficultyModes;
}

interface GameDataContextData {
  alreadyPlayed: string[];
  difficultyLevel: DifficultyModes;
  numberOfLives: number;
  configWindowOpen: boolean;
  setConfigWindowOpen(newStatus: boolean): void;
  handleDifficultyChange(mode: DifficultyModes): void;
  saveMovieId(id: string): Promise<void>;
}

const GameDataContext = createContext<GameDataContextData>(
  {} as GameDataContextData
);

const GameDataProvider: React.FC = ({ children }) => {
  const [configWindowOpen, setConfigWindowOpen] = useState(false);
  const [data, setData] = useState<IGameData>(() => {
    const storedData = localStorage.getItem('@HangmanReact:gameData');

    if (storedData) {
      const gameData = JSON.parse(storedData) as IGameData;

      if (gameData.alreadyPlayed && gameData.difficultyLevel) {
        return JSON.parse(storedData) as IGameData;
      }
    }

    return {
      alreadyPlayed: [],
      difficultyLevel: 'medium',
    };
  });

  const numberOfLives = useMemo(() => {
    if (!data.difficultyLevel) return 7;
    switch (data.difficultyLevel) {
      case 'easy':
        return 9;
      case 'medium':
        return 7;
      case 'hard':
        return 4;
      case 'expert':
        return 2;
      default:
        return 7;
    }
  }, [data.difficultyLevel]);

  const updateGameData = useCallback((newData: IGameData) => {
    localStorage.setItem('@HangmanReact:gameData', JSON.stringify(newData));
    setData(newData);
  }, []);

  const handleDifficultyChange = useCallback(
    async (mode: DifficultyModes): Promise<void> => {
      const newData = { ...data, difficultyLevel: mode };
      updateGameData(newData)
    }, [data, updateGameData]);

  // Using Promise because in the future this data will be saved in a database
  const saveMovieId = useCallback(async (id: string): Promise<void> => {
    const newAlreadyPlayedList = [...data.alreadyPlayed, id];
    const newData = { ...data, alreadyPlayed: newAlreadyPlayedList };

    updateGameData(newData)
  }, [data, updateGameData]);

  return (
    <GameDataContext.Provider
      value={{
        alreadyPlayed: data.alreadyPlayed,
        difficultyLevel: data.difficultyLevel,
        numberOfLives,
        configWindowOpen,
        setConfigWindowOpen,
        handleDifficultyChange,
        saveMovieId
      }}
    >
      <ConfigWindow />
      {children}
    </GameDataContext.Provider>
  );
};

function useGameData(): GameDataContextData {
  const context = useContext(GameDataContext);

  if (!context) {
    throw new Error('useGameData must be used within an GameDataProvider');
  }

  return context;
}

export { GameDataProvider, useGameData };
