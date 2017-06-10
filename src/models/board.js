import { Tile } from './tile';

const PLACEABLE_TILE = "P";
const UNPLACEABLE_TILE = "X";
const PATH_REG = /\d/

export class Board {
  constructor(blueprint, onLose) {
    // holds all tile info
    this.tiles = [];
    this.onLose = onLose;

    // path cache
    this.pathCache = {};

    // buildLevel
    this.buildLevel(blueprint);
  }

  buildLevel(blueprint) {
    this.tiles = blueprint.map((row, rIdx) => {
      return row.map((tile, tIdx) => {
        if (PLACEABLE_TILE === tile) {
          return new Tile({placeable: true});
        } else if (UNPLACEABLE_TILE === tile) {
          return new Tile({placeable: false});
        } else if (PATH_REG.test(tile)) {
          // save coordinates for path
          this.pathCache[tile] = [rIdx, tIdx];
          return new Tile({pathNum: tile, spawnTile: tile === 1});
        } else {
          throw new Error("Couldn't create tile with: " + tile);
        }
      })
    });
  }

  tileAt(row, col) {
    return this.tiles[row][col]
  }

  // spawnTile iterates over the rows and columns to find the index of the tile
  // which has a pathNum equal to 1.  It then returns that tile.
  spawnTile() {
    let row, column;
    this.tiles.forEach((r, rIdx) => {
      const cIdx = r.findIndex(t => {
        return t.pathNum === 1
      });
      if (cIdx > -1) {
        row = rIdx;
        column = cIdx;
      }
    })
    return this.tileAt(row, column);
  }

  spawn(enemyType) {
    this.spawnTile().enemies.push(enemyType);
  }

  // start at the last path and move enemies to the next path
  moveEnemies() {
    const pathKeys = Object.keys(this.pathCache);
    const sorted = pathKeys.map(n => parseInt(n, 10)).reverse();

    sorted.forEach(pathTile => {
      const greatest = Math.max(...sorted);
      const [row, col] = this.pathCache[pathTile.toString()]
      const currentTile = this.tiles[row][col];

      const nextPathNum = pathTile + 1
      if (nextPathNum > greatest && currentTile.isEnemy()) {
        // game over
        this.onLose();
      } else if (nextPathNum > greatest) {
        // do nothing
      } else {
        const [nextRow, nextCol] = this.pathCache[nextPathNum.toString()]
        const nextTile = this.tileAt(nextRow, nextCol);
        nextTile.enemies = currentTile.enemies;
        currentTile.enemies = [];
      }
    });
  }
}