import { BsPeopleFill, BsRobot } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import BluredBackground from '../components/BluredBackground';

const StartScreen = () => {
  const navigate = useNavigate();

  const goToPlayBoard = () => {
    navigate('/play-board');
  };

  return (
    <>
      <div className='flex flex-col h-dvh'>
        <h1 className='my-8 mx-6 text-5xl text-center font-bold capitalize'>
          Ultimate Tic Tac Toe
        </h1>
        <div className='flex-1 w-dvw flex flex-col items-center justify-center gap-8'>
          <button
            onClick={goToPlayBoard}
            className='bg-[var(--primary-blue)] text-white font-bold text-2xl lg:text-xl p-6 lg:p-x rounded-lg cursor-pointer flex justify-center items-center gap-2 shadow-md hover:scale-110 transition-all'
          >
            <BsPeopleFill size={24} />
            <p>2 Players</p>
          </button>
          <button
            onClick={goToPlayBoard}
            className='bg-[var(--primary-red)] text-white font-bold text-2xl lg:text-xl p-6 lg:p-x rounded-lg cursor-pointer flex justify-center items-center gap-2 shadow-md hover:scale-110 transition-all'
          >
            <BsRobot size={24} />
            <p>Computer</p>
          </button>
        </div>
      </div>
      <BluredBackground />
    </>
  );
};

export default StartScreen;
