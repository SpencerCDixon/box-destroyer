import { Board } from './board';
import { toNumber, has } from 'lodash';
import { gameStates } from '../constants.js';

export class Game {
  constructor(level, onWin, onLose) {
    const { mapBlueprint, enemyBlueprint, goldStart, allowedTowers } = level;
    this.tick = 0;
    this.board = new Board(this, mapBlueprint, onLose)
    this.gold = goldStart;

    // Used to change game from win/lose/paused
    this.onWin = onWin;

    // TODO: make a more robust spawner implementation
    this.spawners = enemyBlueprint;
    this.lastSpawnTick = Math.max(
      ...Object.keys(this.spawners).map(toNumber)
    );
    this.allowedTowers = allowedTowers;
  }

  nextTick() {
    this.tick += 1;
    this.update(this.tick);
    return this;
  }

  update(tick) {
    this.checkForWin();
    this.updateEnemies(tick);
    this.updateTowers();
  }

  updateEnemies(tick) {
    if (has(this.spawners, this.tick.toString())) {
      if (Array.isArray(this.spawners[this.tick.toString()])) {
        this.spawners[this.tick.toString()].forEach(et => {
          this.spawn(et, tick);
        });
      } else {
        this.spawn(this.spawners[this.tick.toString()], tick);
      }
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

  changeGold(amount) {
    this.gold = this.gold + amount;
  }
}
