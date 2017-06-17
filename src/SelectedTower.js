import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { towerTypes, shopTowerTypes, towers } from './constants.js';
import { flex } from './styles';

const Container = styled.section`
  width: 100%;
`

const Header = styled.h1`
  color: white;
  text-align: center;
  margin: 10px 0;
  font-size: 2em;
`

const Logo = styled.div`
  height: 20vh;
  font-size: 3em;
  width: 100%;
  ${flex.center}
`

const Tower = styled.div`
  ${flex.center}
  margin: 20px 0;
`

const Desc = styled.p`
  color: white;
  text-align: center;
`

class SelectedTower extends Component {
  static propTypes = {
    selectedTower: PropTypes.oneOf(shopTowerTypes),
  }

  render() {
    const { selectedTower } = this.props;

    return (
      <Container className="tower-desc">
        <Logo>
          😀🗼🛡
        </Logo>

        <Header>{selectedTower}</Header>
        <Tower>{new towerTypes[selectedTower]().render()}</Tower>

        <Header>💰  {towers[selectedTower].price} </Header>
        <Header>💥  {towers[selectedTower].dmg} </Header>
        <Desc>
          {towers[selectedTower].rangeDesc}
        </Desc>
      </Container>
    );
  }
}

export default SelectedTower;
