import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'slategray',
};

export function OffLimits() {
  return <Tile className="water" style={sx} />
}
