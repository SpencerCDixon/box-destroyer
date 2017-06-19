import React, { Component } from 'react';
import Campaign from './Campaign';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import store from './stores';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
