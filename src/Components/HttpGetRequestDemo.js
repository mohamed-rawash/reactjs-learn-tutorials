import React, { Component } from "react";
import axios from "axios";

class HttpGetRequestDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState(() => ({ posts: res.data }));
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const style = {
      width: "400px",
      color: "black",
      backgroundColor: "#3295da",
      margin: "10px auto",
      padding: "10px 30px",
      borderRadius: "10px",
    };
    return this.state.posts.isEmpty ? (
      <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
        <h1>Loading...</h1>
      </div>
    ) : (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((el) => {
          return (
            <div style={style} key={el.id}>
              <h3>{el.title}</h3>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HttpGetRequestDemo;
