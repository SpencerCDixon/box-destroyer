import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'green',
};

export function Placeable() {
  return <Tile style={sx} />
}
