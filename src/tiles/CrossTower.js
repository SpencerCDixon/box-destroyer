import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'goldenrod',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function CrossTower() {
  return <Tile style={sx}>+</Tile>
}
