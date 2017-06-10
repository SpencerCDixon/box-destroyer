import { 
  BasicSpawn, BasicEnemy, 
  OffLimits, Path, Placeable,
  SimpleTower,
} from '../tiles';
import { SurroundTower } from '../towers/surround.js';
import { Tower } from '../towers/tower';

const towerTypes = {
  'simple': SurroundTower,
};

export class Tile {
  constructor({ 
    pathNum = 0,  
    placeable = false, 
    spawnTile = false,
    loc,
  }) {
    // configurable
    this.placeable = placeable;
    this.pathNum = pathNum; // 0 is not a path
    this.spawnTile = spawnTile;
    this.loc = loc;

    // internal
    this.enemies = [];
    this.tower = undefined;
  }

  isPath() {
    return this.pathNum > 0;
  }

  isPlaceable() {
    return this.placeable
  }

  isOffLimits() {
    return !this.placeable
  }

  isTower() {
    return this.tower instanceof Tower;
  }

  isEnemy() {
    return this.enemies.length > 0;
  }

  isSpawn() {
    return this.spawnTile;
  }

  render(cb) {
    if (this.isTower()) {
      return SimpleTower();
    } else if (this.isSpawn()) {
      return BasicSpawn();
    } else if (this.isPath()) {
      return Path({enemies: this.enemies});
    } else if (this.isPlaceable()) {
      return Placeable({click: cb});
    } else if (this.isOffLimits()) {
      return OffLimits();
    }
  }

  placeTower(towerType) {
    this.placeable = false;
    this.tower = new towerTypes[towerType](this);
  }

  attack(board) {
    if (this.isTower()) {
      this.tower.attack(board);
    }
  }
}
