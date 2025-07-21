import { BsPeopleFill, BsRobot } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import BluredBackground from '../components/BluredBackground';
import { useRef, useContext } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GameSettingsContext } from '../GameSettingsContext';

const StartScreen = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const { setIsAIMode } = useContext(GameSettingsContext);

  useGSAP(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll('span');
    gsap.set(letters, { opacity: 0, x: 40, scale: 0.8 });
    gsap.to(letters, {
      opacity: 1,
      x: 0,
      scale: 1,
      stagger: { each: 0.02, from: 'start' },
      ease: 'back.out(2)',
    });

    if (buttonsRef.current) {
      const btns = buttonsRef.current.children;
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

  const goToPlayBoard = (aiMode: boolean) => {
    setIsAIMode(aiMode);
    sessionStorage.setItem('isAIMode', aiMode.toString());
    navigate('/play-board');
  };

  return (
    <>
      <div className='flex flex-col h-dvh'>
        <h1
          ref={titleRef}
          className='my-8 mx-6 text-5xl text-center font-bold flex justify-center gap-4 flex-wrap'
        >
          <div className='flex'>
            <span>U</span>
            <span>l</span>
            <span>t</span>
            <span>i</span>
            <span>m</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
          </div>
          <div className='flex'>
            <span>T</span>
            <span>i</span>
            <span>c</span>
          </div>
          <div className='flex'>
            <span>T</span>
            <span>a</span>
            <span>c</span>
          </div>
          <div className='flex'>
            <span>T</span>
            <span>o</span>
            <span>e</span>
          </div>
        </h1>
        <div
          ref={buttonsRef}
          className='flex-1 w-dvw flex flex-col items-center justify-center gap-8'
        >
          <button
            onClick={() => goToPlayBoard(false)}
            className='bg-[var(--primary-blue)] btn-primary'
          >
            <BsPeopleFill size={24} />
            <p>2 Players</p>
          </button>
          <button
            onClick={() => goToPlayBoard(true)}
            className='bg-[var(--primary-red)] btn-primary'
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
