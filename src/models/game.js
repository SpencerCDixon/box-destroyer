import { Board } from './board';
import { has } from 'lodash';

export class Game {
  constructor(level, onLose) {
    const { mapBlueprint, enemyBlueprint } = level;
    this.tick = 0;
    this.board = new Board(mapBlueprint, onLose)

    // TODO: make a more robust spawner implementation
    this.spawners = enemyBlueprint;
  }

  nextTick() {
    this.tick += 1;
    this.update();
    return this;
  }

  update() {
    this.updateEnemies();
    this.updateTowers();
  }

  updateEnemies() {
    if (has(this.spawners, this.tick.toString())) {
      this.spawn(this.spawners[this.tick.toString()]);
    }
    this.board.moveEnemies();
  }

  updateTowers() {
    this.board.attack();
  }

  spawn(enemyType) {
    this.board.spawn(enemyType);
  }
}
