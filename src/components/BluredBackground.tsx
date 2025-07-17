import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ImCross } from 'react-icons/im';
import { FaDotCircle } from 'react-icons/fa';


const BluredBackground = () => {
  const NUM_SHAPES = 12;
  const shapesRef = useRef<{ id: number; top: number; left: number; size: number; isCross: boolean }[]>(
    Array.from({ length: NUM_SHAPES }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = 32 + Math.random() * 48;
      const isCross = Math.random() > 0.5;
      return { id: i, top, left, size, isCross };
    })
  );

  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!bgRef.current) return;
      const elements = bgRef.current.querySelectorAll('.bg-anim-el');
      // Set initial state with random rotation and scale
      elements.forEach((el) => {
        const rot = gsap.utils.random(-18, 18);
        const scl = gsap.utils.random(0.7, 0.95);
        gsap.set(el, { opacity: 0, y: 48, scale: scl, rotate: rot });
      });
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        stagger: {
          each: 0.05,
          from: 'random',
        },
        duration: 1.1,
        ease: 'elastic.out(1, 0.6)',
      });
    },
    { scope: bgRef }
  );

  return (
    <div
      ref={bgRef}
      className='absolute w-dvw h-dvh -z-10 top-0 left-0 opacity-60 blur-md overflow-hidden'
    >
      {shapesRef.current.map(({ id, top, left, size, isCross }) =>
        isCross ? (
          <Cross
            key={id}
            top={`${top}%`}
            left={`${left}%`}
            size={size}
            className='bg-anim-el'
          />
        ) : (
          <Circle
            key={id}
            top={`${top}%`}
            left={`${left}%`}
            size={size}
            className='bg-anim-el'
          />
        )
      )}
      <div className='absolute top-0 left-0 text-[var(--primary-red)] text-[20dvh] -translate-x-1/4 -translate-y-1/4 rotate-12 bg-anim-el'>
        <ImCross />
      </div>
      <div className='absolute bottom-0 right-0 text-[var(--primary-blue)] text-[20dvh] translate-x-1/4 translate-y-1/4 bg-anim-el'>
        <FaDotCircle />
      </div>
    </div>
  );
};

interface ShapeProps {
  top: number | string;
  left: number | string;
  size: number;
  className?: string;
}

export const Cross = ({ top, left, size, className }: ShapeProps) => {
  return (
    <div
      className={`absolute text-[var(--primary-red)] ${className || ''}`}
      style={{ top, left }}
    >
      <ImCross size={size} />
    </div>
  );
};

export const Circle = ({ top, left, size, className }: ShapeProps) => {
  return (
    <div
      className={`absolute text-[var(--primary-blue)] ${className || ''}`}
      style={{ top, left }}
    >
      <FaDotCircle size={size} />
    </div>
  );
};

export default BluredBackground;
