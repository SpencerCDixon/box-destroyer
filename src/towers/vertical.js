import { Tower } from './tower';
import { towers } from '../constants.js';

export class VerticalTower extends Tower {
  constructor(tile) {
    super()
    this.tile = tile;
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
    return [
      [row - 1, col],
      [row + 1, col],
    ];
  }
}
