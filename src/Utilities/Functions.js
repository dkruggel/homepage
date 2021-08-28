const openWeatherKey = '6102a812da477a662eca40c6b33cf325';
const weatherUrl_OneCall = 'https://api.openweathermap.org/data/2.5/onecall';

function kelvinToFahrenheit(k, d = 2) {
  return (((k - 273.15) * 9) / 5 + 32).toFixed(d);
}

function kelvinToCelsius(k, d = 2) {
  return (k - 273.15).toFixed(d);
}

function getForecast() {
  return fetch(
    `${weatherUrl_OneCall}?&lat=38.838159&lon=-90.724872&exclude=minutely&appid=${openWeatherKey}`
  ).then((data) => data.json());
}

export function utcToLocal(t) {
  var d = new Date(t * 1000).getHours();
  return d;
}

export function utcToLocalFormatted(t) {
  var d = new Date(t * 1000).getHours();
  return `${d}:00`;
}

export { kelvinToCelsius, kelvinToFahrenheit, getForecast };
