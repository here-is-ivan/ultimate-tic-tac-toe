// import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineRestartAlt } from 'react-icons/md';

const HelperButtonts = ({
  setIsRestartWindowOpen,
  setIsTutorialOpen,
}: {
  setIsRestartWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTutorialOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className='flex gap-4'>
      <div
        onClick={() => setIsRestartWindowOpen(true)}
        className='w-16 h-16 text-white bg-[var(--primary-red)] flex justify-center items-center text-3xl cursor-pointer rounded-lg shadow-sm hover:scale-110 transition-transform group'
      >
        <MdOutlineRestartAlt className='group-hover:-rotate-90 transition-transform' />
      </div>
      <div
        onClick={() => setIsTutorialOpen(true)}
        className='w-16 h-16 text-white bg-[var(--primary-blue)] flex justify-center items-center text-3xl cursor-pointer rounded-lg shadow-sm hover:scale-110 transition-transform'
      >
        <FaQuestion />
      </div>
    </div>
  );
};

export default HelperButtonts;
