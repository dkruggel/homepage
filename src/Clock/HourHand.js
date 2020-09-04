import React from 'react';
import Moment from 'moment';

export default class HourHand extends React.Component {
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
          transform:
            'rotateZ(calc(30deg * ' +
            Moment().diff(Moment().clone().startOf('day'), 'seconds') / 3600 +
            '))',
          height: '135px',
          width: '4px',
          background: 'white',
          marginTop: '40px',
          marginLeft: '173px',
          borderTopLeftRadius: '45%',
          borderTopRightRadius: '45%',
          animation: 'time 43200s linear infinite',
          zIndex: 2,
          // animationDelay:
          //   -1 *
          //     (Moment().diff(Moment().clone().startOf('day'), 'seconds') /
          //       3600 -
          //       12) *
          //     3600 +
          //   's',
        }}
      ></div>
    );
  }
}
