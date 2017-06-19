import React, { PropTypes, Component } from 'react';
import { inject, observer } from 'mobx-react';
import { towerTypes, towers } from '../constants';
import styled, {css} from 'styled-components';
import Button from './Button';

const Price = styled.p`
  textAlign: center;
  color: white;
  margin: 5px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
`

const TowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  padding: 0 20px;
  ${props => props.selected && css`
    background: pink;
  `}
`

@inject(stores => ({
  allowedTowers: stores.game.allowedTowers,
  selectedTower: stores.game.selectedTower,
  onSelect: stores.game.selectTower,
}))
@observer(['game'])
export default class Shop extends Component {
  static propTypes = {
    allowedTowers: PropTypes.array.isRequired,
    selectedTower: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  render() {
    const {
      allowedTowers,
      selectedTower,
      onSelect,
    } = this.props;

    return (
      <Container>
        {allowedTowers.map(type => {
          const tower = new towerTypes[type]();

          return (
            <TowerContainer selected={selectedTower === type}>
              {tower.render()}
              <Price>💰 {towers[type].price}</Price>

              <Button onClick={onSelect.bind(this, type)}>
                Select
              </Button>
            </TowerContainer>
          )
        })}
      </Container>
    );
  }
}
