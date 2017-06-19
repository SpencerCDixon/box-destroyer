import { action, observable } from 'mobx';

export class GameStore {
  @observable level = 1;
  @observable gameState = 'running';
  @observable selectedTower = 'cross';

  @action nextLevel = () => {
    this.level = this.level + 1;
  }

  @action selectTower = selectedTower => {
    this.selectedTower = selectedTower
  }
}
