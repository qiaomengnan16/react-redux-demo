import React, { Component } from "react";
import store from "../store";

class NewCounter extends Component {
  componentDidMount() {
    store.subscribe(this.reRender.bind(this));
  }

  reRender() {
    this.forceUpdate();
  }

  render() {
    return (
      <p>
        NewCounter Clicked: {store.getState().value} times{" "}
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>+</button>{" "}
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>-</button>{" "}
      </p>
    );
  }
}

export default NewCounter;
