import { range } from 'lodash';
import { gameStates } from '../constants.js';

export function inRange([x, y]) {
  const grid = range(10);
  return grid.includes(x) && grid.includes(y);
}

export function didLose(state) {
  console.log('didLose: ', state);
  return gameStates.lost === state;
}

export function didWin(state) {
  console.log('didWin: ', state);
  return gameStates.win === state;
}

export function isPaused(state) {
  return gameStates.paused === state;
}
