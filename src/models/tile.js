import { 
  BasicSpawn, OffLimits, Path, Placeable,
} from '../tiles';
import { Tower } from '../towers/tower';
import { towers, towerTypes } from '../constants.js';

export class Tile {
  constructor({ 
    pathNum = 0,  
    placeable = false, 
    spawnTile = false,
    loc,
    game,
  }) {
    // configurable
    this.placeable = placeable;
    this.pathNum = pathNum; // 0 is not a path
    this.spawnTile = spawnTile;
    this.loc = loc;
    this.game = game;

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
    const towerPrice = towers[towerType].price;

    if (this.game.gold >= towerPrice) {
      this.placeable = false;
      this.tower = new towerTypes[towerType](this, towerType);
      this.game.changeGold(-towerPrice);
    }
  }

  attack(board) {
    if (this.isTower()) {
      this.tower.attack(board);
    }
  }

  killEnemy(enemy) {
    this.game.changeGold(enemy.value);
    this.enemies = this.enemies.filter(e => e !== enemy);
  }

  adminPlaceTower(towerType) {
    this.placeable = false;
    this.tower = new towerTypes[towerType](this, towerType);
  }
}
