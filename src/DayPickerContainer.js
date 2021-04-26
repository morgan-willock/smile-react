import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const modifiers = {
  ratingOne: [new Date(2018, 8, 19), new Date(2018, 8, 18), new Date(2018, 8, 17)],
  ratingTwo: [new Date(2018, 8, 9), new Date(2018, 8, 10), new Date(2018, 8, 11)],
};

const ratingOneStyle = `.DayPicker-Day--ratingOne {
  background-color: orange;
  color: white;
}`
const ratingTwoStyle = `.DayPicker-Day--ratingTwo {
  background-color: red;
  color: white;
}`

const todaysDate = new Date()

export default class DayPickerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (
      <div className="daypicker-container">
        <style>{ratingOneStyle}</style>
        <style>{ratingTwoStyle}</style>
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
          modifiers={modifiers}
          showOutsideDays
          month={new Date(2018, 8)
          }
        />
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString('en-GB')
            : 'Please select a day 👻'}
        </p>
        <p>
          {todaysDate.toLocaleDateString('en-GB')}
        </p>
        <p>
          {this.props.userId}
        </p>
      </div>
    );
  }
}