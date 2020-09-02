import React from 'react';
import Moment from 'moment';

export default class SecondHand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Moment(),
    };
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          transformOrigin: 'bottom center',
          height: '165px',
          width: '2px',
          background: 'red',
          marginTop: '10px',
          marginLeft: '174px',
          animation: 'time 60s infinite steps(60)',
          zIndex: 3,
          animationDelay: -1 * this.state.time.format('ss') + 's',
        }}
      ></div>
    );
  }
}
