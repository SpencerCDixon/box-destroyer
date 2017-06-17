import React, { Component, PropTypes } from 'react';
import { 
  levelOne, levelTwo, levelThree, levelFour, 
  levelFive, levelSix, levelSeven, levelEight 
} from '../models/levels';
import { gameStates, towers } from '../constants.js';


// Game Components
import Level from '../Level.js';
import SelectedTower from '../SelectedTower.js';
import Shop from '../Shop.js';
import CampaignProgress from '../CampaignProgress.js';

// Campaign Styling
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
    gameState: 'running',
  }

  get currentLevel() {
    return this.state.levels[this.state.currentLevel]
  }

  handleSelectTower = selectedTower => this.setState({selectedTower})
  handleLose = () => this.setState({gameState: gameStates.lost});
  handleReset = () => this.setState({gameState: gameStates.running});

  handleWin = () => {
    this.setState({
      gameState: gameStates.win,
      currentLevel: ++this.state.currentLevel,
      levelsComplete: ++this.state.levelsComplete, // TODO: don't think I need this, can use CL
    });
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
              onSelect={this.handleSelectTower}
            />
          </Metrics>

          <PlayingField>
            <Level
              level={this.currentLevel}
              gameState={this.state.gameState}
              onWin={this.handleWin}
              onLose={this.handleLose}
              onReset={this.handleReset}
              selectedTower={this.state.selectedTower}
            />

            <div style={{flex: 1}} />

            <CampaignProgress 
              levelsComplete={this.state.levelsComplete} 
              totalLevels={this.state.levels.length} 
            />
          </PlayingField>
        </FlexColumn>
      </Wrapper>
    );
  }
}

export default Campaign;
