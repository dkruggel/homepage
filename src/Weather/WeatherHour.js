import React from 'react';
import { kelvinToCelsius, utcToLocalFormatted } from '../Utilities/Functions';

export default class WeatherDay extends React.Component {
  render() {
    return (
      <div
        key={this.props.index}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: '0.15em',
        }}
      >
        <div>{utcToLocalFormatted(this.props.weather.dt)}: &nbsp;</div>
        <div>{kelvinToCelsius(this.props.weather.temp)}°F &ensp; </div>
        <div style={{width: '2.5em'}}>{(this.props.weather.pop * 100).toFixed(0)}%</div>
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
