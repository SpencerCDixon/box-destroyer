
const types = {
  'basic enemy': {
    health: 10,
  }
};

export class Enemy {
  constructor(type) {
    const { health } = types[type];
    this.health = health;
  }

  render() {
  }
}
