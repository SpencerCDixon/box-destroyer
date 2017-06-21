import React from 'react';
import Tile from './Tile';

const sx = {
  background: 'green',
};

export function Placeable(props) {
  return <Tile className="grass" onClick={props.click} style={sx} />
}
