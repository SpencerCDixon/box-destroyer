import { JesusEnemy } from './index.js';
import { shopTowerTypes } from '../constants.js';

describe('Enemies', function() {
  describe('Jesus', function() {
    const nonJesus = shopTowerTypes.filter(type => {
      type === 'cross' || type === 'surround'
    });

    it('takes damage from cross towers', function() {
      const enemy = new JesusEnemy(1);
      expect(enemy.health).toEqual(95);
      enemy.attack(30, 'cross');
      expect(enemy.health).toEqual(65);
    });

    it('takes damage from surround towers', function() {
      const enemy = new JesusEnemy(1);
      expect(enemy.health).toEqual(95);
      enemy.attack(30, 'surround');
      expect(enemy.health).toEqual(65);
    });

    it('doesnt take damage from other towers', function() {
      const enemy = new JesusEnemy(1);
      expect(enemy.health).toEqual(95);
      nonJesus.forEach(type => {
        enemy.attack(30, type);
      });
      expect(enemy.health).toEqual(95);
    });
  });
  
});
