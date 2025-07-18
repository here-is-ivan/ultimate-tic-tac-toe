import { useState } from 'react';

import BluredBackground from '../components/BluredBackground';
import Board from '../components/PlayBoard';
import PlayerBoardHeader from '../components/PlayerBoardHeader';
import type { CellValues } from '../types';
import HelperButtonts from '../components/HelperButtonts';
import RestartGameScreen from '../components/RestartGameScreen';
import TutorialScreen from '../components/TutorialScreen';

const PlayBoardPage = () => {
  const [isCrossTurn, setIsCrossTurn] = useState<boolean>(false);
  const [crossScore, setCrossScore] = useState<number>(0);
  const [circleScore, setCircleScore] = useState<number>(0);
  const [globalWinner, setGlobalWinner] = useState<CellValues>('');
  const [isGameFinished, setIsGameFinished] = useState(false)

  const [isRestartWindowOpen, setIsRestartWindowOpen] = useState(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  return (
    <>
      <RestartGameScreen
        isRestartWindowOpen={isRestartWindowOpen}
        setIsRestartWindowOpen={setIsRestartWindowOpen}
      />
      <TutorialScreen
        isTutorialOpen={isTutorialOpen}
        setIsTutorialOpen={setIsTutorialOpen}
      />
      <div className='w-dvw h-dvh flex flex-col justify-around lg:justify-center lg:flex-row-reverse'>
        <PlayerBoardHeader
          isCrossTurn={isCrossTurn}
          crossScore={crossScore}
          circleScore={circleScore}
          globalWinner={globalWinner}
          setIsRestartWindowOpen={setIsRestartWindowOpen}
          setIsTutorialOpen={setIsTutorialOpen}
          isGameFinished={isGameFinished}
        />
        <Board
          isCrossTurn={isCrossTurn}
          setIsCrossTurn={setIsCrossTurn}
          crossScore={crossScore}
          setCrossScore={setCrossScore}
          circleScore={circleScore}
          setCircleScore={setCircleScore}
          globalWinner={globalWinner}
          setGlobalWinner={setGlobalWinner}
          setIsGameFinished={setIsGameFinished}
        />
        <div className='sm:hidden mx-auto'>
          <HelperButtonts
            setIsRestartWindowOpen={setIsRestartWindowOpen}
            setIsTutorialOpen={setIsTutorialOpen}
          />
        </div>
      </div>
      <BluredBackground />
    </>
  );
};

export default PlayBoardPage;
