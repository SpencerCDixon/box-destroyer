import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from './stores';
import Campaign from './components/Campaign';

class App extends Component {
  render() {
    return (
      <Provider game={store.game}>
        <Campaign />
      </Provider>
    );
  }
}

export default App;
