import React, { Component, PropTypes } from 'react';
import { Game } from './models/game.js';

const CurrentTurn = ({children}) => 
  <div className="turn">
    {children}
  </div>

class Level extends Component {
  state = { game: undefined }

  static propTypes = {
    level: PropTypes.array.isRequired,
    gameState: PropTypes.string.isRequired,
    onStateChange: PropTypes.func.isRequired, // change to paused/lost/win
  }

  componentDidMount() {
    const { level, onLose, onWin, changeGold } = this.props;
    this.game = new Game(
      level,
      onLose,
      onWin,
      changeGold, // TODO: use observable here
    );

    this.loop = setInterval(() => {
      if (this.props.gameState === 'running') {
        this.setState({game: this.game.nextTick()});
      }
    }, level.interval || 500) // Allow levels to have their own interval for sending enemies out.
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  reset = () => {
    clearInterval(this.loop);

    const { level, onLose, onWin, changeGold } = this.props;
    this.game = new Game(
      level,
      onLose,
      onWin,
      changeGold, 
    );

    this.loop = setInterval(() => {
      this.setState({game: this.game.nextTick()});
    }, level.interval || 500) // Allow levels to have their own interval for sending enemies out.
  }


  render() {

    if (!this.state.game) {
      return null;
    }

    return (
      <div className="game">
        <CurrentTurn>{this.state.game.tick}</CurrentTurn>

        {this.state.game.board.tiles.map((row, i) => {
          return (
            <div className="row" key={`row-${i}`}>
              {row.map((tile, i) => {
                return tile.render(this.props.addTower.bind(this, tile))
              })}
            </div>
          )
        })}

        {/* this.isPaused && <Overlay>Paused</Overlay> */}
        {/* this.isOver && <Overlay>Game Over</Overlay> */}
        {/* this.isWon && <Overlay>You Win!</Overlay> */}
      </div>
    );
  }
}
export default Level;
