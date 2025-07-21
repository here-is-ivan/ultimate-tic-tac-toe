import React from 'react';

interface GameSettingsContextType {
  isAIMode: boolean;
  setIsAIMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameSettingsContext = React.createContext<GameSettingsContextType>(
  {
    isAIMode: false,
    setIsAIMode: () => {},
  }
);
