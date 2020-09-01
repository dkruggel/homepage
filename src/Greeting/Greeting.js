import React from 'react';

export default class Greeting extends React.Component {
  render() {
    return <h1>Good {this.props.timeOfDay} David</h1>;
  }
}
