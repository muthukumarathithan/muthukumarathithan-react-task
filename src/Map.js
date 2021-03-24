import React, { Component } from "react";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "muthu",
          age: 30
        },
        {
          name: "kumar",
          age: 31
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.users.map((x, index, arrayIndex) => (
          <div>
            <h1 key={index}>
              Name:{x.name}! Age:{x.age}
            </h1>
          </div>
        ))}
      </div>
    );
  }
}
export default Map;
