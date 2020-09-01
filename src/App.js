import React from 'react';
import Greeting from './Greeting/Greeting';
import Date from './Date/Date';
import Weather from './Weather/Weather';
import Clock from './Clock/Clock';
import Moment from 'moment';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOfDay: 'Afternoon',
    };
  }

  intervalID;

  componentDidMount() {
    this.getTimeOfDay();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getTimeOfDay = () => {
    let time = Moment().format('H');
    if (time > 0 && time < 12) {
      this.setState({ timeOfDay: 'Morning' });
    } else if (time >= 12 && time < 16) {
      this.setState({ timeOfDay: 'Afternoon' });
    } else {
      this.setState({ timeOfDay: 'Evening' });
    }
    this.intervalID = setTimeout(this.getTimeOfDay.bind(this), 60 * 1000);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Date />
          <Clock />
        </header>
        <section className="App-body">
          <Weather />
        </section>
        <footer className="App-footer">
          <Greeting timeOfDay={this.state.timeOfDay} />
        </footer>
      </div>
    );
  }
}
