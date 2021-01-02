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
      .slice(0, 6);
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
                width: '20.5em',
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
                <div>
                  {event.Event}: {event.Date} &nbsp;
                </div>
                <div>
                  {difference.toString().length === 1
                    ? '\u00A0\u00A0\u00A0' + difference.toString()
                    : difference.toString().length === 2
                    ? '\u00A0\u00A0' + difference.toString()
                    : difference.toString()}{' '}
                  {difference === 1 ? 'day\u00A0' : 'days'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
