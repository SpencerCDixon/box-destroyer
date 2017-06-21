import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => ({
  setBoardDimensions: stores.game.setBoardDimensions,
}))
@observer(['game'])
class ResponsiveLevelContainer extends Component {
  static propTypes = {
    setBoardDimensions: PropTypes.func.isRequired,
  }

  state = { offset: 0 }

  componentDidMount() {
    this.bodyHeight = document.body.getBoundingClientRect().bottom;
    this.elHeight = this.container.getBoundingClientRect().top;
    const heightOffset = this.bodyHeight - this.elHeight;
    const width = window.innerWidth;
    console.log({width, heightOffset});
    this.props.setBoardDimensions(Math.min(width, heightOffset));
  }

  render() {
    return (
      <div ref={el => this.container = el}>
        {this.props.children}
      </div>
    );
  }
}

export default ResponsiveLevelContainer;
