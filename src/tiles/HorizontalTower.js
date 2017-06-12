import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: '#F5821F',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

export function HorizontalTower() {
  return <Tile style={sx}>--</Tile>
}
