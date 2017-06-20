import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';
import { isCrossable } from '../util/enemies.js';

export class JesusEnemy extends Enemy {
  constructor(tick) {
    super();
    this.health = enemies.jesus.health + enemies.jesus.tickMult * tick;
    this.totalHealth = enemies.jesus.health + enemies.jesus.tickMult * tick;
    this.value = this.health / 10;
    this.type = 'jesus';
  }

  attack(dmg, towerType) {
    if (isCrossable(towerType)) {
      this.health = this.health - dmg;
    }
  }
}
