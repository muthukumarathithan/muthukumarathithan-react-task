import React, { Component } from "react";
class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Abhishek"
        },
        {
          name: "Saharsh"
        },
        {
          name: "Ajay"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map(item => (
            <Items data={item} />
          ))}
        </ul>
      </div>
    );
  }
}
class StudentName extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Name Detail</h1>
      </div>
    );
  }
}
class Items extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
  }
}
export default List;
