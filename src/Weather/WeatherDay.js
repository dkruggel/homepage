import React from 'react';
import moment from 'moment';
import { kelvinToCelsius } from '../Utilities/Functions';

export default class WeatherDay extends React.Component {
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
          {kelvinToCelsius(this.props.weather.temp.max)}°C &ensp;{' '}
        </div>
        <div>{kelvinToCelsius(this.props.weather.temp.min)}°C</div>
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
