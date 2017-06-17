import { Tile } from './tile';
import { gameStates, enemyTypes } from '../constants.js';
import { toNumber } from 'lodash';

const PLACEABLE_TILE = "P";
const UNPLACEABLE_TILE = "X";
const PATH_REG = /\d/

export class Board {
  constructor(game, blueprint, onLose, changeGold) {
    // holds all tile info
    this.tiles = [];
    this.onLose = onLose;
    this.game = game;

    // path cache
    this.pathCache = {};

    // buildLevel
    this.buildLevel(blueprint, changeGold);
  }

  buildLevel(blueprint, changeGold) {
    this.tiles = blueprint.map((row, rIdx) => {
      return row.map((tile, tIdx) => {
        const loc = [rIdx, tIdx];

        if (PLACEABLE_TILE === tile) {
          return new Tile({
            placeable: true, 
            loc,
            game: this.game,
          });
        } else if (UNPLACEABLE_TILE === tile) {
          return new Tile({
            placeable: false, 
            loc,
            game: this.game,
          });
        } else if (PATH_REG.test(tile)) {
          // save coordinates for path to simplify enemy movement
          this.pathCache[tile] = loc;
          return new Tile({
            pathNum: tile, 
            spawnTile: tile === 1,
            loc,
            game: this.game,
          });
        } else {
          throw new Error("Couldn't create tile with: " + tile);
        }
      })
    });
  }

  tileAt(row, col) {
    return this.tiles[row][col]
  }

  attackTile(row, col, dmg) {
    this.tileAt(row, col).enemies.forEach(enemy => {
      enemy.attack(dmg)
      if (enemy.isDead()) {
        this.tileAt(row, col).killEnemy(enemy);
      }
    });
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

  spawn(enemyType, tick) {
    this.spawnTile().enemies.push(
      new enemyTypes[enemyType](tick)
    );
  }

  // start at the last path and move enemies to the next path
  moveEnemies() {
    const pathKeys = Object.keys(this.pathCache);
    const sorted = pathKeys.map(toNumber).reverse();

    sorted.forEach(pathTile => {
      const greatest = Math.max(...sorted);
      const [row, col] = this.pathCache[pathTile.toString()]
      const currentTile = this.tileAt(row, col);

      const nextPathNum = pathTile + 1
      if (nextPathNum > greatest && currentTile.isEnemy()) {
        // game over
        this.onLose()
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

  attack() {
    const towers = [];
    this.tiles.forEach(row => {
      row.forEach(tile => {
        if (tile.isTower()) {
          towers.push(tile)
        }
      });
    });
    towers.forEach(towerTile => {
      towerTile.attack(this);
    });
  }

  enemyCount() {
    return this.tiles.reduce((acc, row) => {
      const rowNum = row.reduce((acc, tile) => {
        return acc + tile.enemies.length
      }, 0);
      return acc + rowNum
    }, 0)
  }
}
