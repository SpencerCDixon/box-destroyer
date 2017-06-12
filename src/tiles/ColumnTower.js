import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'lightsalmon',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

export function ColumnTower() {
  return <Tile style={sx}>||</Tile>
}
