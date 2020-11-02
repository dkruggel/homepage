import React from 'react';
import dates from './dates.json';
import Moment from 'moment';

export default class Countdown extends React.Component {
  daysRemaining(eventDate) {
    let e = Moment(eventDate);
    return Math.ceil(e.diff(Moment(), 'days', true));
  }

  render() {
    let newDates = dates.dates
      .filter(a => Moment().diff(a.Date) < 0)
      .sort((a,b) => Moment(a.Date).diff(b.Date))
      .slice(0, 4);
    return (
      <div style={{ padding: '0px' }}>
        {newDates.map((event, index) => {
          let difference = this.daysRemaining(event.Date);
          return (
            <div
              key={index}
              style={{
                fontSize: '1.5em',
                paddingLeft: '0.125em',
                paddingTop: '0.25em',
                display: 'flex',
                flexDirection: 'column',
                width: '20em',
              }}
            >
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  margin: '0.125em',
                }}
              >
                {event.Event}: {event.Date} &nbsp; {difference} days
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
