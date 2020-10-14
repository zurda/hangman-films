import React from 'react';

import { GameDataProvider } from './GameData';

const AppProvider: React.FC = ({ children }) => (
  <GameDataProvider>
    {children}
  </GameDataProvider>
);

export default AppProvider;