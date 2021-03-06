import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';
import { isLongable } from '../util/enemies.js';

export class LongEnemy extends Enemy {
  constructor(tick) {
    super();
    this.health = enemies.long.health + enemies.long.tickMult * tick;
    this.totalHealth = enemies.long.health + enemies.long.tickMult * tick;
    this.value = (enemies.basic.health + enemies.basic.tickMult * tick) / 10;
    this.type = 'long';
  }

  attack(dmg, towerType) {
    if (isLongable(towerType)) {
      this.health = this.health - dmg;
    }
  }
}
