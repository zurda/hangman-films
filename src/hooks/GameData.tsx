import React, { createContext, useCallback, useState, useContext } from 'react';

interface IGameData {
  alreadyPlayed: string[];
}

interface GameDataContextData {
  alreadyPlayed: string[];
  saveMovieId(id: string): Promise<void>;
}

const GameDataContext = createContext<GameDataContextData>(
  {} as GameDataContextData
);

const GameDataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IGameData>(() => {
    const storedData = localStorage.getItem('@HangmanReact:gameData');

    if (storedData) {
      return JSON.parse(storedData) as IGameData;
    }

    return {
      alreadyPlayed: [],
    };
  });

  //Using Promise because in the future this data will be saved in a database
  const saveMovieId = useCallback(async (id: string): Promise<void> => {
    const newAlreadyPlayedList = [...data.alreadyPlayed, id];

    const newData = { ...data, alreadyPlayed: newAlreadyPlayedList };

    localStorage.setItem('@HangmanReact:gameData', JSON.stringify(newData));

    setData(newData);
  }, [data]);

  return (
    <GameDataContext.Provider
      value={{ alreadyPlayed: data.alreadyPlayed, saveMovieId }}
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
