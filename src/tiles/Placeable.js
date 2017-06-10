import React from 'react';
import { Tile } from './Tile';

const sx = {
  background: 'green',
};

export function Placeable(props) {
  return <Tile onClick={props.click} style={sx} />
}
