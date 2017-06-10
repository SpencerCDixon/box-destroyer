import React, { Component, PropTypes } from 'react';
import { Game } from './models/game.js';
import { levelOne } from './models/levels';

const Overlay = ({children}) => 
  <div className="overlay">
    <h1 className="paused flex-center">{children}</h1>
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
      selectedTower: 'simple',
    }
    this.togglePause = () => this.setState({
      gameState: this.state.gameState === 'paused' ? 'running' : 'paused'
    });
    this.handleOver = () => this.setState({gameState: 'over'});
  }

  componentDidMount() {
    this.game = new Game(levelOne, this.handleOver);
    this.loop = setInterval(() => {
      if (this.state.gameState === 'running') {
        this.setState({game: this.game.nextTick()});
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.loop)
  }

  get isPaused() { return this.state.gameState === 'paused' }
  get isOver() { return this.state.gameState === 'over' }

  addTower = (tile) => {
    // if I can place tower, put here
    tile.placeTower(this.state.selectedTower);
  }

  render() {
    return (
      <div>
        <button style={{position: 'absolute', top: 20, left: 20}} onClick={this.togglePause}>
          {this.state.paused ? 'Unpause' : 'Pause'}
        </button>

        <div>
          Selected tower type: {this.state.selectedTower}
        </div>

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
          </div>
        )}
      </div>
    );
  }
}

export default GameView;
