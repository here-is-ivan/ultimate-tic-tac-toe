import type { CellValues } from '../types';

// Type alias for grid info tuple: [gridIndex, circlesCount, canWinGrid, isAvailable]
type GridInfo = [number, number, boolean, boolean];

export function aiSubgridIndexUtils(
  gridValues: CellValues[][],
  bigGridValues: CellValues[]
): number | null {
  const winPatterns = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Collect info about each available subgrid
  const gridInfo: GridInfo[] = [];

  for (let gridIndex = 0; gridIndex < 9; gridIndex++) {
    const currentGrid = gridValues[gridIndex];
    let currentCirclesCount = 0;
    let currentCrossesCount = 0;

    // Skip if this subgrid is already won or drawn
    if (bigGridValues[gridIndex] !== '') {
      continue;
    }

    // Check for immediate win opportunity in this subgrid
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        currentGrid[a] === 'circle' ||
        currentGrid[b] === 'circle' ||
        currentGrid[c] === 'circle'
      )
        continue;

      if (
        (currentGrid[a] === currentGrid[b] &&
          currentGrid[a] !== currentGrid[c] &&
          currentGrid[c] === '') ||
        (currentGrid[a] === currentGrid[c] &&
          currentGrid[a] !== currentGrid[b] &&
          currentGrid[b] === '') ||
        (currentGrid[b] === currentGrid[c] &&
          currentGrid[b] !== currentGrid[a] &&
          currentGrid[a] === '')
      ) {
        console.log(gridIndex)
        return gridIndex;
      }
    }

    // Count circles and crosses in this subgrid
    for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
      if (currentGrid[cellIndex] === 'circle') {
        currentCirclesCount++;
      } else if (currentGrid[cellIndex] === 'cross') {
        currentCrossesCount++;
      }
    }

    // Determine if this grid can still be won
    const canWinGrid =
      currentGrid.filter((x) => x === '').length > 1 &&
      currentCirclesCount - currentCrossesCount <= 1;

    gridInfo.push([gridIndex, currentCirclesCount, canWinGrid, true]);
  }

  // Sort gridInfo by availability, win possibility, and circle count
  gridInfo.sort((a, b) => {
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

  if (gridInfo.length === 0) {
    return null;
  }

  // If multiple top grids are equally good, pick one at random
  let sameTopValuesCount = 1;
  const topValueInfo = [gridInfo[0][1], gridInfo[0][2], gridInfo[0][3]].join(
    '#'
  );

  for (let i = 1; i < gridInfo.length; i++) {
    const currentValueInfo = [
      gridInfo[i][1],
      gridInfo[i][2],
      gridInfo[i][3],
    ].join('#');

    if (topValueInfo === currentValueInfo) sameTopValuesCount++;
    else break;
  }

  return gridInfo[Math.floor(Math.random() * sameTopValuesCount)][0];
}
