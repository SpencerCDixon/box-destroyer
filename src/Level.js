import React, { Component, PropTypes } from 'react';
import { Game } from './models/game.js';
import { gameStates } from './constants.js';
import * as levels from './models/levels.js';
import styled from 'styled-components'
import { didWin, didLose } from './towers/util';
import { flex } from './styles';
import { Button } from './styles/Button.js';

const Gold = styled.div`
  color: goldenrod;
  position: absolute;
  top: -30px;
  font-size: 1.5em;
`;

const CurrentTurn = styled.div`
  color: white;
  position: absolute;
  top: -30px;
  right: 1px;
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
        {didLose(this.props.gameState) && (
          <Overlay>
            <Header>You lose... fucking idiot.</Header>
            <Header large>😂</Header>
            <Button onClick={this.reset}>
              Try Again
            </Button>
          </Overlay>
        )}
        {didWin(this.props.gameState) && (
          <Overlay>
            <Header>Nice job human.</Header>
            <Header large>😖</Header>
            <Button onClick={this.reset}>Next Level</Button>
          </Overlay>
        )}

        <CurrentTurn>⏱ {this.state.game.tick}</CurrentTurn>
        <Gold>💰 {this.state.game.gold}</Gold>

        {this.state.game.board.tiles.map((row, i) => {
          return (
            <div className="row" key={`row-${i}`}>
              {row.map((tile, i) => {
                return tile.render(this.addTower.bind(this, tile))
              })}
            </div>
          )
        })}
      </div>
    );
  }
}
export default Level;
