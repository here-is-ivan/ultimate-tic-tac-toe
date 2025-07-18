import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ImCross } from 'react-icons/im';
import { FaDotCircle } from 'react-icons/fa';

export const CellShape = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { scale: 0.8, opacity: 0, y: 8 },
          { scale: 1, opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' }
        );
      }
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className='w-[70%] h-[70%] flex items-center justify-center'>
      {children}
    </div>
  );
};

export const CellCircleShape = () => {
  return (
    <CellShape>
      <div className='w-full h-full text-[var(--primary-blue)]'>
        <FaDotCircle className='w-full h-full' />
      </div>
    </CellShape>
  );
};

export const CellCrossShape = () => {
  return (
    <CellShape>
      <div className='w-full h-full text-[var(--primary-red)]'>
        <ImCross className='w-full h-full' />
      </div>
    </CellShape>
  );
};

export const SubgridCircleShape = () => {
  return (
    <div className='absolute w-full h-full z-10 flex justify-center items-center bg-[#00000020] backdrop-blur-sm rounded-md'>
      <CellCircleShape />
    </div>
  );
};

export const SubgridCrossShape = () => {
  return (
    <div className='absolute w-full h-full z-10 flex justify-center items-center bg-[#00000020] backdrop-blur-sm rounded-md'>
      <CellCrossShape />
    </div>
  );
};

export const BigGridCircleShape = () => {
  return (
    <div className='absolute w-full h-full z-20 flex justify-center items-center bg-[#00000010] backdrop-blur-lg'>
      <CellCircleShape />
    </div>
  );
};

export const BigGridCrossShape = () => {
  return (
    <div className='absolute w-full h-full z-20 flex justify-center items-center bg-[#00000010] backdrop-blur-lg'>
      <CellCrossShape />
    </div>
  );
};
