import { Game } from './game.js';
import { Enemy } from '../enemies/enemy.js';


// generateMockEnemy returns a new enemy type that can be used in tests
function generateMockEnemy(health, gold) {
  return class MockEnemy extends Enemy {
    constructor(tick) {
      super();
      this.health = health
      this.totalHealth = health
      this.value = gold
      this.type = 'basic';
    }
  }
}

// generateLevel normalizes creating level objects so when things change in future it's easy
// to update tests
function generateLevel(mapBlueprint, enemyBlueprint) {
  return {
    mapBlueprint,
    enemyBlueprint,
    allowedTowers: [
      'cross',
    ],
    goldStart: 200,
  }
}

// fastForward is a utility function to move the game along to assert outcomes
// based on a certain number of moves
function fastForward(game, ticks) {
  for (let i = 0; i <= ticks; ++i) {
    game.nextTick();
  }
}

describe('game integretion tests', function() {
  describe('player can win and lose', function() {
    const blueprint = [
      [1, 'X', 7],
      [2, 'cross', 6],
      [3, 4, 5],
    ];

    it('calls onWin when all enemies are dead', function() {
      const enemy = generateMockEnemy(90, 10)
      const enemies = { 1: enemy };
      const level = generateLevel(blueprint, enemies);
      const [onWin, onLose] = [jest.fn(), jest.fn()];
      const game = new Game(level, onWin, onLose);

      fastForward(game, 5);

      expect(onWin).toBeCalled();
      expect(onLose).not.toBeCalled();
    });

    it('calls onLose when enemies get to the end', function() {
      const enemy = generateMockEnemy(95, 10)
      const enemies = { 1: enemy };
      const level = generateLevel(blueprint, enemies);
      const [onWin, onLose] = [jest.fn(), jest.fn()];
      const game = new Game(level, onWin, onLose);

      fastForward(game, 6);

      expect(onWin).not.toBeCalled();
      expect(onLose).toBeCalled();
    });

    it('gives the player gold to kill enemies', function() {
      const enemy = generateMockEnemy(90, 10)
      const enemies = { 1: enemy, 2: enemy };
      const level = generateLevel(blueprint, enemies);
      const [onWin, onLose] = [jest.fn(), jest.fn()];
      const game = new Game(level, onWin, onLose);

      // kill 2 enemies which each give 10 gold
      expect(game.gold).toEqual(200);
      fastForward(game, 5);
      expect(game.gold).toEqual(220);
    });
  });
});
