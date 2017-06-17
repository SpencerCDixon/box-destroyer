import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import { Game } from './models/game.js';
import { levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven, levelEight } from './models/levels';
import { towerTypes, towers, shopTowerTypes } from './constants.js';
import { isUndefined } from 'lodash';

import Level from './Level.js';
import SelectedTower from './SelectedTower.js';
import Shop from './Shop.js';

const Overlay = ({children}) => 
  <div className="overlay flex-center">
    <h1 className="paused">{children}</h1>
  </div>

const CurrentTurn = ({children}) => 
  <div className="turn">
    {children}
  </div>

class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      game: undefined,
      gameState: 'running',
      selectedTower: shopTowerTypes[0],
      gold: 0,
    }
    this.togglePause = () => this.setState({
      gameState: this.state.gameState === 'paused' ? 'running' : 'paused'
    });
    this.handleOver = () => this.setState({gameState: 'over'});
    this.handleWin = () => this.setState({gameState: 'win'});
  }

  componentDidMount() {
    this.game = new Game(
      levelOne, 
      this.handleOver, 
      this.handleWin,
      this.changeGold,
    );

    this.setState({gold: this.game.gold});
    
    this.loop = setInterval(() => {
      if (this.state.gameState === 'running') {
        this.setState({game: this.game.nextTick()});
      }
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.loop)
  }

  addTower = (tile) => {
    const towerPrice = towers[this.state.selectedTower].price;

    // if I can place tower, put here
    if (this.state.gold >= towerPrice) {
      tile.placeTower(this.state.selectedTower);
      this.changeGold(-towerPrice);
    } 
  }

  selectTower = (type) => {
    this.setState({selectedTower: type})
  }

  // can be pos or neg
  changeGold = (num) => {
    this.setState({gold: this.state.gold + num});
  }

  render() {
    return (
      <div>
        <Shop
          allowedTowers={levelOne.allowedTowers}
          selectedTower={this.state.selectedTower}
          onSelect={this.selectTower}
          gold={this.state.gold}
        />


        <SelectedTower selectedTower={this.state.selectedTower} />

        <Level 
          gameState={this.state.gameState}
          onLose={this.handleOver}
          onWin={this.handleWin}
          addTower={this.addTower}
          level={levelOne}
          changeGold={this.changeGold}
        />
      </div>
    );
  }
}

export default GameView;
