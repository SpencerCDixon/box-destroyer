import { Board } from './board.js';

describe('buildLevel()', function() {
  it('returns array with proper tile types', function() {
    const blueprint = [
      [1, 'P', 'P'],
      [2, 3, 4],
      ['X', 'X', 5],
    ];
    const level = new Board(blueprint).tiles;

    expect(level[0][0].isPath()).toEqual(true);
    expect(level[0][1].isPlaceable()).toEqual(true);
    expect(level[0][2].isPlaceable()).toEqual(true);

    expect(level[1][0].isPath()).toEqual(true);
    expect(level[1][1].isPath()).toEqual(true);
    expect(level[1][2].isPath()).toEqual(true);

    expect(level[2][0].isPlaceable()).toEqual(false);
    expect(level[2][1].isPlaceable()).toEqual(false);
    expect(level[2][2].isPath()).toEqual(true);
  });

  it('can find the spawn tile correctly', function() {
    const blueprint = [
      ['P', 1, 'P'],
      ['X', 2, 3],
      ['X', 'X', 4],
    ];
    const level = new Board(blueprint);
    const spawner = level.tiles[0][1];

    expect(level.spawnTile()).toEqual(spawner);
  });
});
