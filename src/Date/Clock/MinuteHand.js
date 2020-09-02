import React from 'react';
import Moment from 'moment';

export default class MinuteHand extends React.Component {
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
          height: '155px',
          width: '3px',
          background: 'white',
          marginTop: '20px',
          marginLeft: '173px',
          borderTopLeftRadius: '45%',
          borderTopRightRadius: '45%',
          opacity: 0.75,
          animation: 'time 3600s linear infinite',
          zIndex: 2,
          animationDelay: -60 * this.state.time.format('mm') + 's',
        }}
      ></div>
    );
  }
}
