import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';

export class AdvancedEnemy extends Enemy {
  constructor(tick) {
    super();
    this.health = enemies.advanced.health + enemies.advanced.tickMult * tick;
    this.totalHealth = enemies.advanced.health + enemies.advanced.tickMult * tick;
    this.value = this.health / 50;
    this.type = 'advanced';
  }
}
