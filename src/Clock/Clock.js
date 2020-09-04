import React from 'react';
import './Clock.css';
import Moment from 'moment';
import SecondHand from './SecondHand';
import MinuteHand from './MinuteHand';
import HourHand from './HourHand';
import Indicator from './Indicator';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Moment(),
      indicators: Array(60).fill(0, 0, 60),
    };
  }

  render() {
    return (
      <div className="clock__container">
        <div className="clock">
          <SecondHand />
          <MinuteHand />
          <HourHand />
          <div className="clock__axis"></div>
          <ul>
            {this.state.indicators.map((value, index) => {
              return <Indicator key={index} value={index} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
