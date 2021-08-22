import React, { Component } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '../App.css';
 
class DatePicker extends Component {
  state = {
    date: [new Date(), new Date()],
  }

  onChange = date => this.setState({ date })

  render() {
    return (
        <DateRangePicker 
          onChange={this.onChange}
          value={this.state.date}
        />
    );
  }
}
 
export default DatePicker;
