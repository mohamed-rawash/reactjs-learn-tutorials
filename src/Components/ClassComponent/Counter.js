import React from "react";
import { Fragment } from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment() {
    // this.setState({
    //   counter: this.state.counter + 1,
    // }, () => {
    //   console.log(`from callback value is - ${this.state.counter}`);
    // });
    this.setState((prevState) => ({
      counter: prevState.counter+1,
    }));
    console.log(this.state.counter);
  }
  render() {
    return (
      <Fragment>
        <p>Count - {this.state.counter}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </Fragment>
    );
  }
}
export default Counter;
