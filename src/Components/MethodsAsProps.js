import React, { Component, Fragment } from 'react'
import ChildComponent from './ChildComponent';
class MethodsAsProps extends Component {
  constructor(props) {
    super();
    this.state = {
      parentName: "This Parent Component",
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <Fragment>
        <div>MethodsAsProps</div>
        <ChildComponent greetHandler={this.greetParent} />
      </Fragment>
    );
  }
}

export default MethodsAsProps