import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Function from "./Function.js";
import List from "./List";
import Form from "./Form";
import Home from "./Home";
import TestJSX from "./TestJSX";
import Map from "./Map";
import State from "./State";
import Twowaybinding from "./Twowaybinding";
import Inputfile from "./Inputfile";
import Pure from "./Pure";
import store from "./store";
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./ActionType";

class App extends Component {
  increment = () => {
    store.dispatch({ type: COUNTER_INCREMENT });
    console.log(store.getState().count);
  };
  decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(store.getState().count);
  };

  render() {
    let myStyle = {
      fontSize: 30,
      color: "red",
      fontStyle: "Courier"
    };
    let i = 5;

    return (
      <Router>
        <div>
          <h1 style={myStyle}>Hello StackBlitz!</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/first">First</Link>
            </li>
            <li>
              <Link to="/second">Second</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/function">Function</Link>
            </li>
            <li>
              <Link to="/testjsx">TestJSX</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/state">State</Link>
            </li>
            <li>
              <Link to="/twoway">TwoWayBinding</Link>
            </li>
            <li>
              <Link to="/pure">Pure</Link>
            </li>
            <li>
              <Link to="/inputfile">Inputfile</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/first">
              <First />
            </Route>
            <Route path="/second">
              <Second />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/function">
              <Function />
            </Route>
            <Route path="/testjsx">
              <TestJSX />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/state">
              <State />
            </Route>
            <Route path="/twoway">
              <Twowaybinding />
            </Route>
            <Route path="/pure">
              <Pure />
            </Route>
            <Route path="/inputfile">
              <inputfile />
            </Route>
          </Switch>
          <button type="button" onClick={this.increment}>
            increment
          </button>
          <button type="button" onClick={this.decrement}>
            decrement
          </button>
        </div>
      </Router>
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
