import { ImCross } from 'react-icons/im';
import { FaDotCircle } from 'react-icons/fa';

const PlayerBoardHeader = () => {
  return (
    <header className='h-1/6 lg:h-full lg:w-1/3 m-4 flex flex-col justify-center lg:justify-start'>
      <div className='flex items-center mb-6'>
        <div className='h-24 flex items-center gap-2 text-[var(--primary-red)] text-3xl bg-[var(--transparent-red)] w-1/2 p-8 rounded-l-3xl border-4 border-[var(--primary-red)] border-r-0'>
          <div className='flex items-center gap-1'>
            <ImCross size={24} />
            <span>:</span>
          </div>
          <span className='font-bold'>0</span>
        </div>
        <div className='h-24 flex items-center gap-2 text-[var(--primary-blue)] text-3xl bg-[var(--transparent-blue)] w-1/2 p-8 rounded-r-3xl border-4 border-[var(--primary-blue)] border-l-0'>
          <div className='flex items-center gap-1'>
            <FaDotCircle />
            <span>:</span>
          </div>
          <span className='font-bold'>0</span>
        </div>
      </div>
      <p className='hidden lg:block leading-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
        voluptatibus eveniet nam natus deleniti nemo maiores, eaque eligendi
        fuga perspiciatis repudiandae optio exercitationem hic tenetur, quidem
        facilis magni quaerat consequatur! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Harum voluptatibus eveniet nam natus
        deleniti nemo maiores, eaque eligendi fuga perspiciatis repudiandae
        optio exercitationem hic tenetur, quidem facilis magni quaerat
        consequatur!
      </p>
    </header>
  );
};

export default PlayerBoardHeader;
