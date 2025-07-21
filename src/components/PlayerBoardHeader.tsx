import { useRef } from 'react';
import gsap from 'gsap';
import { ImCross } from 'react-icons/im';
import { FaDotCircle } from 'react-icons/fa';

import type { CellValues } from '../types';
import HelperButtonts from './HelperButtonts';
import { useGSAP } from '@gsap/react';

interface PlayerBoardHeaderProps {
  isCrossTurn: boolean;
  crossScore: number;
  circleScore: number;
  globalWinner: CellValues;
  isGameFinished: boolean;
  setIsRestartWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTutorialOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerBoardHeader = ({
  isCrossTurn,
  crossScore,
  circleScore,
  globalWinner,
  isGameFinished,
  setIsRestartWindowOpen,
  setIsTutorialOpen,
}: PlayerBoardHeaderProps) => {
  const displayTurnBorderIndicator = globalWinner !== '' || isGameFinished;

  // Animation refs
  const counterRef = useRef<HTMLDivElement>(null);
  const helperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from([counterRef.current, helperRef.current], {
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className='m-4 flex items-center justify-center gap-4 lg:flex-col lg:justify-between'>
      <header className=' flex flex-col justify-center' ref={counterRef}>
        <div className='flex items-center flex-row lg:flex-col'>
          <div
            className={`h-24 lg:h-32 flex items-center gap-2 backdrop-blur-lg text-[var(--primary-red)] text-3xl bg-[var(--transparent-red)] w-1/2 lg:w-full p-8 rounded-3xl border-4 border-[var(--primary-red)] border-r-0 rounded-r-none lg:border-b-0 lg:rounded-b-none lg:border-r-4 lg:rounded-r-3xl transition-all ${
              isCrossTurn ? '' : 'border-transparent'
            } ${displayTurnBorderIndicator ? 'border-transparent' : ''}
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
            } ${displayTurnBorderIndicator ? 'border-transparent' : ''}`}
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
      <div ref={helperRef} className='hidden sm:block'>
        <HelperButtonts
          setIsRestartWindowOpen={setIsRestartWindowOpen}
          setIsTutorialOpen={setIsTutorialOpen}
        />
      </div>
    </div>
  );
};

export default PlayerBoardHeader;
