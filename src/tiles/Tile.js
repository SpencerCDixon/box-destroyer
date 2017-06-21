import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => ({
  length: stores.game.tileLength,
}))
@observer(['game'])
class Tile extends Component {
  static propTypes = {
    length: PropTypes.number.isRequired,
  }

  render() {
    const { style, children, length, ...rest } = this.props;
    const sx = {
      width: length,
      height: length,
      background: 'white',
      ...style,
    };

    return (
      <div style={sx} {...rest}>
        {children}
      </div>
    );
  }
}

export default Tile;
