import { Board } from './board';
import { toNumber, has } from 'lodash';

export class Game {
  constructor(level, onLose, onWin) {
    const { mapBlueprint, enemyBlueprint } = level;
    this.tick = 0;
    this.board = new Board(mapBlueprint, onLose)

    this.onWin = onWin;
    // TODO: make a more robust spawner implementation
    this.spawners = enemyBlueprint;
    this.lastSpawnTick = Math.max(
      ...Object.keys(this.spawners).map(toNumber)
    );
  }

  nextTick() {
    this.tick += 1;
    this.update();
    return this;
  }

  update() {
    this.updateEnemies();
    this.updateTowers();
    this.checkForWin();
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

  checkForWin() {
    const enemyCount = this.board.enemyCount();
    if (this.tick > this.lastSpawnTick && enemyCount === 0) {
      this.onWin();
    }
  }
}
