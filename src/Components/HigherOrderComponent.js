import React, { Component } from "react";

const UpdatedComponent = (ChildComponent) => {
  class WrappedComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prev) => ({
        count: prev.count + 1,
      }));
    };
    render() {
      return (
        <ChildComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return WrappedComponent;
};

export default UpdatedComponent;
