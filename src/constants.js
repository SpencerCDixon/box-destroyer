import { 
  CrossHairTower,
  VerticalTower,
  HorizontalTower,
} from './towers';

export const towerTypes = {
  'cross': CrossHairTower,
  'vertical': VerticalTower,
  'horizontal': HorizontalTower,
}

export const shopTowerTypes = Object.keys(towerTypes);

export const towers = {
  cross: {
    dmg: 4,
  },
  vertical: {
    dmg: 2,
  },
  horizontal: {
    dmg: 2,
  }
};
