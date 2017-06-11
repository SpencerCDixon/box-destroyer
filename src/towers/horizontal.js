import { Tower } from './tower';
import { towers } from '../constants.js';

export class HorizontalTower extends Tower {
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
    return [
      [row, col - 1],
      [row, col + 1],
    ];
  }
}
