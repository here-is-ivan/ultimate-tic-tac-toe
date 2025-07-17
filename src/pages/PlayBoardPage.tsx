import { useState } from 'react';

import BluredBackground from '../components/BluredBackground';
import Board from '../components/Board';
import PlayerBoardHeader from '../components/PlayerBoardHeader';
import type { CellValues } from '../types';
import HelperButtonts from '../components/HelperButtonts';

const PlayBoardPage = () => {
  const [isCrossTurn, setIsCrossTurn] = useState<boolean>(false);
  const [crossScore, setCrossScore] = useState<number>(0);
  const [circleScore, setCircleScore] = useState<number>(0);
  const [globalWinner, setGlobalWinner] = useState<CellValues>('');

  return (
    <>
      <div className='w-dvw h-dvh flex flex-col justify-around lg:justify-center lg:flex-row-reverse'>
        <PlayerBoardHeader
          isCrossTurn={isCrossTurn}
          crossScore={crossScore}
          circleScore={circleScore}
          globalWinner={globalWinner}
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
        />
        <div className='sm:hidden mx-auto'>
          <HelperButtonts />
        </div>
      </div>
      <BluredBackground />
    </>
  );
};

export default PlayBoardPage;
