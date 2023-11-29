import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderComponent";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
