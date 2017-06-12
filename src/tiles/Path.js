import React from 'react';
import { Tile } from './Tile';
import { BasicEnemy } from './BasicEnemy';

const sx = {
  background: 'yellow',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function Path({enemies}) {
  return (
    <Tile style={sx}>
      {enemies.map(e => <BasicEnemy current={e.health} total={e.totalHealth} />)}
    </Tile>
  )
}
