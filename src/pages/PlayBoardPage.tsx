import Board from '../components/Board';
import PlayerBoardHeader from '../components/PlayerBoardHeader';

const PlayBoardPage = () => {
  return (
    <div className='w-dvw h-dvh flex justify-center flex-col lg:flex-row-reverse'>
      <PlayerBoardHeader />
      <Board />
    </div>
  );
};

export default PlayBoardPage;
