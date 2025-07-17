import { Route, Routes } from 'react-router-dom';
import StartScreen from './pages/StartScreenPage';
import PlayBoardPage from './pages/PlayBoardPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartScreen />} />
      <Route path='/play-board' element={<PlayBoardPage />} />
    </Routes>
  );
};

export default App;
