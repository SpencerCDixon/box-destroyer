import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';

export class SuperiorEnemy extends Enemy {
  constructor() {
    super();
    this.health = enemies.superior.health;
  }
}
