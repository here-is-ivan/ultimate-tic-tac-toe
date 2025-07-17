import { ImCross } from 'react-icons/im';
import { FaDotCircle } from 'react-icons/fa';

const PlayerBoardHeader = () => {
  return (
    <header className='h-1/6 lg:h-auto m-4 flex flex-col justify-center'>
      <div className='flex items-center flex-row lg:flex-col'>
        <div className='h-24 lg:h-32 flex items-center gap-2 text-[var(--primary-red)] text-3xl bg-[var(--transparent-red)] w-1/2 lg:w-full p-8 rounded-3xl border-4 border-[var(--primary-red)] border-r-0 rounded-r-none lg:border-b-0 lg:rounded-b-none lg:border-r-4 lg:rounded-r-3xl'>
          <div className='flex items-center gap-1'>
            <ImCross size={24} />
            <span>:</span>
          </div>
          <span className='font-bold'>0</span>
        </div>
        <div className='h-24 lg:h-32 flex items-center gap-2 text-[var(--primary-blue)] text-3xl bg-[var(--transparent-blue)] w-1/2 lg:w-full p-8 rounded-3xl border-4 border-[var(--primary-blue)] border-l-0 rounded-l-none lg:border-t-0 lg:rounded-t-none lg:border-l-4 lg:rounded-b-3xl'>
          <div className='flex items-center gap-1'>
            <FaDotCircle />
            <span>:</span>
          </div>
          <span className='font-bold'>0</span>
        </div>
      </div>
    </header>
  );
};

export default PlayerBoardHeader;
