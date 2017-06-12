import { Tower } from './tower';
import { towers } from '../constants.js';
import { ColumnTower as ColumnTowerTile } from '../tiles/ColumnTower.js';
import { range } from 'lodash';

export class ColumnTower extends Tower {
  constructor(tile, type) {
    super()
    this.tile = tile;
    this.type = type;
  }

  attack(board) {
    this.range().forEach(coord => {
      const [x, y] = coord;
      if (board.tileAt(x, y).isEnemy()) {
        board.attackTile(x, y, towers.column.dmg);
      }
    });
  }

  range() {
    const [row, col] = this.tile.loc;
    const wholeRow = range(9);
    return wholeRow.map(newRow => [newRow, col]);
  }

  render() {
    return ColumnTowerTile();
  }
}
