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
      .filter((a) => Moment().diff(a.Date) < 0)
      .sort((a, b) => Moment(a.Date).diff(b.Date))
      .slice(0, 10);
    return (
      <div style={{ padding: '0px' }}>
        {newDates.map((event, index) => {
          let difference = this.daysRemaining(event.Date);
          return (
            <div
              key={index}
              style={{
                fontSize: '1.5em',
                marginBottom: '0.4375em',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
              >
                <div style={{ marginRight: '0.1875em' }}>{event.Event}:</div>
                <div>{event.Date}</div>
                <div
                  style={{
                    marginLeft: '0.25em',
                    marginRight: '0.1875em',
                    width: '2.5em',
                    textAlign: 'end',
                  }}
                >
                  {difference.toString()}
                </div>
                <div style={{ textAlign: 'start', width: '2.5em' }}>
                  {difference === 1 ? 'day' : 'days'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
