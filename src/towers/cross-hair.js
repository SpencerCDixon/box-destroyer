import { Tower } from './tower';
import { towers } from '../constants.js';
import { CrossTower as CrossHairTowerTile} from '../tiles/CrossTower.js';
import { inRange } from './util.js';

export class CrossHairTower extends Tower {
  constructor(tile, type) {
    super();
    this.tile = tile;
    this.type = type;
  }

  attack(board) {
    this.range().forEach(coord => {
      const [x, y] = coord;
      if (board.tileAt(x, y).isEnemy()) {
        board.attackTile(x, y, towers.cross.dmg, this.type);
      }
    });
  }

  // TODO: check only path tiles
  range() {
    const [row, col] = this.tile.loc;
    return [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ].filter(inRange)
  }

  render() {
    return CrossHairTowerTile();
  }
}
