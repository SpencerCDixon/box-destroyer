import { Tower } from './tower';
import { towers } from '../constants.js';
import { SurroundTower as SurroundTowerTile } from '../tiles/SurroundTower.js';
import { inRange } from './util.js';

export class SurroundTower extends Tower {
  constructor(tile, type) {
    super();
    this.tile = tile;
    this.type = type;
  }

  attack(board) {
    this.range().forEach(coord => {
      const [x, y] = coord;
      if (board.tileAt(x, y).isEnemy()) {
        board.attackTile(x, y, towers.surround.dmg, this.type);
      }
    });
  }

  range() {

    const [row, col] = this.tile.loc;
    return [
      [row - 1, col],
      [row - 1, col + 1],
      [row - 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
      [row + 1, col - 1],
      [row, col - 1],
      [row, col + 1],
    ].filter(inRange);
  }

  render() {
    return SurroundTowerTile();
  }
}

