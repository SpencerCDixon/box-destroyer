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
  },
  vertical: {
    dmg: 40,
  },
  horizontal: {
    dmg: 40,
  }
};

// -------
// Enemies
// -------


export const enemies = {
  basic: {
    health: 100,
  },
  advanced: {
    health: 200,
  },
  superior: {
    health: 300,
  },
}

export const enemyTypes = {
  basic: BasicEnemy,
  advanced: AdvancedEnemy,
  superior: SuperiorEnemy,
};
