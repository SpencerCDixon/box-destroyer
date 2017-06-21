import React from 'react';
import Tile from './Tile';
import { BasicEnemy } from './BasicEnemy';
import { AdvancedEnemy } from './AdvancedEnemy';
import { JesusEnemy } from './JesusEnemy';
import { TallEnemy } from './TallEnemy';
import { LongEnemy } from './LongEnemy';

const sx = {
  background: 'yellow',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function Path({enemies}) {
  return (
    <Tile className="path-tile" style={sx}>
      {enemies.map(e =>  {
        switch (e.type) {
          case 'basic':
            return <BasicEnemy current={e.health} total={e.totalHealth} /> 
          case 'advanced':
            return <AdvancedEnemy current={e.health} total={e.totalHealth} />
          case 'jesus':
            return <JesusEnemy current={e.health} total={e.totalHealth} />
          case 'long':
            return <LongEnemy current={e.health} total={e.totalHealth} />
          case 'tall':
            return <TallEnemy current={e.health} total={e.totalHealth} />
        } 
      })}
    </Tile>
  )
}
