import React, { PropTypes, Component } from 'react';
import { towerTypes, shopTowerTypes, towers } from './constants.js';
import styled from 'styled-components';
import cn from 'classnames';

const Price = styled.p`
  textAlign: center;
  color: white;
`;

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
      <div className="tower-selector">
        {allowedTowers.map(type => {
          const tower = new towerTypes[type]();

          return (
            <div 
              className={cn({
                tower: true,
                selected: selectedTower === type,
              })}
              onClick={onSelect.bind(this, type)}
            >
              {tower.render()}
              <Price>$ {towers[type].price}</Price>
            </div>
          )
        })}
      </div>
    );
  }
}
