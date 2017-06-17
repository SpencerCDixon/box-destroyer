import React, { Component, PropTypes } from 'react';
import { levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven, levelEight } from './models/levels';

class Campaign extends Component {
  state = {
    currentLevel: 0,
    levels: [
      levelOne,
      levelTwo,
      levelThree,
      levelFour,
      levelFive,
      levelSix,
      levelSeven,
      levelEight,
    ],
    levelsComplete: 0,
    selectedTower: 'cross', // default to selecting cross tower
    gameState: 'paused',
  }

  render() {
    return (
      
    );
  }
}

export default MenuScreen;
