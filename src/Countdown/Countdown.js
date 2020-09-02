import React from 'react';
import dates from './dates.json';
import Moment from 'moment';

export default class Countdown extends React.Component {
  render() {
    let newDates = [];
    dates.dates.map((event, index) => {
      let difference = Moment(event.Date, 'MM-DD-YYYY').fromNow();
      console.log(`${event.Event}: ${event.Date}  ${difference}`);
      return (
        <div>
          {event.Event}: {event.Date}
        </div>
      );
    });
    return <div></div>;
  }
}
