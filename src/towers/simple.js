import { Tower } from './tower';

export class SimpleTower extends Tower {
  constructor(tile) {
    this.tile = tile;
  }

  attack(board) {
    console.log('attacking with surround tower');
  }
}
