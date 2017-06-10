import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';

export class BasicEnemy extends Enemy {
  constructor() {
    super();
    this.health = enemies.basic.health;
  }
}
