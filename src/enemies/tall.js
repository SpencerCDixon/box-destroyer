import { Enemy } from './enemy.js';
import { enemies } from '../constants.js';
import { isTallable } from '../util/enemies.js';

export class TallEnemy extends Enemy {
  constructor(tick) {
    super();
    this.health = enemies.tall.health + enemies.tall.tickMult * tick;
    this.totalHealth = enemies.tall.health + enemies.tall.tickMult * tick;
    this.value = this.health / 10;
    this.type = 'tall';
  }

  attack(dmg, towerType) {
    if (isTallable(towerType)) {
      this.health = this.health - dmg;
    }
  }
}
