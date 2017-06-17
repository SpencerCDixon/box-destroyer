import React, { Component, PropTypes } from 'react';
import { levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven, levelEight } from '../models/levels';

import Level from '../Level.js';
import SelectedTower from '../SelectedTower.js';
import Shop from '../Shop.js';

import { 
  Wrapper,
  Sidebar,
  Metrics,
  PlayingField,
  FlexColumn,
} from './styles';


class Campaign extends Component {
  state = {
    currentLevel: 0,
    levels: [
      levelOne,
      levelTwo,
      levelThree,
      levelFour,
      levelFive,
      levelSix,
      levelSeven,
      levelEight,
    ],
    levelsComplete: 0,
    selectedTower: 'cross', // default to selecting cross tower
    gameState: 'paused',
    gold: 0,
  }

  get currentLevel() {
    return this.state.levels[this.state.currentLevel]
  }

  render() {
    return (
      <Wrapper>
        <Sidebar>
          <SelectedTower selectedTower={this.state.selectedTower} />
        </Sidebar>

        <FlexColumn>
          <Metrics>
            <Shop
              allowedTowers={this.currentLevel.allowedTowers}
              selectedTower={this.state.selectedTower}
              onSelect={() => {}}
              gold={this.state.gold}
            />
          </Metrics>

          <PlayingField>
            game here
          </PlayingField>
        </FlexColumn>
      </Wrapper>
    );
  }
}

export default Campaign;
