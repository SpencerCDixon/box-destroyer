import { Game } from './game.js';

// normalizes creating level objects so when things change in future it's easy
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

function fastForward(game, ticks) {
  for (let i = 0; i <= ticks; ++i) {
    game.nextTick();
  }
}

describe('game integretion tests', function() {
  describe('player can win', function() {
    it('calls onWin when all enemies are dead', function() {
      const blueprint = [
        [1, 'X', 7],
        [2, 'cross', 6],
        [3, 4, 5],
      ];
      const enemies = { 1: 'basic' };
      const level = generateLevel(blueprint, enemies)
      const onWin = jest.fn()
      const game = new Game(level, onWin, () => {});

      fastForward(game, 6);

      expect(onWin).toBeCalled();
    });
  });
});
