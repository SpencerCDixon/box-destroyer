import { Game } from './game.js';

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
    it('calls onWin when all enemies are dead', function() {
      const blueprint = [
        [1, 'horizontal', 7],
        [2, 'cross', 6],
        [3, 4, 5],
      ];
      const enemies = { 1: 'basic' };
      const level = generateLevel(blueprint, enemies);
      const onWin = jest.fn();
      const onLose = jest.fn();
      const game = new Game(level, onWin, onLose);

      fastForward(game, 6);

      expect(onWin).toBeCalled();
      expect(onLose).not.toBeCalled();
    });

    it('calls onLose when enemies get to the end', function() {
      // cross does 90 damage, enemy will have 95 life
      const blueprint = [
        [1, 'X', 7],
        [2, 'cross', 6],
        [3, 4, 5],
      ];
      const enemies = { 1: 'basic' };
      const level = generateLevel(blueprint, enemies);
      const onWin = jest.fn();
      const onLose = jest.fn();
      const game = new Game(level, onWin, onLose);

      fastForward(game, 6);

      expect(onWin).not.toBeCalled();
      expect(onLose).toBeCalled();
    });
  });
});
