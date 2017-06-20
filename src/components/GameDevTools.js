import React, { Component, PropTypes } from 'react';
import DevTools from 'mobx-react-devtools';
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

const isProd = process.env.NODE_ENV === 'production';

@observer(['game'])
class GameDevTools extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
  }

  render() {
    const { game } = this.props;
     
    if (isProd) return null;

    return (
      <Wrapper>
        <Info>tickSpeed: {game.tickSpeed}</Info>
        <Info>gameState: {game.gameState}</Info>
        <DevTools />
      </Wrapper>
    );
  }
}

export default GameDevTools;
