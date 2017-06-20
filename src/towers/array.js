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
    this.range(board).forEach(coord => {
      const [x, y] = coord;
      if (board.tileAt(x, y).isEnemy()) {
        board.attackTile(x, y, towers.array.dmg, this.type);
      }
    });
  }

  range(board) {
    const [row, _] = this.tile.loc;
    const length = board.tiles[row].length;
    const wholeRow = range(length);
    return wholeRow.map(newCol => [row, newCol])
  }

  render() {
    return ArrayTowerTile();
  }
}
