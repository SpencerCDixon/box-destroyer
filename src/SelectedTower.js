import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { towerTypes, shopTowerTypes, towers } from './constants.js';

const Container = styled.section`
`

class SelectedTower extends Component {
  static propTypes = {
    selectedTower: PropTypes.oneOf(shopTowerTypes),
  }

  render() {
    const { selectedTower } = this.props;

    return (
      <Container className="tower-desc">
        <div>{new towerTypes[selectedTower]().render()}</div>

        <h3>Name: {selectedTower} Tower</h3>
        <h3>Price: {towers[selectedTower].price} Tower</h3>
        <h3>Damage: {towers[selectedTower].dmg} Tower</h3>
        <p>{towers[selectedTower].rangeDesc}</p>
      </Container>
    );
  }
}

export default SelectedTower;
