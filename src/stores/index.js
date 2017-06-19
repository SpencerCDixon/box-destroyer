import { action, observable } from 'mobx';

class GameState {
  @observable level = 1;

  @action nextLevel = () => {
    this.level = this.level + 1;
  }
}

const store = {
  game: new GameState()
};

export default store;
