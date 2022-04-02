import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <p>
        Clicked: {this.props.value} times{" "}
        <button onClick={() => this.props.dispatch({ type: "INCREMENT" })}>
          +
        </button>{" "}
        <button onClick={() => this.props.dispatch({ type: "DECREMENT" })}>
          -
        </button>{" "}
      </p>
    );
  }
}

const CnCounter = connect((state) => state)(Counter);

export default CnCounter;
