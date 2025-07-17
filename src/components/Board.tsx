import React, { useState, useEffect, useRef } from 'react';
import { ImCross } from 'react-icons/im';
import { FaDotCircle } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Board = ({
  isCrossTurn,
  setIsCrossTurn,
}: {
  isCrossTurn: boolean;
  setIsCrossTurn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dimension, setDimension] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [gridValues, setGridValues] = useState([
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ]);

  // const [bigGridValues, setBigGridValues] = useState([
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  // ]);

  useEffect(() => {
    const calculateDimension = () => {
      if (boardRef.current) {
        const width = boardRef.current.clientWidth;
        const height = boardRef.current.clientHeight;
        setDimension(Math.min(width, height) * 0.95);
      }
    };

    calculateDimension();
    window.addEventListener('resize', calculateDimension);

    return () => window.removeEventListener('resize', calculateDimension);
  }, []);

  useGSAP(() => {
    if (cellRefs.current.length === 81) {
      gsap.set(cellRefs.current, { opacity: 0, scale: 0.8 });
      gsap.to(cellRefs.current, {
        opacity: 1,
        scale: 1,
        delay: 0.1,
        stagger: {
          each: 0.005,
          from: 'random',
        },
        ease: 'power3.out',
      });
    }
  }, [dimension]);

  const fillCell = (girdIndex: number, cellIndex: number) => {
    if (gridValues[girdIndex][cellIndex] !== '') return;

    const shape = isCrossTurn ? 'cross' : 'circle';
    const newGrid = [...gridValues];
    newGrid[girdIndex][cellIndex] = shape;

    setGridValues(newGrid);
    setIsCrossTurn(!isCrossTurn);
  };

  return (
    <div
      className='h-5/6 lg:h-full aspect-square flex justify-center items-center'
      ref={boardRef}
    >
      <div
        className='bg-[var(--primary-gray)] rounded-lg flex flex-wrap justify-around items-center'
        style={{ width: dimension, height: dimension }}
      >
        {gridValues.map((grid, gridIndex) => {
          return (
            <div
              key={gridIndex}
              className='w-[31.5%] aspect-square bg-white rounded-md flex flex-wrap justify-around items-center shadow-md'
            >
              {grid.map((cell, cellIndex) => {
                const flatIndex = gridIndex * 9 + cellIndex;
                return (
                  <div
                    key={cellIndex}
                    ref={(el) => {
                      cellRefs.current[flatIndex] = el;
                    }}
                    onClick={() => fillCell(gridIndex, cellIndex)}
                    className={`${
                      cell !== '' ? '' : 'cursor-pointer'
                    } w-[30.5%] aspect-square bg-[var(--primary-gray)] rounded-sm flex justify-center items-center`}
                  >
                    {cell === 'circle' && <Circle />}
                    {cell === 'cross' && <Cross />}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Circle = () => {
  return (
    <CellShape>
      <div className='w-full h-full text-[var(--primary-blue)]'>
        <FaDotCircle className='w-full h-full' />
      </div>
    </CellShape>
  );
};

export const Cross = () => {
  return (
    <CellShape>
      <div className='w-full h-full text-[var(--primary-red)]'>
        <ImCross className='w-full h-full' />
      </div>
    </CellShape>
  );
};

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

export default Board;
