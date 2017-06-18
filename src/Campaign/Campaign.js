import React, { Component, PropTypes } from 'react';
import { 
  levelOne, levelTwo, levelThree, levelFour, 
  levelFive, levelSix, levelSeven, levelEight 
} from '../models/levels';
import { gameStates, towers } from '../constants.js';
import { isPaused } from '../towers/util';

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
  LevelContainer,
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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
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

  handleKeyPress = ({keyCode}) => {
    // if key pressed is between 1 and 9
    if (keyCode >= 49 && keyCode < 58) {
      const idx = keyCode - 49;
      if (idx + 1 <= this.currentLevel.allowedTowers.length) {
        const selectedTower = this.currentLevel.allowedTowers[idx];
        this.handleSelectTower(selectedTower);
      }
    }

    // space bar - toggle pause
    if (keyCode === 32) {
      if (isPaused(this.state.gameState)) {
        this.setState({gameState: gameStates.running})
      } else {
        this.setState({gameState: gameStates.paused})
      }
    }
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
            <LevelContainer>
              <Level
                level={this.currentLevel}
                gameState={this.state.gameState}
                onWin={this.handleWin}
                onLose={this.handleLose}
                onReset={this.handleReset}
                selectedTower={this.state.selectedTower}
              />
            </LevelContainer>

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
