import React from 'react';

const sx = {
  width: 50,
  height: 50,
  background: 'rgba(0,0,0,0.4)',
};

export function Tile({style, ...props}) {
  return (
    <div style={{...sx, ...style}} {...props} />
  );
}
