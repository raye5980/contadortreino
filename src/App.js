import React, { Component } from "react";

import styled from "styled-components";

export const Button = styled.button`
  color: pink;
`;

export default class App extends Component {
  state = {
    number: 0
  };

  add = () => {
    this.setState(() => ({ number: this.state.number + 1 }));
  };
  remove = () => {
    this.setState(() => ({ number: this.state.number - 1 }));
  };

  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <Button
          onClick={() => {
            this.add();
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            this.remove();
          }}
        >
          -
        </Button>
      </>
    );
  }
}
