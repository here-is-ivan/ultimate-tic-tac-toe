import { Route, Routes } from 'react-router-dom';
import StartScreen from './pages/StartScreenPage';
import PlayBoardPage from './pages/PlayBoardPage';

const App = () => {
  return (
    <Routes>
      <Route path='/ultimate-tic-tac-toe' element={<StartScreen />} />
      <Route path='/ultimate-tic-tac-toe/play-board' element={<PlayBoardPage />} />
    </Routes>
  );
};

export default App;
