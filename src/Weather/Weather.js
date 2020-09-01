import React from 'react';
import CurrentWeather from './CurrentWeather';

export default class Weather extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="weather-widget">
        <CurrentWeather />
        {/* Next 4 days */}
      </div>
    );
  }
}
