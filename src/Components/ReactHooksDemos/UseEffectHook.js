import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectHook() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res.data)
  //       setPosts(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, [postId]);
  const searchHandler = () => {
    setId(postId);
  };
  useEffect(() => {
    setError("");
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId || ""}`)
        .then((res) => {
          console.log(res.data);
          setPosts(postId ? [res.data] : res.data);
        })
        .catch((error) => {
          setError(
            `We don't have a post With 'id: ${id}' please try agin with id from 1 to 100!, Thans. `
          );
          console.log(error);
        });
  }, [id]);
  const style = {
    width: "400px",
    color: "black",
    backgroundColor: "#3295da",
    margin: "10px auto",
    padding: "10px 30px",
    borderRadius: "10px",
  };
  return (
    <div style={{ padding: "20px 0" }}>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <input
          className="form-control"
          type="text"
          placeholder="Enter post id"
          aria-label="default input example"
          style={{ display: "inline-block", width: "40%", marginLeft: "10px" }}
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button onClick={searchHandler} className="pl-6 btn btn-outline-info">
          Search
        </button>
      </div>
      {posts.isEmpty ? (
        <div
          style={{ height: "100vh", display: "grid", placeContent: "center" }}
        >
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div
          style={{
            display: "grid",
            placeContent: "center",
            width: "100vw",
            height: "86vh",
          }}
        >
          <div
            className="bg-danger"
            style={{
              width: "320px",
              height: "100px",
              padding: "10px 30px",
              display: "grid",
              placeContent: "center",
              borderRadius: "16px",
            }}
          >
            {error}
          </div>
        </div>
      ) : (
        <div>
          <h1>Posts</h1>
          {posts.map((el) => {
            return (
              <div style={style} key={el.id}>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
                <span>{el.id}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UseEffectHook;
