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
        <Route path='/ultimate-tic-tac-toe' element={<StartScreen />} />
        <Route
          path='/ultimate-tic-tac-toe/play-board'
          element={<PlayBoardPage />}
        />
      </Routes>
    </GameSettingsContext>
  );
};

export default App;
