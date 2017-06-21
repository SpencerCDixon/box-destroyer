import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from './stores';
import { MobxRouter, startRouter } from 'mobx-router';
import routes from './routes.js';

startRouter(routes, store);

class App extends Component {
  render() {
    return (
      <Provider store={store} game={store.game}>
        <MobxRouter />
      </Provider>
    );
  }
}

export default App;
