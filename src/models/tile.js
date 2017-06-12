import { 
  BasicSpawn, BasicEnemy, 
  OffLimits, Path, Placeable,
  SimpleTower,
  CrossTower,
  VerticalTower,
  HorizontalTower,
  SurroundTower,
} from '../tiles';
import { Tower } from '../towers/tower';
import { towerTypes } from '../constants.js';

export class Tile {
  constructor({ 
    pathNum = 0,  
    placeable = false, 
    spawnTile = false,
    loc,
    changeGold,
  }) {
    // configurable
    this.placeable = placeable;
    this.pathNum = pathNum; // 0 is not a path
    this.spawnTile = spawnTile;
    this.loc = loc;
    this.changeGold = changeGold;

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
      return this.tower.render();
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
    this.tower = new towerTypes[towerType](this, towerType);
  }

  attack(board) {
    if (this.isTower()) {
      this.tower.attack(board);
    }
  }

  killEnemy(enemy) {
    this.changeGold(enemy.value);
    this.enemies = this.enemies.filter(e => e !== enemy);
  }
}
