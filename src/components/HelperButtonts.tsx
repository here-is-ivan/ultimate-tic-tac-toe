// import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineRestartAlt } from 'react-icons/md';

const HelperButtonts = () => {
  return (
    <div className='flex gap-4'>
      <div className='w-16 h-16 bg-black text-white flex justify-center items-center text-3xl cursor-pointer rounded-lg'>
        <MdOutlineRestartAlt />
      </div>
      <div className='w-16 h-16 bg-black text-white flex justify-center items-center text-3xl cursor-pointer rounded-lg'>
        <FaQuestion />
      </div>
    </div>
  );
};

export default HelperButtonts;
