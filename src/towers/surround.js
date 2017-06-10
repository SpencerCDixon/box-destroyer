import { Tower } from './tower';

export class SurroundTower extends Tower {
  constructor(tile) {
    super()
    this.tile = tile;
  }

  attack(board) {
    this.range().forEach(coord => {
      const [x, y] = coord;
      if (board.tileAt(x, y).isEnemy()) {
        board.attackTile(x, y, 2);
      }
    });
  }

  range() {
    const [row, col] = this.tile.loc;
    return [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];
  }
}
