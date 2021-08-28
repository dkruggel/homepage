import React from 'react';
import moment from 'moment';

export default class WeatherDay extends React.Component {
  kelvinToFahrenheit = (k, d = 2) => (((k - 273.15) * 9) / 5 + 32).toFixed(d);
  
  kelvinToCelsius = (k, d = 2) => (k - 273.15).toFixed(d);

  roundPerc = (p) => p.toFixed(0);

  render() {
    return (
      <div
        key={this.props.index}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: '0.25em',
        }}
      >
        <div>
          {moment().add(this.props.index, 'days').format('dddd')}: &nbsp;
        </div>
        <div>
          {this.kelvinToCelsius(this.props.weather.temp.max)}°F &ensp;{' '}
        </div>
        <div>{this.kelvinToCelsius(this.props.weather.temp.min)}°F</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '5.5em',
          }}
        >
          <div>&nbsp;&nbsp;{this.props.weather.weather[0].main}</div>
          <img
            src={
              'https://openweathermap.org/img/wn/' +
              this.props.weather.weather[0].icon +
              '@2x.png'
            }
            style={{ height: '1.375em' }}
            alt='weather icon'
          />
        </div>
      </div>
    );
  }
}
