import { CrossHairTower, VerticalTower, HorizontalTower, SurroundTower, ArrayTower, ColumnTower } from './towers';
import { 
  BasicEnemy, AdvancedEnemy, SuperiorEnemy, JesusEnemy,
  LongEnemy, TallEnemy,
} from './enemies';
import { 
  levelOne, levelTwo, levelThree, levelFour, 
  levelFive, levelSix, levelSeven, levelEight 
} from './models/levels';

// All possible states a level can be in
export const gameStates = {
  win: 'win',
  lost: 'lost',
  paused: 'paused',
  running: 'running',
}

// Game Worlds
export const worlds = {
  1: {
    levels: [
      levelOne,
      levelTwo,
      levelThree,
      levelFour,
      levelFive,
      levelSix,
      levelSeven,
      levelEight,
    ],
  },
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
    dmg: 30,
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
    health: 90,
    tickMult: 5,
    value: 10,
  },
  long: {
    health: 90,
    tickMult: 5,
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
