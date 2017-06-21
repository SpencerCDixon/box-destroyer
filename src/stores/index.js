import { RouterStore } from 'mobx-router';
import { GameStore } from './game-store';

const store = {
  game: new GameStore(),
  router: new RouterStore(),
};

export default store;
