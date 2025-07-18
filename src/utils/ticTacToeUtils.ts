import type { CellValues } from '../types';

export function getTicTacToeWinner(cells: CellValues[]): {
  hasWinner: boolean;
  winner: CellValues;
} {
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

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a] !== '' && cells[a] === cells[b] && cells[a] === cells[c]) {
      return { hasWinner: true, winner: cells[a] as CellValues };
    }
  }
  return { hasWinner: false, winner: '' };
}
