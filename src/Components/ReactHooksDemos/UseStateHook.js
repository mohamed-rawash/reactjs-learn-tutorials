import React, { useState } from "react";

function UseStateHook() {
  const initialCounter = 0;
  const [counter, setCounter] = useState(initialCounter);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const increaseCounterWithFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prevState) => prevState + 1);
    }
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  // useState with objects
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (e) => {
    setName((prevState) => ({ ...prevState, firstName: e.target.value }));
  };
  const lastNameHandler = (e) => {
    setName((prevState) => ({ ...prevState, lastName: e.target.value }));
  };

  //useState with array
  const [nums, setNum] = useState([]);

  const addNumHandler = () => {
    setNum((prevState) => [...prevState, Math.floor(Math.random() * 10 + 1)]);
  };
  console.log("***********************");
  console.log("render");
  console.log("***********************");

  return (
    <div>
      <h1>Count Now Is: {counter}</h1>
      <div>
        <button
          onClick={increaseCounterWithFive}
          style={{ marginRight: "10px" }}
          className="btn btn-outline-primary"
        >
          Increase 5
        </button>
        <button
          onClick={increaseCounter}
          style={{ marginRight: "10px" }}
          className="btn btn-outline-primary"
        >
          Increase
        </button>
        <button
          onClick={decreaseCounter}
          style={{ marginRight: "10px" }}
          className="btn btn-outline-secondary"
        >
          Decrease
        </button>
        <button
          onClick={() => setCounter(initialCounter)}
          className="btn btn-outline-danger"
        >
          Reset
        </button>
      </div>
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "black",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      ></div>
      <div style={{ textAlign: "center" }}>
        <input
          className="form-control"
          type="text"
          placeholder="First Name"
          aria-label="default input example"
          style={{ display: "inline-block", width: "40%", marginLeft: "10px" }}
          onChange={firstNameHandler}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Last Name"
          aria-label="default input example"
          style={{ display: "inline-block", width: "40%", marginLeft: "10px" }}
          onChange={lastNameHandler}
        />
      </div>
      <h2>First name is: {name.firstName}</h2>
      <h2>Last name is: {name.lastName}</h2>
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "black",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      ></div>
      <button className="btn btn-outline-primary" onClick={addNumHandler}>
        Add Random Number
      </button>
      {nums.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
}

export default UseStateHook;
