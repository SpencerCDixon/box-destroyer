import { range } from 'lodash';
import { gameStates } from '../constants.js';

export function inRange([x, y]) {
  const grid = range(10);
  return grid.includes(x) && grid.includes(y);
}

export function didLose(state) {
  return gameStates.lost === state;
}

export function didWin(state) {
  return gameStates.win === state;
}
