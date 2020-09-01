import React from 'react';

const openWeatherKey = '6102a812da477a662eca40c6b33cf325';
// const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherUrl_OneCall = 'https://api.openweathermap.org/data/2.5/onecall';

export default class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      real_feel: 0,
      condition: '',
      icon: '',
    };
  }

  componentDidMount() {
    this.getForecast().then((forecast) => this.renderForecast(forecast));
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
    let today = new Date().getDay();
    this.setState({
      temp: this.kelvinToFahrenheit(currentDay.current.temp),
      real_feel: this.kelvinToFahrenheit(currentDay.current.feels_like),
      condition: currentDay.current.weather[0].description,
      icon:
        'https://openweathermap.org/img/wn/' +
        currentDay.current.weather[0].icon +
        '@2x.png',
    });
    // return `<h2 id="weather-data">${this.buildDate()}</h2>
    //           <div id="weather-conditions">
    //           <h4 id="weather-data">Temperature: ${this.kelvinToFahrenheit(
    //             currentDay.current.temp
    //           )}&deg;F Condition: ${
    //   currentDay.current.weather[0].description
    // }</h4> <img id="weather-icon" src="https://openweathermap.org/img/wn/${
    //   currentDay.current.weather[0].icon
    // }@2x.png"></div>
    //           <h4 id="weather-data">Real Feel: ${this.kelvinToFahrenheit(
    //             currentDay.current.feels_like
    //           )}&deg;F  Rain: ${(currentDay.current.rain['1h'] / 25.4).toFixed(
    //   2
    // )}&quot;</h4><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[new Date().getDay()]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[0].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[0].temp.min
    // )}&deg;F</h4></div><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[(new Date().getDay() + 1) % 7]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[1].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[1].temp.min
    // )}&deg;F</h4></div><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[(new Date().getDay() + 2) % 7]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[2].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[2].temp.min
    // )}&deg;F</h4></div><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[(new Date().getDay() + 3) % 7]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[3].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[3].temp.min
    // )}&deg;F</h4></div><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[(new Date().getDay() + 4) % 7]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[4].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[4].temp.min
    // )}&deg;F</h4></div><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[(new Date().getDay() + 5) % 7]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[5].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[5].temp.min
    // )}&deg;F</h4></div><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[(new Date().getDay() + 6) % 7]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[6].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[6].temp.min
    // )}&deg;F</h4></div><div id="weather-conditions"><h4 id=weather-data>${
    //   weekDays[(new Date().getDay() + 7) % 7]
    // }: ${this.kelvinToFahrenheit(
    //   currentDay.daily[7].temp.max
    // )}&deg;F</h4><h4 id=weather-data>${this.kelvinToFahrenheit(
    //   currentDay.daily[7].temp.min
    // )}&deg;F</h4></div>`;
  };

  renderForecast = (day) => {
    return this.createWeatherHTML(day);
    // const weatherContent = this.createWeatherHTML(day);
    // document.getElementById('weather').innerHTML = weatherContent;
    // document.getElementById('greet').innerHTML = setGreeting();
  };

  render() {
    return (
      <div
        style={{
          fontSize: '1.5em',
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
      </div>
    );
  }
}
