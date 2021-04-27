import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/MoodDetails.css'

export default function MoodDetails({ date, userId }) {
  const [moodSelection, setMoodSelection] = useState(null);
  const [activities, setActivities] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    const dbFormattedDate = date.toISOString().split("T")[0];

    setCurrentDate(dbFormattedDate);

    const request = { userId, date: dbFormattedDate };

    axios.post("/mood-details", request).then((response) => {
      if (response.data.rows[0] !== undefined) {
        let dbResponseActivities = response.data.rows[0]["activities"];
        let dbResponseMoodSelection = response.data.rows[0]["mood_selection"];

        setActivities(dbResponseActivities);
        setMoodSelection(dbResponseMoodSelection);
      }
    });
  }, [currentDate]);

  return (
    <div>
      <h4 className="mood-details-header">Mood details.</h4>
      <p className="mood-details-selected-day">Selected day: {currentDate}</p>
      <p className="mood-rating-selected-day">Mood rating: {moodSelection}</p>
      <p className="mood-activities-selected-day">Activities:</p>
      <ul className="mood-details-activites-ul">
        {activities.map((activity, idx) => {
          return <li key={idx} className="mood-details-activities-li">{activity}</li>;
        })}
      </ul>
      <Link to={`/mood/${currentDate}`}>
        <button type="button" className="btn btn-info">
          Edit
        </button>
      </Link>
    </div>
  );
}
