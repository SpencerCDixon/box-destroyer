import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'rebeccapurple',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

export function VerticalTower() {
  return <Tile style={sx}>|</Tile>
}
