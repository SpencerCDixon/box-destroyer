import React, { Component, PropTypes } from 'react';

class HeightToBottom extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = { offset: 0 }

  componentDidMount() {
    this.bodyHeight = document.body.getBoundingClientRect().bottom;
    this.elHeight = this.container.getBoundingClientRect().top;
    const offset = this.bodyHeight - this.elHeight;
    this.setState({offset: offset});
  }

  render() {
    return (
      <div ref={el => this.container = el}>
        {this.props.children(this.state.offset)}
      </div>
    );
  }
}

export default HeightToBottom;
