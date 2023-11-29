import React, { Component, Fragment } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.eventHandeller = this.eventHandeller.bind(this);
  }
  // eventHandeller() {
  //   this.setState({
  //     message: "Hello World, React",
  //   });
  // }
  clickHandler = () => {
    this.setState({
      message: "Hello World, React",
    });
  }
  render() {
    return (
      <Fragment>
        <div>{this.state.message}</div>
        {/* <button onClick={this.eventHandeller.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.eventHandeller()}>Click</button> */}
        {/* <button onClick={this.eventHandeller}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </Fragment>
    );
  }
}

export default EventBind;
