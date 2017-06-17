import React from 'react';
import { Tile } from './Tile';

export function BasicEnemy({current, total}) {
  const sx = {
    background: `rgba(0,0,0,${current / total}`,
    width: 25,
    height: 25,
    borderRadius: '50%',
    color: 'white',
  };
  return <div style={sx}>{current}</div>
}
