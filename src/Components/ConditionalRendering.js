// if/else
// Element variables
// Ternary conditional
// short circuit operator
import React, { Component, Fragment } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    //  if/else
    if (this.state.isLoggedIn) {
      return (
        <Fragment>
          <div>Welcome User</div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div>Welcome Gest</div>
        </Fragment>
      );
    }
    // return <Fragment>
    //   <div>Welcome User</div>
    //   <div>Welcome Gest</div>
    // </Fragment>;
  }
}

export default ConditionalRendering;
