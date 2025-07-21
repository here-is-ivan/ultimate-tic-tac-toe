import { Route, Routes } from 'react-router-dom';
import { GameSettingsContext } from './GameSettingsContext';

import StartScreen from './pages/StartScreenPage';
import PlayBoardPage from './pages/PlayBoardPage';
import { useState } from 'react';

const App = () => {
  const [isAIMode, setIsAIMode] = useState(false);

  return (
    <GameSettingsContext value={{ isAIMode, setIsAIMode }}>
      <Routes>
        <Route path='' element={<StartScreen />} />
        <Route
          path='/play-board'
          element={<PlayBoardPage />}
        />
      </Routes>
    </GameSettingsContext>
  );
};

export default App;
