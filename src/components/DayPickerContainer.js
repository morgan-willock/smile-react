import React from "react";
import axios from "axios";
import DayPicker from "react-day-picker";
import MoodDetails from "./MoodDetails";
import MoodEmoji from "../components/MoodEmoji"
import "react-day-picker/lib/style.css";
import Smile from "./Smile.js";

let modifiers = {
  ratingOne: [],
  ratingTwo: [],
  ratingThree: [],
  ratingFour: [],
  ratingFive: [],
};

const ratingOneStyle = `.DayPicker-Day--ratingOne {
  background-color: #FF6C65;
  color: white;
}`;
const ratingTwoStyle = `.DayPicker-Day--ratingTwo {
  background-color: #FFBF65;
  color: white;
}`;
const ratingThreeStyle = `.DayPicker-Day--ratingThree {
  background-color: #FFE765;
  color: white;
}`;
const ratingFourStyle = `.DayPicker-Day--ratingFour {
  background-color: #46F482;
  color: white;
}`;
const ratingFiveStyle = `.DayPicker-Day--ratingFive {
  background-color: #40DCD4;
  color: white;
}`;

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return [year, month, day];
}

export default class DayPickerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
      selection: null,
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
      selection: selected ? false : true,
    });
  }

  componentDidMount() {
    const userId = this.props.userId;
    const request = { userId };

    axios.post("/retrieve-moods", request).then((response) => {
      const retrievedMoods = response.data;

      modifiers = {
        ratingOne: [],
        ratingTwo: [],
        ratingThree: [],
        ratingFour: [],
        ratingFive: [],
      };

      retrievedMoods.forEach((mood) => {
        let [year, month, day] = formatDate(mood.input_date);

        if (mood.mood_selection === 1) {
          modifiers.ratingOne.push(new Date(year, month, day));
        } else if (mood.mood_selection === 2) {
          modifiers.ratingTwo.push(new Date(year, month, day));
        } else if (mood.mood_selection === 3) {
          modifiers.ratingThree.push(new Date(year, month, day));
        } else if (mood.mood_selection === 4) {
          modifiers.ratingFour.push(new Date(year, month, day));
        } else if (mood.mood_selection === 5) {
          modifiers.ratingFive.push(new Date(year, month, day));
        }
      });

      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="daypicker-container">
        <style>{ratingOneStyle}</style>
        <style>{ratingTwoStyle}</style>
        <style>{ratingThreeStyle}</style>
        <style>{ratingFourStyle}</style>
        <style>{ratingFiveStyle}</style>
        <Smile />
        <p className="dashboard-quote">One thing at a time and enjoy yourself</p>
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
          modifiers={modifiers}
          showOutsideDays
          month={new Date()}
        />
        <MoodEmoji />
        <p>
          {this.state.selectedDay ? "" : <p className="pick-a-day-text" >Pick a day to view or edit your mood</p> }
        </p>
        {this.state.selection && (
          <MoodDetails
            date={this.state.selectedDay}
            userId={this.props.userId}
          />
        )}
      </div>
    );
  }
}
