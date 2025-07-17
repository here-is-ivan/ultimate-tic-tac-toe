import { ImCross } from 'react-icons/im';
import { FaDotCircle } from 'react-icons/fa';

import type { CellValues } from '../types';
import HelperButtonts from './HelperButtonts';

interface PlayerBoardHeaderProps {
  isCrossTurn: boolean;
  crossScore: number;
  circleScore: number;
  globalWinner: CellValues;
  setIsRestartWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTutorialOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerBoardHeader = ({
  isCrossTurn,
  crossScore,
  circleScore,
  globalWinner,
  setIsRestartWindowOpen,
  setIsTutorialOpen,
}: PlayerBoardHeaderProps) => {
  return (
    <div className='m-4 flex items-center justify-center gap-4 lg:flex-col lg:justify-between'>
      <header className=' flex flex-col justify-center'>
        <div className='flex items-center flex-row lg:flex-col'>
          <div
            className={`h-24 lg:h-32 flex items-center gap-2 backdrop-blur-lg text-[var(--primary-red)] text-3xl bg-[var(--transparent-red)] w-1/2 lg:w-full p-8 rounded-3xl border-4 border-[var(--primary-red)] border-r-0 rounded-r-none lg:border-b-0 lg:rounded-b-none lg:border-r-4 lg:rounded-r-3xl transition-all ${
              isCrossTurn ? '' : 'border-transparent'
            } ${globalWinner !== '' ? 'border-transparent' : ''}
          `}
          >
            <div className='flex items-center gap-1'>
              <ImCross size={24} />
              <span>:</span>
            </div>
            {globalWinner === '' && (
              <span className='font-bold'>{crossScore}</span>
            )}
            {globalWinner === 'cross' && <span className='font-bold'>🥳</span>}
            {globalWinner === 'circle' && <span className='font-bold'>😭</span>}
          </div>
          <div
            className={`h-24 lg:h-32 flex items-center gap-2 backdrop-blur-lg text-[var(--primary-blue)] text-3xl bg-[var(--transparent-blue)] w-1/2 lg:w-full p-8 rounded-3xl border-4 border-[var(--primary-blue)] border-l-0 rounded-l-none lg:border-t-0 lg:rounded-t-none lg:border-l-4 lg:rounded-b-3xl transition-all ${
              isCrossTurn ? 'border-transparent' : ''
            } ${globalWinner !== '' ? 'border-transparent' : ''}`}
          >
            <div className='flex items-center gap-1'>
              <FaDotCircle />
              <span>:</span>
            </div>
            {globalWinner === '' && (
              <span className='font-bold'>{circleScore}</span>
            )}
            {globalWinner === 'cross' && <span className='font-bold'>😭</span>}
            {globalWinner === 'circle' && <span className='font-bold'>🥳</span>}
          </div>
        </div>
      </header>
      <div className='hidden sm:block'>
        <HelperButtonts
          setIsRestartWindowOpen={setIsRestartWindowOpen}
          setIsTutorialOpen={setIsTutorialOpen}
        />
      </div>
    </div>
  );
};

export default PlayerBoardHeader;
