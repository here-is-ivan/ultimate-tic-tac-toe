import React, { useState, useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { CellValues } from '../types';
import { shootWinnerConfetti } from '../utils/confettiUtils';

import { getTicTacToeWinner } from '../utils/ticTacToeUtils';

import {
  CellCircleShape,
  CellCrossShape,
  SubgridCircleShape,
  SubgridCrossShape,
  BigGridCircleShape,
  BigGridCrossShape,
} from './PlayBoardShapes';
import { aiNextMoveUtils } from '../utils/aiNextMoveUtils';
import { aiNextSubgridUtils } from '../utils/aiNextSubgridUtils';
import { GameSettingsContext } from '../GameSettingsContext';

interface BoardProps {
  isCrossTurn: boolean;
  setIsCrossTurn: React.Dispatch<React.SetStateAction<boolean>>;
  crossScore: number;
  setCrossScore: React.Dispatch<React.SetStateAction<number>>;
  circleScore: number;
  setCircleScore: React.Dispatch<React.SetStateAction<number>>;
  globalWinner: CellValues;
  setGlobalWinner: React.Dispatch<React.SetStateAction<CellValues>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

const Board = ({
  isCrossTurn,
  setIsCrossTurn,
  crossScore,
  setCrossScore,
  circleScore,
  setCircleScore,
  globalWinner,
  setGlobalWinner,
  setIsGameFinished,
}: BoardProps) => {
  const { isAIMode } = useContext(GameSettingsContext);
  const [dimension, setDimension] = useState(0);

  const boardRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const crossScoreRef = useRef<number>(crossScore);
  const circleScoreRef = useRef<number>(circleScore);
  const isCrossTurnRef = useRef<boolean>(isCrossTurn);
  const canPlaceCircle = useRef<boolean>(true);

  const [gridValues, setGridValues] = useState<CellValues[][]>([
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

  const [bigGridValues, setBigGridValues] = useState<CellValues[]>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const gridValuesRef = useRef<CellValues[][]>(gridValues);
  const bigGridValuesRef = useRef<CellValues[]>(bigGridValues);

  const fillCell = (girdIndex: number, cellIndex: number) => {
    if (gridValues[girdIndex][cellIndex] !== '') return;

    const shape: CellValues = isCrossTurnRef.current ? 'cross' : 'circle';
    gridValuesRef.current[girdIndex][cellIndex] = shape;

    setGridValues([...gridValuesRef.current]);

    checkSmallGridWinner(girdIndex);
    checkBigGridWinner();
    checkGameFinished();
  };

  const switchTeams = () => {
    isCrossTurnRef.current = !isCrossTurnRef.current;
    setIsCrossTurn(isCrossTurnRef.current);
  };

  const aiFillCell = () => {
    const subgridIndex = aiNextSubgridUtils(gridValues, bigGridValues);
    const cellIndex = aiNextMoveUtils(gridValues[subgridIndex]);

    fillCell(subgridIndex, cellIndex);
  };

  const checkSmallGridWinner = (smallGridIndex: number) => {
    const checkWinner = getTicTacToeWinner(
      gridValuesRef.current[smallGridIndex]
    );
    if (!checkWinner.hasWinner) return;

    bigGridValuesRef.current[smallGridIndex] = checkWinner.winner;
    setBigGridValues(bigGridValuesRef.current);

    switch (checkWinner.winner) {
      case 'circle':
        circleScoreRef.current += 1;
        setCircleScore(circleScoreRef.current);
        break;
      case 'cross':
        crossScoreRef.current += 1;
        setCrossScore(crossScoreRef.current);
        break;
    }
  };

  const checkBigGridWinner = () => {
    const checkGlobalWinner = getTicTacToeWinner(bigGridValuesRef.current);
    if (!checkGlobalWinner.hasWinner) return;
    setGlobalWinner(checkGlobalWinner.winner);
    shootWinnerConfetti(checkGlobalWinner.winner);
  };

  const checkGameFinished = () => {
    for (
      let bigGridIndex = 0;
      bigGridIndex < bigGridValuesRef.current.length;
      bigGridIndex++
    ) {
      if (bigGridValuesRef.current[bigGridIndex] !== '') {
        continue;
      }

      const smallGrid = gridValuesRef.current[bigGridIndex];

      for (let cellIndex = 0; cellIndex < smallGrid.length; cellIndex++) {
        if (smallGrid[cellIndex] === '') {
          return;
        }
      }
    }

    if (crossScoreRef.current > circleScoreRef.current) {
      shootWinnerConfetti('cross');
    } else if (crossScoreRef.current < circleScoreRef.current) {
      shootWinnerConfetti('circle');
    }

    setIsGameFinished(true);
  };

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

  useGSAP(
    () => {
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
    },
    { scope: cellRefs }
  );

  return (
    <div
      className='aspect-square flex justify-center items-center'
      ref={boardRef}
    >
      <div
        className='bg-[var(--primary-gray)] relative rounded-lg flex flex-wrap justify-around items-center overflow-hidden'
        style={{ width: dimension, height: dimension }}
      >
        {globalWinner === 'cross' && <BigGridCrossShape />}
        {globalWinner === 'circle' && <BigGridCircleShape />}
        {gridValues.map((grid, gridIndex) => {
          return (
            <div
              key={gridIndex}
              className={`${
                bigGridValues[gridIndex] === '' && canPlaceCircle.current
                  ? ''
                  : 'pointer-events-none'
              } relative w-[31.5%] aspect-square bg-white rounded-md overflow-hidden flex flex-wrap justify-around items-center shadow-md`}
            >
              {bigGridValues[gridIndex] === 'cross' && <SubgridCrossShape />}
              {bigGridValues[gridIndex] === 'circle' && <SubgridCircleShape />}
              {grid.map((cell, cellIndex) => {
                const flatIndex = gridIndex * 9 + cellIndex;
                return (
                  <div
                    key={cellIndex}
                    ref={(el) => {
                      cellRefs.current[flatIndex] = el;
                    }}
                    onClick={() => {
                      if (isAIMode) {
                        fillCell(gridIndex, cellIndex);
                        canPlaceCircle.current = false;
                        switchTeams();

                        setTimeout(() => {
                          aiFillCell();
                          switchTeams();
                          canPlaceCircle.current = true;
                        }, 500);
                      } else {
                        fillCell(gridIndex, cellIndex);
                        switchTeams();
                      }
                    }}
                    className={`${
                      cell !== '' ? '' : 'cursor-pointer'
                    } w-[30.5%] aspect-square bg-[var(--primary-gray)] rounded-sm flex justify-center items-center`}
                  >
                    {cell === 'circle' && <CellCircleShape />}
                    {cell === 'cross' && <CellCrossShape />}
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

export default Board;
