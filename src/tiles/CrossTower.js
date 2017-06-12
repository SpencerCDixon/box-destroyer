import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: '#E03a3E',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

export function CrossTower() {
  return <Tile style={sx}>+</Tile>
}
