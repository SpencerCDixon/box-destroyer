import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { range } from 'lodash';

const Wrapper = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
`;

const Level = styled.div`
  width: 30%;
  height: 25px;
  margin: 0 3px;
  background: ${props => props.complete ? 'black' : 'gray'};
`

class CampaignProgress extends Component {
  static propTypes = {
    levelsComplete: PropTypes.number.isRequired,
    totalLevels: PropTypes.number.isRequired,
  }

  render() {
    return (
      <Wrapper>
        {range(this.props.totalLevels).map((l, i) => (
          <Level 
            complete={this.props.levelsComplete > i} 
            totalLevels={this.props.totalLevels}
          />
        ))}
      </Wrapper>
    );
  }
}

export default CampaignProgress;
