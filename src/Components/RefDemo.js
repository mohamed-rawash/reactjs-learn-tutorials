import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <h1>RefDemo</h1>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Alert Value</button>
      </div>
    );
  }
}

export default RefDemo;
