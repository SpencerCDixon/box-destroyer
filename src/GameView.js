import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import { Game } from './models/game.js';
import { levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix } from './models/levels';
import { towerTypes, towers, shopTowerTypes } from './constants.js';
import { isUndefined } from 'lodash';

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
      levelSix, 
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

  get isPaused() { return this.state.gameState === 'paused' }
  get isOver() { return this.state.gameState === 'over' }
  get isWon() { return this.state.gameState === 'win' }

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
        <button className="btn" style={{position: 'absolute', top: 20, left: 20}} onClick={this.togglePause}>
          {this.state.paused ? 'Unpause' : 'Pause'}
        </button>

        <div className="tower-selector">
          {this.state.game && this.state.game.allowedTowers.map(type => {
            const tower = new towerTypes[type]();

            return (
              <div>
                <div 
                  className={cn({
                    tower: true,
                    selected: this.state.selectedTower === type,
                  })} 
                  onClick={this.selectTower.bind(this, type)}
                >
                  {tower.render()}
                </div>
                <p style={{textAlign: 'center', color: 'white'}}>${towers[type].price}</p>
              </div>
            );
          })}
        </div>

        <div className="money-container">
          <h3>Gold: $  {this.state.gold}</h3>
        </div>

        {this.state.selectedTower && (
          <div className="tower-desc" style={{position: 'absolute', top: 100, left: 20}}>
            <header>
              {new towerTypes[this.state.selectedTower]().render()}
            </header>

            <h3>Name: {this.state.selectedTower}</h3>
            <h3>Price: {towers[this.state.selectedTower].price}</h3>
            <h3>Range: </h3>
            <p>{towers[this.state.selectedTower].rangeDesc}</p>
          </div>
        )}

        {this.state.game && (
          <div className="game">
            <CurrentTurn>{this.state.game.tick}</CurrentTurn>

            {this.state.game.board.tiles.map((row, i) => {
              return (
                <div className="row" key={`row-${i}`}>
                  {row.map((tile, i) => {
                    return tile.render(this.addTower.bind(this, tile))
                  })}
                </div>
              )
            })}

            {this.isPaused && <Overlay>Paused</Overlay>}
            {this.isOver && <Overlay>Game Over</Overlay>}
            {this.isWon && <Overlay>You Win!</Overlay>}
          </div>
        )}
      </div>
    );
  }
}

export default GameView;
