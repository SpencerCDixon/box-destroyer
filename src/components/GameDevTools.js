import React, { Component, PropTypes } from 'react';
import styled from 'styled-components'
import { observer } from 'mobx-react';

// import { gameStates } from '../constants.js';
// import Button from './Button.js';

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: white;
  border: 1px solid black;
  padding: 15px;
`

const Info = styled.p`
  
`

@observer(['game'])
class GameDevTools extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
  }

  render() {
    const { game } = this.props;

    return (
      <Wrapper>
        <Info>tickSpeed: {game.tickSpeed}</Info>
        <Info>gameState: {game.gameState}</Info>
      </Wrapper>
    );
  }
}

export default GameDevTools;
