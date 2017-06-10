import { Tile } from './tile';

const PLACEABLE_TILE = "P";
const UNPLACEABLE_TILE = "X";
const PATH_REG = /\d/

export function buildLevel(level) {
  return level.map(row => {
    return row.map(tile => {
      if (PLACEABLE_TILE === tile) {
        return new Tile({placeable: true});
      } else if (UNPLACEABLE_TILE === tile) {
        return new Tile({placeable: false});
      } else if (PATH_REG.test(tile)) {
        return new Tile({pathNum: tile});
      } else {
        throw new Error("Couldn't create tile with: " + tile);
      }
    })
  });
}

export class Game {
  constructor(mapBlueprint) {
    this.tick = 0;
    this.board = buildLevel(mapBlueprint)
  }

  nextTick() {
    this.tick = this.tick + 1;
    return this;
  }

  spawn(enemyType) {
  }
}
