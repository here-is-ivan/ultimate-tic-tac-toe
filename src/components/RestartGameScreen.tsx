const RestartGameScreen = ({
  isRestartWindowOpen,
  setIsRestartWindowOpen,
}: {
  isRestartWindowOpen: boolean;
  setIsRestartWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isRestartWindowOpen) return null;

  return (
    <div className='absolute w-dvw h-full bg-[#00000070] backdrop-blur-md z-50 flex flex-col items-center gap-8'>
      <p className='font-bold text-4xl text-white mt-20'>RESTART?</p>
      <div className='flex flex-col justify-center items-center gap-4'>
        <button
          onClick={() => setIsRestartWindowOpen(false)}
          className='bg-[var(--primary-blue)] btn-primary'
        >
          GO BACK
        </button>
        <button
          onClick={() => window.location.reload()}
          className='bg-[var(--primary-red)] btn-primary'
        >
          YES
        </button>
      </div>
    </div>
  );
};

export default RestartGameScreen;
