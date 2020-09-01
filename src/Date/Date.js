import React from 'react';
import Moment from 'moment';

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: Moment().format('dddd MMMM Do YYYY') };
  }
  render() {
    return <h1>{this.state.date}</h1>;
  }
}
