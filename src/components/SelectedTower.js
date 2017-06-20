import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { towerTypes, towers } from '../constants';
import { flex } from '../styles';

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
  padding: 0 15px;
  color: white;
  text-align: center;
`

@inject(stores => ({
  selectedTower: stores.game.selectedTower
}))
@observer
class SelectedTower extends Component {
  static propTypes = {
    selectedTower: PropTypes.string.isRequired,
  }

  render() {
    const {selectedTower} = this.props;

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
