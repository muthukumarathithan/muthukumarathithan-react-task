import React, { Component } from "react";

class TestJSX extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      null: "",
      show: true
    };
  }
  render() {
    const printName = <div>{this.state.name}</div>;
    let conditional = 1;
    let conditionaElement = 2;
    if (this.conditionaElement == 2) {
      conditionaElement = <span>condtional 2</span>;
    }
    return (
      <div>
        {this.state.show && printName}

        <h1 />
        {conditional == 1 ? (
          <span>conditional 1</span>
        ) : (
          <span>conditional 2</span>
        )}
        <span> {conditionaElement}</span>
      </div>
    );
  }
}

export default TestJSX;
