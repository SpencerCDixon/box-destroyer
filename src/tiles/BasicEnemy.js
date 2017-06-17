import React from 'react';
import { Tile } from './Tile';

export function BasicEnemy({current, total}) {
  const sx = {
    width: 25,
    height: 25,
    borderRadius: '50%',
    color: 'white',
  };
  const percent = current / total;
  const health = {
    width: 22 * percent,
    height: 3,
    background: 'green',
  }
  return (
    <div style={sx}>
      💩
      <div style={health} />
    </div>
  )
}
