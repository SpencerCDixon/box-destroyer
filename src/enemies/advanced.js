import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';

export class AdvancedEnemy extends Enemy {
  constructor() {
    super();
    this.health = enemies.advanced.health;
    this.value = enemies.advanced.value;
  }
}
