import { BsPeopleFill, BsRobot } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import BluredBackground from '../components/BluredBackground';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const StartScreen = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll('.title-letter');
    gsap.set(letters, { opacity: 0, x: 40, scale: 0.8 });
    gsap.to(letters, {
      opacity: 1,
      x: 0,
      scale: 1,
      stagger: { each: 0.02, from: 'start' },
      ease: 'back.out(2)',
    });

    if (buttonsRef.current) {
      const btns = buttonsRef.current.querySelectorAll('.start-btn');
      gsap.set(btns, { opacity: 0 });
      gsap.to(btns, {
        opacity: 1,
        delay: 0.2,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, []);

  const goToPlayBoard = () => {
    navigate('/ultimate-tic-tac-toe/play-board');
  };

  return (
    <>
      <div className='flex flex-col h-dvh'>
        <h1
          ref={titleRef}
          className='my-8 mx-6 text-5xl text-center font-bold flex justify-center gap-4 flex-wrap'
        >
          <div className='flex'>
            <span className='title-letter'>U</span>
            <span className='title-letter'>l</span>
            <span className='title-letter'>t</span>
            <span className='title-letter'>i</span>
            <span className='title-letter'>m</span>
            <span className='title-letter'>a</span>
            <span className='title-letter'>t</span>
            <span className='title-letter'>e</span>
          </div>
          <div className='flex'>
            <span className='title-letter'>T</span>
            <span className='title-letter'>i</span>
            <span className='title-letter'>c</span>
          </div>
          <div className='flex'>
            <span className='title-letter'>T</span>
            <span className='title-letter'>a</span>
            <span className='title-letter'>c</span>
          </div>
          <div className='flex'>
            <span className='title-letter'>T</span>
            <span className='title-letter'>o</span>
            <span className='title-letter'>e</span>
          </div>
        </h1>
        <div
          ref={buttonsRef}
          className='flex-1 w-dvw flex flex-col items-center justify-center gap-8'
        >
          <button
            onClick={goToPlayBoard}
            className='start-btn bg-[var(--primary-blue)] text-white font-bold text-2xl lg:text-xl p-6 lg:p-x rounded-lg cursor-pointer flex justify-center items-center gap-2 shadow-md hover:scale-110 transition-transform'
          >
            <BsPeopleFill size={24} />
            <p>2 Players</p>
          </button>
          <button
            onClick={goToPlayBoard}
            className='start-btn bg-[var(--primary-red)] text-white font-bold text-2xl lg:text-xl p-6 lg:p-x rounded-lg cursor-pointer flex justify-center items-center gap-2 shadow-md hover:scale-110 transition-transform'
          >
            <BsRobot size={24} />
            <p>Computer</p>
          </button>
        </div>
      </div>
      <BluredBackground />
    </>
  );
};

export default StartScreen;
