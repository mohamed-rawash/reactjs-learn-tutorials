import React, { Fragment } from "react";
class WellCome extends React.Component {
  render() {
    const { firstName, lName } = this.props;
    return (
      <Fragment className="wellcome">
        <h1>This The First Class Component</h1>
        <p>
          My name is: {firstName} {lName}
        </p>
        {this.props.children}
      </Fragment>
    );
  }
}

export default WellCome;
