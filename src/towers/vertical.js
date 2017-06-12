import { Tower } from './tower';
import { towers } from '../constants.js';
import { VerticalTower as VerticalTowerTile} from '../tiles/VerticalTower.js';
import { inRange } from './util.js';

export class VerticalTower extends Tower {
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
    if (this.range) return this.range;

    const [row, col] = this.tile.loc;
    this.range = [
      [row - 1, col],
      [row + 1, col],
    ].filter(inRange);
    return this.range;
  }

  render() {
    return VerticalTowerTile();
  }
}
