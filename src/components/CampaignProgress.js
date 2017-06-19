import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { range } from 'lodash';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Level = styled.div`
  width: 30%;
  background: ${props => props.complete ? 'black' : '#222831'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`

@inject(stores => ({
  totalLevels: stores.game.totalWorldLevels,
  levelsComplete: stores.game.level,
  world: stores.game.world,
}))
@observer
class CampaignProgress extends Component {
  static propTypes = {
    levelsComplete: PropTypes.number.isRequired,
    totalLevels: PropTypes.number.isRequired,
    world: PropTypes.number.isRequired,
  }

  render() {
    const { world, totalLevels, levelsComplete } = this.props;

    return (
      <Wrapper>
        {range(totalLevels).map((l, i) => (
          <Level 
            key={i}
            complete={levelsComplete > i} 
            totalLevels={totalLevels}
          >
            {world}-{i + 1}
          </Level>
        ))}
      </Wrapper>
    );
  }
}

export default CampaignProgress;
