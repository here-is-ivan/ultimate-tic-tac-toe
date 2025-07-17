import React, { useState, useEffect, useRef } from 'react';

const Board = () => {
  const [dimension, setDimension] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      className='h-5/6 lg:h-full lg:w-2/3 flex justify-center items-center'
      ref={boardRef}
    >
      <div
        className='bg-gray-300 rounded-lg flex flex-wrap justify-around items-center'
        style={{ width: dimension, height: dimension }}
      >
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
        <div className='w-[31.5%] aspect-square bg-gray-400 rounded-md flex flex-wrap justify-around items-center shadow-lg'>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
          <div className='w-[30.5%] aspect-square bg-gray-500 rounded-sm cursor-pointer'></div>
        </div>
      </div>
    </div>
  );
};

export default Board;
