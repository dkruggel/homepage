import React from 'react';
import moment from 'moment';

const openWeatherKey = '6102a812da477a662eca40c6b33cf325';
// const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherUrl_OneCall = 'https://api.openweathermap.org/data/2.5/onecall';

export default class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now(),
      temp: 0,
      real_feel: 0,
      condition: '',
      icon: '',
      daily: [],
    };
  }

  intervalID;

  componentDidMount() {
    this.retrieveForecast();
  }

  retrieveForecast() {
    this.getForecast().then((forecast) => this.renderForecast(forecast));
    this.intervalID = setTimeout(
      this.retrieveForecast.bind(this),
      2 * 60 * 1000
    );
  }

  kelvinToFahrenheit = (k) => (((k - 273.15) * 9) / 5 + 32).toFixed(2);

  getForecast = async () => {
    const urlToFetch = `${weatherUrl_OneCall}?&lat=38.838159&lon=-90.724872&exclude=minutely,hourly&appid=${openWeatherKey}`;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = response.json();
        // console.log(jsonResponse);
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  };

  createWeatherHTML = (currentDay) => {
    this.setState({
      temp: this.kelvinToFahrenheit(currentDay.current.temp),
      real_feel: this.kelvinToFahrenheit(currentDay.current.feels_like),
      condition: currentDay.current.weather[0].description,
      icon:
        'https://openweathermap.org/img/wn/' +
        currentDay.current.weather[0].icon +
        '@2x.png',
      daily: currentDay.daily,
    });
  };

  renderForecast = (day) => {
    return this.createWeatherHTML(day);
  };

  render() {
    return (
      <div
        style={{
          fontSize: '1.75em',
          paddingLeft: '0.25em',
          paddingTop: '0.25em',
        }}
      >
        <div style={{ display: 'flex', margin: '0.5em' }}>
          Current Temp: {this.state.temp}°F &emsp; Real Feel:{' '}
          {this.state.real_feel}°F
        </div>
        <div style={{ display: 'flex', margin: '0.5em', alignItems: 'center' }}>
          Condition: {this.state.condition}{' '}
          <img id="weather-icon" src={this.state.icon} alt="weather icon" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '15.5em',
          }}
        >
          {this.state.daily.map((day, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  margin: '0.25em',
                }}
              >
                <div>{moment().add(index, 'days').format('dddd')}: &nbsp;</div>
                <div>{this.kelvinToFahrenheit(day.temp.max)}°F &ensp; </div>
                <div>{this.kelvinToFahrenheit(day.temp.min)}°F</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
