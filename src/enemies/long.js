import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';
import { isLongable } from '../util/enemies.js';

export class LongEnemy extends Enemy {
  constructor(tick) {
    super();
    this.health = enemies.jesus.health + enemies.jesus.tickMult * tick;
    this.totalHealth = enemies.jesus.health + enemies.jesus.tickMult * tick;
    this.value = this.health / 10;
    this.type = 'long';
  }

  attack(dmg, towerType) {
    if (isLongable(towerType)) {
      this.health = this.health - dmg;
    }
  }
}
