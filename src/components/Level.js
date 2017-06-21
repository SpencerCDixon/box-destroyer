import React, { Component, PropTypes } from 'react';
import styled from 'styled-components'
import { inject, observer } from 'mobx-react';
import { Game } from '../models/game.js';
import { isPaused, didWin, didLose } from '../towers/util';
import { flex } from '../styles';
import Button from './Button.js';
import HeightToBottom from './HeightToBottom.js';

const Gold = styled.div`
  color: goldenrod;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5em;
`;

const CurrentTurn = styled.div`
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5em;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  ${flex.center}
  flex-direction: column;
`;

const Header = styled.h1`
  color: white;
  text-align: center;
  margin: 10px 0;
  font-size: ${props => props.large ? '5em' : '2em'};
`

@inject(stores => ({
  speed: stores.game.tickSpeed,
  gameState: stores.game.gameState,
  currentLevel: stores.game.currentLevel,
  selectedTower: stores.game.selectedTower,
  length: stores.game.boardDimensions,
}))
@observer(['game'])
class Level extends Component {
  state = { 
    internalGame: undefined,
    height: -1,
    width: -1,
  }

  static propTypes = {
    onWin: PropTypes.func.isRequired, 
    onLose: PropTypes.func.isRequired, 
    onReset: PropTypes.func.isRequired,
    speed: PropTypes.number.isRequired,
    gameState: PropTypes.string.isRequired,
    currentLevel: PropTypes.object.isRequired,
    length: PropTypes.number.isRequired,
  }

  componentDidMount() {
    const { currentLevel, speed, onWin, onLose } = this.props;

    this.internalGame = new Game(currentLevel, onWin, onLose);
    this.loop = setInterval(() => {
      if (this.isRunning()) {
        this.setState({internalGame: this.internalGame.nextTick()});
      }
    }, speed) // Allow levels to have their own interval for sending enemies out.
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.speed !== nextProps.speed) {
      this.speedUp(nextProps.speed);
    }
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  isRunning = () => {
    return this.props.gameState === 'running';
  }

  speedUp = (newSpeed) => {
    clearInterval(this.loop);
    this.loop = setInterval(() => {
      if (this.isRunning()) {
        this.setState({internalGame: this.internalGame.nextTick()});
      }
    }, newSpeed);
  }

  addTower = tile => {
    const { game } = this.props
    tile.placeTower(game.selectedTower);
  }

  reset = () => {
    clearInterval(this.loop);
    const { speed, currentLevel, onWin, onLose, onReset } = this.props;
    // rebuild game, set it as current level, start loop back up.
    this.internalGame = new Game(currentLevel, onWin, onLose);
    this.setState({game: this.internalGame});
    this.loop = setInterval(() => {
      if (this.isRunning()) {
        this.setState({internalGame: this.internalGame.nextTick()});
      }
    }, speed) // Allow levels to have their own interval for sending enemies out.

    onReset();
  }

  render() {
    const { length, gameState } = this.props;

    if (!this.state.internalGame) {
      return null;
    }

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{height: length, width: length, position: 'relative'}} className="game">
          {didLose(gameState) && (
            <Overlay>
              <Header>You lose... fucking idiot.</Header>
              <Header large>😂</Header>
              <Button onClick={this.reset}>
                Try Again
              </Button>
            </Overlay>
          )}
          {didWin(gameState) && (
            <Overlay>
              <Header>Nice job human.</Header>
              <Header large>😖</Header>
              <Button onClick={this.reset}>Next Level</Button>
            </Overlay>
          )}
          {isPaused(gameState) && (
            <Overlay>
              <Header>Paused</Header>
              <Header large>⏸</Header>
            </Overlay>
          )}

          <CurrentTurn>⏱ {this.state.internalGame.tick}</CurrentTurn>
          <Gold>💰 {this.state.internalGame.gold}</Gold>

          {this.state.internalGame.board.tiles.map((row, i) => {
            return (
              <div className="row" key={`row-${i}`}>
                {row.map((tile, i) => {
                  return tile.render(this.addTower.bind(this, tile))
                })}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
export default Level;
