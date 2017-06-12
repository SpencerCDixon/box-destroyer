import { range } from 'lodash';

export function inRange([x, y]) {
  const grid = range(9);
  return grid.includes(x) && grid.includes(y);
}
