import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'yellow',
};

export function Path({enemies}) {
  return (
    <Tile style={sx}>
      {enemies.map(e => `X (${e.health})`)}
    </Tile>
  )
}
