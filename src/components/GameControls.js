import React, { Component, PropTypes } from 'react';
import styled from 'styled-components'
import Slider from 'rc-slider';
import { observer } from 'mobx-react';
import { gameStates } from '../constants.js';

import Button from './Button.js';
import Text from './Text.js';

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  background: #708090;
  justify-content: center;
  align-items: center;
`


@observer(['game'])
class GameControls extends Component {
  speedUp = value => {
    this.props.game.updateTicker(value * 10);
  }

  reset = () => {
    this.props.game.setState(gameStates.lost);
  }

  giveHint = () => {
    alert('venmo spencer $5 ;)');
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.reset} mx={2}>
          Give Up
        </Button>

        <Button onClick={this.giveHint} mx={2}>
          Hint
        </Button>

        <Text mx={2}> Enemy Speed </Text>

        <Slider 
          style={{maxWidth: 300}}
          min={1} 
          max={100} 
          defaultValue={this.props.game.tickSpeed / 10} 
          onAfterChange={this.speedUp} 
        />
      </Wrapper>
    );
  }
}

export default GameControls;
