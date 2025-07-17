import { useState } from 'react';

import BluredBackground from '../components/BluredBackground';
import Board from '../components/Board';
import PlayerBoardHeader from '../components/PlayerBoardHeader';

const PlayBoardPage = () => {
  const [isCrossTurn, setIsCrossTurn] = useState<boolean>(false);
  
  return (
    <>
      <div className='w-dvw h-dvh flex justify-center flex-col lg:flex-row-reverse'>
        <PlayerBoardHeader isCrossTurn={isCrossTurn} />
        <Board isCrossTurn={isCrossTurn} setIsCrossTurn={setIsCrossTurn} />
      </div>
      <BluredBackground />
    </>
  );
};

export default PlayBoardPage;
