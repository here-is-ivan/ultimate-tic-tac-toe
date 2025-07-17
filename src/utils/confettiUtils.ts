import JSConfetti from 'js-confetti';
import type { CellValues } from '../types';

const jsConfetti = new JSConfetti();

export function shootWinnerConfetti(winner: CellValues) {
  if (winner === 'cross') {
    jsConfetti.addConfetti({
      confettiColors: ['#ff3b30'],
      confettiRadius: 8,
      confettiNumber: 150,
    });
  } else if (winner === 'circle') {
    jsConfetti.addConfetti({
      confettiColors: ['#007aff'],
      confettiRadius: 8,
      confettiNumber: 150,
    });
  }
}
