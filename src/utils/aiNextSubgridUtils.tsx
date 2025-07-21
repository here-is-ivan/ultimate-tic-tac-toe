import type { CellValues } from '../types';
import { aiNextMoveUtils } from './aiNextMoveUtils';
import { winPatterns } from './winGridPatterns';

export function aiNextSubgridUtils(
  gridValues: CellValues[][],
  bigGridValues: CellValues[]
): number {
  let isEmpty = true;
  const gridsInfo = new Array<[number, number, boolean, boolean]>();

  for (let bigGridIndex = 0; bigGridIndex < 9; bigGridIndex++) {
    if (bigGridValues[bigGridIndex] !== '') continue;
    let circleCount = 0;
    let crossCount = 0;

    let hasPotentialCrossWin = false;
    const grid = gridValues[bigGridIndex];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        (grid[a] === '' || grid[a] === 'cross') &&
        (grid[b] === '' || grid[b] === 'cross') &&
        (grid[c] === '' || grid[c] === 'cross')
      ) {
        hasPotentialCrossWin = true;
        break;
      }
    }

    for (let subgridIndex = 0; subgridIndex < 9; subgridIndex++) {
      const currentCell = gridValues[bigGridIndex][subgridIndex];

      if (currentCell !== '') {
        isEmpty = false;

        switch (currentCell) {
          case 'circle':
            circleCount += 1;
            break;
          case 'cross':
            crossCount += 1;
            break;
        }
      }
    }

    gridsInfo.push([
      bigGridIndex,
      circleCount,
      circleCount - crossCount < 2,
      hasPotentialCrossWin,
    ]);

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        (grid[a] === grid[b] && grid[a] === 'cross' && grid[c] === '') ||
        (grid[a] === grid[c] && grid[a] === 'cross' && grid[b] === '') ||
        (grid[b] === grid[c] && grid[b] === 'cross' && grid[a] === '')
      ) {
        return bigGridIndex;
      }
    }

    // Check if there is a next winning move for circle
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        (grid[a] === grid[b] && grid[a] === 'circle' && grid[c] === '') ||
        (grid[a] === grid[c] && grid[a] === 'circle' && grid[b] === '') ||
        (grid[b] === grid[c] && grid[b] === 'circle' && grid[a] === '')
      ) {
        return bigGridIndex;
      }
    }
  }

  gridsInfo.sort((a, b) => {
    if (a[3] && !b[3]) {
      return -1;
    } else if (!a[3] && b[3]) {
      return 1;
    }

    if (a[2] && !b[2]) {
      return -1;
    } else if (!a[2] && b[2]) {
      return 1;
    }

    return b[1] - a[1];
  });

  if (isEmpty) {
    return aiNextMoveUtils(bigGridValues);
  }

  if (gridsInfo.length > 0) {
    return gridsInfo[0][0];
  }

  return -1;
}
