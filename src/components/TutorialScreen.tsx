import { IoArrowBackSharp } from 'react-icons/io5';

const TutorialScreen = ({
  isTutorialOpen,
  setIsTutorialOpen,
}: {
  isTutorialOpen: boolean;
  setIsTutorialOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isTutorialOpen) return null;

  return (
    <div className='absolute w-dvw h-full bg-[#00000070] backdrop-blur-md z-50 flex justify-center items-center'>
      <div className='flex flex-col gap-12 items-center max-w-2xl'>
        <div
          onClick={() => setIsTutorialOpen(false)}
          className='absolute left-4 top-4 text-4xl cursor-pointer text-white'
        >
          <IoArrowBackSharp />
        </div>
        <p className='font-bold text-4xl text-white'>Tutorial</p>
        <p className='text-white mx-8 leading-8'>
          Your Ultimate Tic-Tac-Toe: It's a game where you play on nine small
          Tic-Tac-Toe boards that make up one big board. You can choose to play
          anywhere, and you win by getting three small boards in a line on the
          big board, or by just winning more small boards than your opponent.
        </p>
        <button
          onClick={() => setIsTutorialOpen(false)}
          className='bg-[var(--primary-blue)] btn-primary'
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default TutorialScreen;
