import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { gameStates } from '../../constants.js';
import { isPaused } from '../../towers/util';

// Game Components
import Level from '../Level.js';
import SelectedTower from '../SelectedTower.js';
import Shop from '../Shop.js';
import CampaignProgress from '../CampaignProgress.js';
import GameControls from '../GameControls.js';
import GameDevTools from '../GameDevTools.js';

// Campaign Styling
import { 
  Wrapper,
  Sidebar,
  ShopContainer,
  PlayingField,
  FlexColumn,
  LevelContainer,
  Row,
} from './styles';


@observer(['game'])
class Campaign extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleSelectTower = selectedTower => {
    this.props.game.selectTower(selectedTower);
  }
  handleLose = () => this.props.game.setState(gameStates.lost);
  handleReset = () => this.props.game.setState(gameStates.running);

  handleWin = () => {
    const { game } = this.props;
    game.nextLevel();
    game.setState(gameStates.win);
  }

  handleKeyPress = ({keyCode}) => {
    const { game } = this.props;
    // if key pressed is between 1 and 9
    if (keyCode >= 49 && keyCode < 58) {
      const idx = keyCode - 49;
      if (idx + 1 <= game.allowedTowers.length) {
        const selectedTower = game.allowedTowers[idx];
        this.handleSelectTower(selectedTower);
      }
    }

    // space bar - toggle pause
    if (keyCode === 32) {
      if (isPaused(game.gameState)) {
        game.setState(gameStates.running);
      } else {
        game.setState(gameStates.paused);
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <FlexColumn>
          <ShopContainer>
            <Shop />
          </ShopContainer>

          <PlayingField>
            <GameControls />

            <Row>
              <Sidebar>
                <SelectedTower />
              </Sidebar>

              <LevelContainer>
                <Level
                  onWin={this.handleWin}
                  onLose={this.handleLose}
                  onReset={this.handleReset}
                  speed={this.props.game.tickSpeed}
                />
              </LevelContainer>
            </Row>

            <CampaignProgress />
          </PlayingField>
        </FlexColumn>

        <GameDevTools />
      </Wrapper>
    );
  }
}

export default Campaign;
