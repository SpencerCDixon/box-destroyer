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
        board.attackTile(x, y, towers.vertical.dmg, this.type);
      }
    });
  }

  range() {
    const [row, col] = this.tile.loc;
    return [
      [row - 1, col],
      [row + 1, col],
    ].filter(inRange);
  }

  render() {
    return VerticalTowerTile();
  }
}
