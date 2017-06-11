import React, { PropTypes, Component } from 'react';

export default class Shop extends Component {
  static propTypes = {
    towerTypes: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
