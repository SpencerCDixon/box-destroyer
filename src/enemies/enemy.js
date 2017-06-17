export class Enemy { 
  isDead() {
    return this.health <= 0;
  }

  attack(dmg) {
    this.health = this.health - dmg;
  }
}
