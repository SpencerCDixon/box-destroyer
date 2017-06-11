import { CrossHairTower, VerticalTower, HorizontalTower } from './towers';
import { BasicEnemy, AdvancedEnemy, SuperiorEnemy } from './enemies';

// -------
// Towers
// -------
export const towerTypes = {
  cross: CrossHairTower,
  vertical: VerticalTower,
  horizontal: HorizontalTower,
}

export const shopTowerTypes = Object.keys(towerTypes);

export const towers = {
  cross: {
    dmg: 30,
    price: 100,
  },
  vertical: {
    dmg: 40,
    price: 100,
  },
  horizontal: {
    dmg: 40,
    price: 100,
  }
};

// -------
// Enemies
// -------


export const enemies = {
  basic: {
    health: 90,
    value: 10,
    tickMult: 5,
  },
  advanced: {
    health: 200,
    value: 20,
  },
  superior: {
    health: 300,
    value: 30,
  },
}

export const enemyTypes = {
  basic: BasicEnemy,
  advanced: AdvancedEnemy,
  superior: SuperiorEnemy,
};
