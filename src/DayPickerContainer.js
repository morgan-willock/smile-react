import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import axios from 'axios';

// let modifiers = {
//   ratingOne: [new Date(2021, 3, 20), new Date(2021, 3, 19), new Date(2021, 3, 18)],
// };

let modifiers = { 
  ratingOne: [],
  ratingTwo: [],
  ratingThree: [],
  ratingFour: [],
  ratingFive: [],
 }

const ratingOneStyle = `.DayPicker-Day--ratingOne {
  background-color: orange;
  color: white;
}`
const ratingTwoStyle = `.DayPicker-Day--ratingTwo {
  background-color: red;
  color: white;
}`
const ratingThreeStyle = `.DayPicker-Day--ratingThree {
  background-color: green;
  color: white;
}`
const ratingFourStyle = `.DayPicker-Day--ratingFour {
  background-color: yellow;
  color: white;
}`
const ratingFiveStyle = `.DayPicker-Day--ratingFive {
  background-color: blue;
  color: white;
}`

function formatDate(inputDate) {
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return [year, month, day]
}

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

  componentDidMount() {

    const userId = this.props.userId
    const request = { userId }

    axios.post('/retrieve-moods', request )
      .then(response => {

        const retrievedMoods = response.data

        retrievedMoods.forEach(mood => {
          let [ year, month, day] = formatDate(mood.input_date)

          if (mood.mood_selection === 1) {
            modifiers.ratingOne.push(new Date(year, month, day))
          } else if (mood.mood_selection === 2) {
            modifiers.ratingTwo.push(new Date(year, month, day))
          } else if (mood.mood_selection === 3) {
            modifiers.ratingThree.push(new Date(year, month, day))
          } else if (mood.mood_selection === 4) {
            modifiers.ratingFour.push(new Date(year, month, day))
          } else if (mood.mood_selection === 5) {
            modifiers.ratingFive.push(new Date(year, month, day))
          }
        })

        this.forceUpdate();
    })
  }

  render() {
    return (
      <div className="daypicker-container">
        <style>{ratingOneStyle}</style>
        <style>{ratingTwoStyle}</style>
        <style>{ratingThreeStyle}</style>
        <style>{ratingFourStyle}</style>
        <style>{ratingFiveStyle}</style>
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
          modifiers={modifiers}
          showOutsideDays
          month={new Date()
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