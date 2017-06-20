import { CrossHairTower, VerticalTower, HorizontalTower, SurroundTower, ArrayTower, ColumnTower } from './towers';
import { 
  BasicEnemy, AdvancedEnemy, SuperiorEnemy, JesusEnemy,
  LongEnemy, TallEnemy,
} from './enemies';
import worldOne from './models/world-1';
import worldTwo from './models/world-2';

// All possible states a level can be in
export const gameStates = {
  win: 'win',
  lost: 'lost',
  paused: 'paused',
  running: 'running',
}

// Game Worlds
export const worlds = {
  1: worldOne,
  2: worldTwo,
};

// -------
// Towers
// -------
export const towerTypes = {
  cross: CrossHairTower,
  vertical: VerticalTower,
  horizontal: HorizontalTower,
  surround: SurroundTower,
  array: ArrayTower,
  column: ColumnTower,
}

export const shopTowerTypes = Object.keys(towerTypes);

export const towers = {
  cross: {
    dmg: 30,
    price: 100,
    rangeDesc: "Does damage up, down, left, and right",
  },
  vertical: {
    dmg: 40,
    price: 100,
    rangeDesc: "Does damage up and down.",
  },
  horizontal: {
    dmg: 40,
    price: 100,
    rangeDesc: "Does damage right and left.",
  },
  surround: {
    dmg: 40,
    price: 200,
    rangeDesc: "Does damage to every surrounding tile",
  },
  array: {
    dmg: 40,
    price: 200,
    rangeDesc: "Does damage to every enemy in the row",
  },
  column: {
    dmg: 40,
    price: 200,
    rangeDesc: "Does damage to every enemy in the column",
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
    health: 300,
    value: 20,
    tickMult: 10,
  },
  superior: {
    health: 300,
    value: 30,
  },
  jesus: {
    health: 50,
    tickMult: 3,
    value: 10,
  },
  long: {
    health: 50,
    tickMult: 3,
    value: 10,
  },
  tall: {
    health: 50,
    tickMult: 3,
    value: 10,
  }
}

export const enemyTypes = {
  basic: BasicEnemy,
  advanced: AdvancedEnemy,
  superior: SuperiorEnemy,
  jesus: JesusEnemy,
  long: LongEnemy,
  tall: TallEnemy,
};
