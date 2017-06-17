import React, { Component, PropTypes } from 'react';
import { Game } from './models/game.js';
import { gameStates } from './constants.js';
import * as levels from './models/levels.js';
import styled from 'styled-components'
import { didWin, didLose } from './towers/util';

const Gold = styled.div`
  color: goldenrod;
  position: absolute;
  top: 20px;
  left: 20px;
`

const CurrentTurn = styled.div`
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
`

class Level extends Component {
  state = { 
    game: undefined,
  }

  static propTypes = {
    level: PropTypes.object.isRequired,
    gameState: PropTypes.oneOf(Object.keys(gameStates)),

    onWin: PropTypes.func.isRequired, 
    onLose: PropTypes.func.isRequired, 

    selectedTower: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { level, onWin, onLose } = this.props;
    this.game = new Game(level, onWin, onLose);
    this.loop = setInterval(() => {
      if (this.props.gameState === 'running') {
        this.setState({game: this.game.nextTick()});
      }
    }, level.interval || 500) // Allow levels to have their own interval for sending enemies out.
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  componentWillReceiveProps(nextProps) {
    console.log({props: this.props, nextProps});
    if (this.props.level !== nextProps.level) {
      console.log('new level');
    }
  }

  addTower = tile => {
    const { selectedTower } = this.props
    tile.placeTower(selectedTower);
  }

  reset = () => {
    clearInterval(this.loop);
    const { level, onWin, onLose, onReset } = this.props;
    // rebuild game, set it as current level, start loop back up.
    this.game = new Game(level, onWin, onLose);
    this.setState({game: this.game});
    this.loop = setInterval(() => {
      if (this.props.gameState === 'running') {
        this.setState({game: this.game.nextTick()});
      }
    }, level.interval || 500) // Allow levels to have their own interval for sending enemies out.

    // reset game state to running
    this.props.onReset();
  }

  render() {
    if (!this.state.game) {
      return null;
    }

    return (
      <div className="game">
        {didLose(this.props.gameState) && <button onClick={this.reset}>reset</button>}
        {didWin(this.props.gameState) && <button onClick={this.reset}>nextLevel</button>}
        <CurrentTurn>{this.state.game.tick}</CurrentTurn>
        <Gold>{this.state.game.gold}</Gold>

        {this.state.game.board.tiles.map((row, i) => {
          return (
            <div className="row" key={`row-${i}`}>
              {row.map((tile, i) => {
                return tile.render(this.addTower.bind(this, tile))
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
