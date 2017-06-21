import React from 'react';
import Tile from './Tile';

const sx = {
  background: '#61BB46',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

export function VerticalTower() {
  return <Tile style={sx}>|</Tile>
}
