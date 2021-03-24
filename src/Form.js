import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "react",
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onhandleClick = e => {
    e.preventDefault();
    console.log(
      `The values are ${this.state.username}, ${this.state.password}
      }`
    );

    const url = `https://jsonplaceholder.typicode.com/users/`;
    const data = { name: this.state.username, password: this.state.password };
    axios(url, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => console.log("success", res.data))
      .catch(error => console.error("Error", error));
    this.setState({
      data: data
    });
    console.log(data);
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>
        <form onSubmit={this.onhandleClick}>
          <div class="container">
            <div class="row">
              <lable>Username</lable>
              <input
                type="text"
                value={this.state.username}
                placeholder="UserName"
                onChange={this.handleChange}
                name="username"
              />
            </div>
            <div class="row">
              <lable>Username</lable>
              <input
                type="password"
                value={this.state.password}
                placeholder="UserName"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" class="btn btn-success" value="submit" />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default Form;
