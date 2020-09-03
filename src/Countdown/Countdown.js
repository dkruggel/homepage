import React from 'react';
import dates from './dates.json';
import Moment from 'moment';

export default class Countdown extends React.Component {
  daysRemaining(eventDate) {
    let e = Moment(eventDate);
    return e.diff(Moment(), 'days');
  }

  render() {
    return (
      <div>
        {dates.dates.map((event, index) => {
          let difference = this.daysRemaining(event.Date);
          //console.log(event.Event + ': ' + this.daysRemaining(event.Date));
          return (
            <div key={index}>
              <h6>
                {event.Event}: {event.Date} &nbsp; {difference} days
              </h6>
            </div>
          );
        })}
      </div>
    );
  }
}
