import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameView from './GameView.js';

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
