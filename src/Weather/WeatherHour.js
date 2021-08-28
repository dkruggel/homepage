import React from 'react';

export default class WeatherDay extends React.Component {
  kelvinToFahrenheit = (k, d = 2) => (((k - 273.15) * 9) / 5 + 32).toFixed(d);
  
  kelvinToCelsius = (k, d = 2) => (k - 273.15).toFixed(d);

  utcToLocal = (t) => {
      var d = new Date(t * 1000).getHours();
      return `${d}:00`;
  }

  roundPerc = (p) => p.toFixed(0);

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
        <div>{this.utcToLocal(this.props.weather.dt)}: &nbsp;</div>
        <div>{this.kelvinToCelsius(this.props.weather.temp)}°F &ensp; </div>
        <div style={{width: '2.5em'}}>{this.roundPerc(this.props.weather.pop * 100)}%</div>
        {/* <div>{this.kelvinToFahrenheit(this.props.weather.feels_like)}°F</div> */}
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
