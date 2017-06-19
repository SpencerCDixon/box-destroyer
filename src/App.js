import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import store from './stores';
import Campaign from './components/Campaign';

class App extends Component {
  render() {
    return (
      <Provider game={store.game}>
        <div>
          <Campaign />
          {process.env.NODE_ENV !== 'production' && (
            <DevTools />
          )}
        </div>
      </Provider>
    );
  }
}

export default App;
