import { Tower } from './tower';
import { towers } from '../constants.js';
import { ArrayTower as ArrayTowerTile } from '../tiles/ArrayTower.js';
import { range } from 'lodash';

export class ArrayTower extends Tower {
  constructor(tile, type) {
    super()
    this.tile = tile;
    this.type = type;
  }

  attack(board) {
    this.range().forEach(coord => {
      const [x, y] = coord;
      if (board.tileAt(x, y).isEnemy()) {
        board.attackTile(x, y, towers.vertical.dmg);
      }
    });
  }

  range() {
    const [row, col] = this.tile.loc;
    const wholeRow = range(9);
    return wholeRow.map(newCol => [row, newCol]);
  }

  render() {
    return ArrayTowerTile();
  }
}
