import type { CellValues } from '../types';
import { winPatterns } from './winGridPatterns';

export function aiNextMoveUtils(grid: CellValues[]): number {
  // Initialize with unique arrays for each cell
  const potentialWinPatterns = new Array<[number, number]>();

  if (grid.every((x) => x === '')) return 4;

  // Check if there is a next winning move for cross
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (grid[a] === grid[b] && grid[a] === 'cross' && grid[c] === '') return c;
    if (grid[a] === grid[c] && grid[a] === 'cross' && grid[b] === '') return b;
    if (grid[b] === grid[c] && grid[b] === 'cross' && grid[a] === '') return a;
  }

  // Check if there is a next winning move for circle
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (grid[a] === grid[b] && grid[a] === 'circle' && grid[c] === '') return c;
    if (grid[a] === grid[c] && grid[a] === 'circle' && grid[b] === '') return b;
    if (grid[b] === grid[c] && grid[b] === 'circle' && grid[a] === '') return a;
  }

  // Detect forks
  if (grid[2] === 'circle' && grid[6] === 'circle') {
    if (grid[0] === '' && grid[8] === '') {
      return 1;
    }
  }
  

  // Check the number of potential winning patterns for each cell
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] !== '') continue;

    let potentialWinPatternsCount = 0;

    for (const pattern of winPatterns) {
      if (!pattern.includes(i)) continue;

      const [a, b, c] = pattern;

      if (
        (grid[a] === '' || grid[a] === 'cross') &&
        (grid[b] === '' || grid[b] === 'cross') &&
        (grid[c] === '' || grid[c] === 'cross')
      ) {
        potentialWinPatternsCount++;
      }
    }

    potentialWinPatterns.push([i, potentialWinPatternsCount]);
  }

  potentialWinPatterns.sort((a, b) => b[1] - a[1]);
  if (potentialWinPatterns.length >= 1) return potentialWinPatterns[0][0];
  return -1;
}
