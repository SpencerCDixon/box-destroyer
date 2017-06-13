import React from 'react';
import { Tile } from './Tile';
import { BasicEnemy } from './BasicEnemy';
import { AdvancedEnemy } from './AdvancedEnemy';

const sx = {
  background: 'yellow',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function Path({enemies}) {
  return (
    <Tile style={sx}>
      {enemies.map(e => 
        e.type === 'basic' 
        ?  <BasicEnemy current={e.health} total={e.totalHealth} />
        :  <AdvancedEnemy current={e.health} total={e.totalHealth} />
      )}
    </Tile>
  )
}
