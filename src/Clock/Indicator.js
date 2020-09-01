import React from 'react';

export default class Indicator extends React.Component {
  render() {
    if (this.props.value % 5 === 0) {
      return (
        <div
          className="clock__indicator__main"
          style={{
            transform: 'rotateZ(calc(6deg * ' + this.props.value + '))',
          }}
        ></div>
      );
    } else {
      return (
        <div
          className="clock__indicator__secondary"
          style={{
            transform: 'rotateZ(calc(6deg * ' + this.props.value + '))',
          }}
        ></div>
      );
    }
  }
}
