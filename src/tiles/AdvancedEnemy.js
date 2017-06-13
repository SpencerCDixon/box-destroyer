import React from 'react';
import { Tile } from './Tile';

export function AdvancedEnemy({current, total}) {
  const sx = {
    background: `rgba(224,58,62,${current / total}`,
    width: 25,
    height: 25,
    borderRadius: '50%',
  };
  return <div style={sx} />
}
