import React from 'react';
import Tile from './Tile';

const sx = {
  background: '#FDB827',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

export function SurroundTower() {
  return <Tile style={sx}>*</Tile>
}
