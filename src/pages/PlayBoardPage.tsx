import { useState } from 'react';

import BluredBackground from '../components/BluredBackground';
import Board from '../components/Board';
import PlayerBoardHeader from '../components/PlayerBoardHeader';

const PlayBoardPage = () => {
  const [isCrossTurn, setIsCrossTurn] = useState<boolean>(false);
  const [crossScore, setCrossScore] = useState<number>(0);
  const [circleScore, setCircleScore] = useState<number>(0);

  return (
    <>
      <div className='w-dvw h-dvh flex justify-center flex-col lg:flex-row-reverse'>
        <PlayerBoardHeader
          isCrossTurn={isCrossTurn}
          crossScore={crossScore}
          circleScore={circleScore}
        />
        <Board
          isCrossTurn={isCrossTurn}
          setIsCrossTurn={setIsCrossTurn}
          crossScore={crossScore}
          setCrossScore={setCrossScore}
          circleScore={circleScore}
          setCircleScore={setCircleScore}
        />
      </div>
      <BluredBackground />
    </>
  );
};

export default PlayBoardPage;
