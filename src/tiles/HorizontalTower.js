import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'orange',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

export function HorizontalTower() {
  return <Tile style={sx}>--</Tile>
}
