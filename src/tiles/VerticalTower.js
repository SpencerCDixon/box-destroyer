import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'rebeccapurple',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function VerticalTower() {
  return <Tile style={sx}>|</Tile>
}
