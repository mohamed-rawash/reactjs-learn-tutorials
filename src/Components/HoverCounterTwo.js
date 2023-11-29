import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>Clicked {count} Times</h1>;
  }
}

export default HoverCounterTwo