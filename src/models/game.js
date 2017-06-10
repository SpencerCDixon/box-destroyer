import { Board } from './board';
import { has } from 'lodash';

export class Game {
  constructor({mapBlueprint, enemyBlueprint}) {
    this.tick = 0;
    this.board = new Board(mapBlueprint)

    // TODO: make a more robust spawner implementation
    this.spawners = enemyBlueprint;
  }

  nextTick() {
    console.log('begin tick');
    this.tick += 1;
    this.update();
    console.log('end tick');
    return this;
  }

  update() {
    this.updateEnemies();
  }

  updateEnemies() {
    if (has(this.spawners, this.tick.toString())) {
      this.spawn(this.spawners[this.tick.toString()]);
    }
    this.board.moveEnemies();
  }

  spawn(enemyType) {
    this.board.spawn(enemyType);
  }
}
