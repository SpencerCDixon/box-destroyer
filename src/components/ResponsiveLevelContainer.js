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
    this.setDimensions();
    window.addEventListener('resize', this.setDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions)
  }

  setDimensions = () => {
    const bodyHeight = document.body.getBoundingClientRect().bottom;
    const elHeight = this.container.getBoundingClientRect().top;
    const heightOffset = bodyHeight - elHeight;
    const width = window.innerWidth;
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
