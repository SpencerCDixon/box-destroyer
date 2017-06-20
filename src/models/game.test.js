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
// to update tests.  Sensible defaults added for towers/gold.
function generateLevel(mapBlueprint, enemyBlueprint, allowedTowers = [ 'cross' ], goldStart = 200) {
  return { mapBlueprint, enemyBlueprint, allowedTowers, goldStart };
}

// fastForward is a utility function to move the game along to assert outcomes
// based on a certain number of moves
function fastForward(game, ticks) {
  for (let i = 0; i <= ticks; ++i) {
    game.nextTick();
  }
}

describe('game integretion tests', function() {
  describe('player can win/lose and get gold', function() {
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

    it('gives the player gold when enemy dies', function() {
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

  describe('towerRanges', function() {
    describe('stage-1 towers', function() {
      describe('cross tower', function() {
        it('attacks from all 4 sides', function() {
          const blueprint = [
            [1, 8, 7],
            [2, 'cross', 6],
            [3, 4, 5],
          ];
          const enemy = generateMockEnemy(120, 10)
          const enemies = { 1: enemy };
          const level = generateLevel(blueprint, enemies);
          const [onWin, onLose] = [jest.fn(), jest.fn()];
          const game = new Game(level, onWin, onLose);

          fastForward(game, 7);

          expect(onWin).toBeCalled();
          expect(onLose).not.toBeCalled();
        });
      });

      describe('horizontal tower', function() {
        it('attacks from left and right', function() {
          const blueprint = [
            [1, 8, 7],
            [2, 'horizontal', 6],
            [3, 4, 5],
          ];
          const enemy = generateMockEnemy(80, 10)
          const enemies = { 1: enemy };
          const level = generateLevel(blueprint, enemies);
          const [onWin, onLose] = [jest.fn(), jest.fn()];
          const game = new Game(level, onWin, onLose);

          fastForward(game, 5);

          expect(onWin).toBeCalled();
          expect(onLose).not.toBeCalled();
        });
      });

      describe('vertical tower', function() {
        it('attacks from below and above', function() {
          const blueprint = [
            [1, 8, 7],
            [2, 'vertical', 6],
            [3, 4, 5],
          ];
          const enemy = generateMockEnemy(80, 10)
          const enemies = { 1: enemy };
          const level = generateLevel(blueprint, enemies);
          const [onWin, onLose] = [jest.fn(), jest.fn()];
          const game = new Game(level, onWin, onLose);

          fastForward(game, 7);

          expect(onWin).toBeCalled();
          expect(onLose).not.toBeCalled();
        });
      });
    });

    describe('stage-2 towers', function() {
      describe('surround tower', function() {
        it('attacks every square around it', function() {
          const blueprint = [
            [1, 10, 'X'],
            [2, 9, 8],
            [3, 'surround', 7],
            [4, 5, 6],
          ];
          const enemy = generateMockEnemy(240, 10)
          const enemies = { 1: enemy };
          const level = generateLevel(blueprint, enemies);
          const [onWin, onLose] = [jest.fn(), jest.fn()];
          const game = new Game(level, onWin, onLose);

          fastForward(game, 8);

          expect(onWin).toBeCalled();
          expect(onLose).not.toBeCalled();
        });
      });

      describe('array tower', function() {
        it('attacks every square in the row', function() {
          const blueprint = [
            [1, 'X', 'X', 'X', 'X'],
            [2, 'X', 'X', 'X', 11],
            [3, 6, 7, 'X', 10],
            [4, 5, 'array', 8, 9],
            ['X', 'X', 'X', 'X', 'X'],
          ];
          const enemy = generateMockEnemy(160, 10)
          const enemies = { 1: enemy };
          const level = generateLevel(blueprint, enemies);
          const [onWin, onLose] = [jest.fn(), jest.fn()];
          const game = new Game(level, onWin, onLose);

          fastForward(game, 8);

          expect(onWin).toBeCalled();
          expect(onLose).not.toBeCalled();
        });
      });

      describe('column tower', function() {
        it('attacks every square in the column', function() {
          const blueprint = [
            [1, 'X', 'X', 12, 'column'],
            [2, 'X', 'X', 11, 10],
            [3, 'X', 'X', 'X', 9],
            [4, 5, 6, 7, 8],
            ['column', 'X', 'X', 'X', 'X'],
          ];
          const enemy = generateMockEnemy(240, 10)
          const enemies = { 1: enemy };
          const level = generateLevel(blueprint, enemies);
          const [onWin, onLose] = [jest.fn(), jest.fn()];
          const game = new Game(level, onWin, onLose);

          fastForward(game, 9);

          expect(onWin).toBeCalled();
          expect(onLose).not.toBeCalled();
        });
      });
    });
  });

  describe('unique enemy types', function() {
    describe('cross/surround enemies', function() {
      it('cant be damaged by cross/surround towers', function() {
        const blueprint = [
          [1, 10, 'X', 'X', 'X'],
          [2, 9, 8, 'X', 'X',],
          [3, 'cross', 7, 'horizontal', 'X'],
          [4, 5, 6, 'X', 'X'],
        ];
        const enemies = { 1: 'jesus' };
        const level = generateLevel(blueprint, enemies);
        const [onWin, onLose] = [jest.fn(), jest.fn()];
        const game = new Game(level, onWin, onLose);

        fastForward(game, 8);

        expect(onWin).toBeCalled();
        expect(onLose).not.toBeCalled();
      });
    });
  });
});
