import React, { Component } from "react";
import "./style.css";
import Function from "./Function.js";
import List from "./List";
import Form from "./Form";

class App extends Component {
  render() {
    let myStyle = {
      fontSize: 30,
      color: "red",
      fontStyle: "Courier"
    };
    let i = 5;
    return (
      <div>
        <h1 style={myStyle}>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happenn :)</p>
        <h1>{20 + 20}</h1>
        {/* This is a comment in JSX */}
        <h1>{i == 5 ? "True" : "Flase"}</h1>
        <Function name="muthu" />
        <First />
        <Second />
        <List />
        <Form />
      </div>
    );
  }
}

class First extends Component {
  render() {
    return (
      <div>
        <h1>First</h1>
      </div>
    );
  }
}

class Second extends Component {
  render() {
    return (
      <div>
        <h1>Second</h1>
      </div>
    );
  }
}
export default App;
