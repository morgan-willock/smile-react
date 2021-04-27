import { useState } from "react";
import MoodButtons from "../components/MoodButtons";

export default function MoodForm(props) {
  const [moodSelection, setMoodSelection] = useState(null);
  const [activities, setActivities] = useState([]);

  function handleMoodSelection(e) {
    setMoodSelection(e.target.id);
  }

  function handleActivitySelection(e) {
    let activitiesFiltered = null;

    if (activities.includes(e.target.value)) {
      activitiesFiltered = activities.filter((activity) => {
        return activity !== e.target.value;
      });
      setActivities(activitiesFiltered);
    } else {
      setActivities([...activities, e.target.value]);
    }
  }

  function handleSubmit() {
    props.onFormChange(activities, moodSelection);
  }

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <MoodButtons click={handleMoodSelection}/>
      <div className="form-check" onClick={handleActivitySelection}>
        <input
          className="form-check-input"
          type="checkbox"
          value="relaxing"
          id="flexCheckRelaxing"
        ></input>
        <label className="form-check-label" htmlFor="flexCheckRelaxing">
          Relaxing
        </label>
      </div>
      <div className="form-check" onClick={handleActivitySelection}>
        <input
          className="form-check-input"
          type="checkbox"
          value="socialising"
          id="flexCheckSocialising"
        ></input>
        <label className="form-check-label" htmlFor="flexCheckSocialising">
          Socialising
        </label>
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-info">
        Enter
      </button>
    </div>
  );
}
