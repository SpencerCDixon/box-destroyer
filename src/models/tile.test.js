import { Tile } from './tile';

describe('Tile', function() {
  describe('isPath()', function() {
    it('is not by default', function() {
      const tile = new Tile({})
      expect(tile.isPath()).toEqual(false);
    });
  });
});
