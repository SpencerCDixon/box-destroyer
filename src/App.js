import React, { Component } from 'react';
import GameView from './GameView.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <GameView />
      </div>
    );
  }
}

export default App;
