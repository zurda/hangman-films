import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';

type DifficultyModes = 'easy' | 'medium' | 'hard' | 'expert';

interface IGameData {
  darkTheme: boolean;
  alreadyPlayed: string[];
  difficultyLevel: DifficultyModes;
}

interface GameDataContextData {
  darkTheme: boolean;
  numberOfLives: number;
  alreadyPlayed: string[];
  configWindowOpen: boolean;
  difficultyLevel: DifficultyModes;
  saveMovieId(id: string): Promise<void>;
  setConfigWindowOpen(newStatus: boolean): void;
  handleThemeChange(active: boolean): Promise<void>;
  handleDifficultyChange(mode: DifficultyModes): void;
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

      if (
        gameData.alreadyPlayed 
        && gameData.difficultyLevel 
        && gameData.darkTheme
      ) {
        return JSON.parse(storedData) as IGameData;
      }
    }

    return {
      alreadyPlayed: [],
      difficultyLevel: 'medium',
      darkTheme: false,
    };
  });

  const numberOfLives = useMemo(() => {
    if (!data.difficultyLevel) {
      return 7;
    }
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
      updateGameData(newData);
    }, [data, updateGameData]);

  const handleThemeChange = useCallback( 
    async (active: boolean): Promise<void> => {
      const newData = { ...data, darkTheme: active };
      updateGameData(newData); 
    },[data, updateGameData]);

  // Using Promise because in the future this data will be saved in a database
  const saveMovieId = useCallback(async (id: string): Promise<void> => {
    const newAlreadyPlayedList = [...data.alreadyPlayed, id];
    const newData = { ...data, alreadyPlayed: newAlreadyPlayedList };

    updateGameData(newData)
  }, [data, updateGameData]);

  return (
    <GameDataContext.Provider
      value={{
        darkTheme: data.darkTheme,
        alreadyPlayed: data.alreadyPlayed,
        difficultyLevel: data.difficultyLevel,
        numberOfLives,
        configWindowOpen,
        handleDifficultyChange,
        setConfigWindowOpen,
        handleThemeChange,
        saveMovieId,
      }}
    >
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
