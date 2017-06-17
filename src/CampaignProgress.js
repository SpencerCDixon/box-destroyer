import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
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
            key={i}
            complete={this.props.levelsComplete > i} 
            totalLevels={this.props.totalLevels}
          >
            {i + 1}
          </Level>
        ))}
      </Wrapper>
    );
  }
}

export default CampaignProgress;
