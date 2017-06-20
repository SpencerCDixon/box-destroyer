import { computed, action, observable } from 'mobx';
import { worlds } from '../constants';

export class GameStore {
  // Minimum required state for the game
  @observable level = 1;
  @observable world = 1;
  @observable gameState = 'running';
  @observable selectedTower = 'cross';
  @observable tickSpeed = 1000;

  // Actions that can change the state
  @action nextLevel = () => {
    this.level = this.level + 1;
  }

  @action selectTower = selectedTower => {
    // TODO: add checking that it's an allowed tower
    this.selectedTower = selectedTower
  }

  @action setState = newState => {
    // TODO: add checking that it's an allowed state
    this.gameState = newState
  }

  @action updateTicker = newSpeed => {
    this.tickSpeed = newSpeed;
    console.log({tickSpeed: this.tickSpeed});
  }

  // Computed Values
  @computed get currentLevel() {
    // arrays are 0 indexed so subtract 1
    return worlds[this.world.toString()].levels[this.level - 1]
  }

  @computed get totalWorldLevels() {
    return worlds[this.world.toString()].levels.length;
  }

  @computed get allowedTowers() {
    return this.currentLevel.allowedTowers;
  }
}
