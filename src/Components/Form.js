import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      topic: "react",
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value,
    });
  };
  render() {
    const style = {
      width: "400px",
      margin: "20px auto",
      padding: "20px 40px",
      backgroundColor: "blueviolet",
      borderRadius: "16px",
    };
    const result = { color: "white", fontSize: "50px" };
    return (
      <form style={style} onSubmit={event => event.preventDefault()}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          ></input>
          <div style={result}>{this.state.userName}</div>
        </div>
        <div>
          <textarea
            placeholder="Comments"
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
          <div style={result}>{ this.state.comments}</div>
        </div>
        <div>
          <select
            value={this.state.topic}
            onChange={this.handleTopicChange}
          >
            <option value={'react'}>React</option>
            <option value={'angular'}>Angluar</option>
            <option value={'vue'}>Vue</option>
          </select>
          <div style={result}>{ this.state.topic}</div>
        </div>
        <button type='submit'> Submit</button>
      </form>
    );
  }
}

export default Form;
