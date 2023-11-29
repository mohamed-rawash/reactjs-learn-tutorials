import React, { Component } from "react";

class LifecycleMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rooooo",
    };
    console.log("Lifecycle Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle getDrivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("Lifecycle shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("Lifecycle getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate() {
    console.log("Lifecycle componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Mooooo",
    });
  };
  render() {
    console.log("Lifecycle render");
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default LifecycleMethods;
