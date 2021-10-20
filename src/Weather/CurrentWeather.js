import React, { useState, useEffect } from 'react';
import moment from 'moment';
import WeatherDay from './WeatherDay';
import WeatherHour from './WeatherHour';
import { kelvinToCelsius, getForecast, utcToLocal } from '../Utilities/Functions';

export default function CurrentWeather() {
  const [temp, setTemp] = useState(0);
  const [real_feel, setRealFeel] = useState(0);
  const [title_temp, setTitleTemp] = useState(0);
  const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);

    getForecast().then((forecast) => {
      setTemp(kelvinToCelsius(forecast.current.temp));
      setRealFeel(kelvinToCelsius(forecast.current.feels_like));
      setTitleTemp(
        `${kelvinToCelsius(forecast.current.temp, 0)}°|${kelvinToCelsius(
          forecast.current.feels_like,
          0
        )}°`
      );
      setCondition(forecast.current.weather[0].description);
      setIcon(
        'https://openweathermap.org/img/wn/' +
          forecast.current.weather[0].icon +
          '@2x.png'
      );
      setDaily(forecast.daily);
      setHourly(forecast.hourly);
    });
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive) {
        // Update the title
        document.title = moment().format(
          `yy.MM.DD\u00A0\u00A0hh:mm\u00A0\u00A0${title_temp}`
        );

      interval = setInterval(() => {
        getForecast().then((forecast) => {
          setTemp(kelvinToCelsius(forecast.current.temp));
          setRealFeel(kelvinToCelsius(forecast.current.feels_like));
          setTitleTemp(
            `${kelvinToCelsius(forecast.current.temp, 0)}°|${kelvinToCelsius(
              forecast.current.feels_like,
              0
            )}°`
          );
          setCondition(forecast.current.weather[0].description);
          setIcon(
            'https://openweathermap.org/img/wn/' +
              forecast.current.weather[0].icon +
              '@2x.png'
          );
          setDaily(forecast.daily);
          setHourly(forecast.hourly);
        });
      }, 120000);
    } else if (!isActive) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, title_temp]);

  return (
    <div
      style={{
        fontSize: '1.75em',
        paddingLeft: '0.25em',
        paddingTop: '0.25em',
      }}
    >
      <div style={{ display: 'flex', margin: '0.5em' }}>
        Current Temp: {temp}°F &emsp; Real Feel: {real_feel}°F
      </div>
      <div style={{ display: 'flex', margin: '0.5em', alignItems: 'center' }}>
        Condition: {condition}{' '}
        <img id='weather-icon' src={icon} alt='weather icon' />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '22em',
        }}
      >
        {daily
          .map((day, index) => {
            return <WeatherDay weather={day} index={index} key={index} />;
          })
          .slice(0, 1)}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '22em',
        }}
      >
        {hourly
          .map((hour, index) => {
            return <WeatherHour weather={hour} index={index} key={index} />;
          })
          .filter((a) => utcToLocal(a.props.weather.dt) < 25)
          .slice(0, 8)}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '22em',
        }}
      >
        {daily
          .map((day, index) => {
            return <WeatherDay weather={day} index={index} key={index} />;
          })
          .slice(1)}
      </div>
    </div>
  );
}
