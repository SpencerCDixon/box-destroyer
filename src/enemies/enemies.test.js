import { TallEnemy, LongEnemy, JesusEnemy } from './index.js';
import { shopTowerTypes } from '../constants.js';
import { isLongable, isTallable, isCrossable } from '../util/enemies.js';

describe('Enemies', function() {
  describe('Jesus', function() {
    const nonJesus = shopTowerTypes.filter(type => !isCrossable(type));

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

  describe('Long', function() {
    const nonLong = shopTowerTypes.filter(type => !isLongable(type));

    it('takes damage from horizontal towers', function() {
      const enemy = new LongEnemy(1);
      expect(enemy.health).toEqual(95);
      enemy.attack(40, 'horizontal');
      expect(enemy.health).toEqual(55);
    });

    it('takes damage from array towers', function() {
      const enemy = new LongEnemy(1);
      expect(enemy.health).toEqual(95);
      enemy.attack(40, 'array');
      expect(enemy.health).toEqual(55);
    });

    it('doesnt take damage from other towers', function() {
      const enemy = new LongEnemy(1);
      expect(enemy.health).toEqual(95);
      nonLong.forEach(type => {
        enemy.attack(30, type);
      });
      expect(enemy.health).toEqual(95);
    });
  });

  describe('Tall', function() {
    const nonTall = shopTowerTypes.filter(type => !isTallable(type));

    it('takes damage from column towers', function() {
      const enemy = new TallEnemy(1);
      expect(enemy.health).toEqual(95);
      enemy.attack(40, 'column');
      expect(enemy.health).toEqual(55);
    });

    it('takes damage from vertical towers', function() {
      const enemy = new TallEnemy(1);
      expect(enemy.health).toEqual(95);
      enemy.attack(40, 'vertical');
      expect(enemy.health).toEqual(55);
    });

    it('doesnt take damage from other towers', function() {
      const enemy = new TallEnemy(1);
      expect(enemy.health).toEqual(95);
      nonTall.forEach(type => {
        enemy.attack(30, type);
      });
      expect(enemy.health).toEqual(95);
    });
  });
});
