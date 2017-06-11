import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';

export class BasicEnemy extends Enemy {
  constructor(tick) {
    super();
    this.health = enemies.basic.health + enemies.basic.tickMult * tick;
    this.value = this.health / 10;
  }
}
