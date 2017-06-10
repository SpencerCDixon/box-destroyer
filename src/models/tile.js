import { BasicSpawn, BasicEnemy, OffLimits, Path, Placeable } from '../tiles';

export class Tile {
  constructor({ 
    pathNum = 0,  
    placeable = false, 
    spawnTile = false,
  }) {
    // configurable
    this.placeable = placeable;
    this.pathNum = pathNum; // 0 is not a path
    this.spawnTile = spawnTile;

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
    return typeof this.tower !== undefined;
  }

  isEnemy() {
    return this.enemies.length > 0;
  }

  isSpawn() {
    return this.spawnTile;
  }

  render() {
    // TODO: instead, pass enemies is a prop to the path tile
    if (this.isEnemy()) {
      return BasicEnemy();
    } else if (this.isSpawn()) {
      return BasicSpawn();
    } else if (this.isPath()) {
      return Path();
    } else if (this.isPlaceable()) {
      return Placeable();
    } else if (this.isOffLimits()) {
      return OffLimits();
    } else if (this.isTower()) {
      return 'tower';
    }
  }
}
