import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      username: ""
    };
  }
  valueChanged = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onClick = e => {
    e.preventDefault();
    this.setState({ name: "kumar" });
    const name = this.state.name === "React" ? "kumar" : "React";
    this.setState({ name });
    console.log(name);
  };
  render() {
    return (
      <div>
        hi{this.state.username}
        Change{this.state.name}
        <form>
          <label>Name</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.valueChanged}
          />
          <button type="submit" onClick={this.onClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default State;
