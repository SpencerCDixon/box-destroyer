import React, { Component, PropTypes } from 'react';
import { Game } from './models/game.js';
import { levelOne } from './models/levels';

const PausedOverlay = () => 
  <div className="overlay">
    <h1 className="paused flex-center">Paused</h1>
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
      paused: false,
    }
    this.togglePause = () => this.setState({paused: !this.state.paused});
  }

  componentDidMount() {
    this.game = new Game(levelOne);
    this.loop = setInterval(() => {
      if (!this.state.paused) {
        this.setState({game: this.game.nextTick()});
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.loop)
  }

  render() {
    return (
      <div>
        <button style={{position: 'absolute', top: 20, left: 20}} onClick={this.togglePause}>
          {this.state.paused ? 'Unpause' : 'Pause'}
        </button>

        {this.state.game && (
          <div className="game">
            <CurrentTurn>{this.state.game.tick}</CurrentTurn>

            {this.state.game.board.tiles.map((row, i) => {
              return (
                <div className="row" key={`row-${i}`}>
                  {row.map((tile, i) => {
                    return tile.render()
                  })}
                </div>
              )
            })}

            {this.state.paused && <PausedOverlay />}
          </div>
        )}
      </div>
    );
  }
}

export default GameView;
