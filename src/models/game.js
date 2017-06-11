import { Board } from './board';
import { toNumber, has } from 'lodash';

export class Game {
  constructor(level, onLose, onWin, changeGold) {
    const { mapBlueprint, enemyBlueprint, goldStart } = level;
    this.tick = 0;
    this.board = new Board(mapBlueprint, onLose, changeGold)
    this.gold = goldStart;

    this.onWin = onWin;
    // TODO: make a more robust spawner implementation
    this.spawners = enemyBlueprint;
    this.lastSpawnTick = Math.max(
      ...Object.keys(this.spawners).map(toNumber)
    );
  }

  nextTick() {
    this.tick += 1;
    this.update(this.tick);
    return this;
  }

  update(tick) {
    this.updateEnemies(tick);
    this.updateTowers();
    this.checkForWin();
  }

  updateEnemies(tick) {
    if (has(this.spawners, this.tick.toString())) {
      this.spawn(this.spawners[this.tick.toString()], tick);
    }
    this.board.moveEnemies();
  }

  updateTowers() {
    this.board.attack();
  }

  spawn(enemyType, tick) {
    this.board.spawn(enemyType, tick);
  }

  checkForWin() {
    const enemyCount = this.board.enemyCount();
    if (this.tick > this.lastSpawnTick && enemyCount === 0) {
      this.onWin();
    }
  }
}
