export class Tile {
  constructor({ 
    pathNum = 0,  
    placeable = false, 
  }) {
    // configurable
    this.placeable = placeable;
    this.pathNum = pathNum; // 0 is not a path

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

  isTower() {
    return typeof this.tower !== undefined;
  }

  render() {
    if (this.isPath()) {
      return 'path';
    } else if (this.isPlaceable()) {
      return 'placeable';
    } else if (this.isTower()) {
      return 'tower';
    }
  }
}
