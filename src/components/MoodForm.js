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
      <MoodButtons click={handleMoodSelection}/>
      <p className="info-header">Click a colour that represents your mood and select the activities you were doing.</p>
      <div className="activity-check-boxes">
        <div className="form-check" onClick={handleActivitySelection}>
          <input
            className="form-check-input"
            type="checkbox"
            value="Work"
            id="flexCheckWork"
          ></input>
          <label className="form-check-label" htmlFor="flexCheckWork">
            Work
          </label>
        </div>
        <div className="form-check" onClick={handleActivitySelection}>
          <input
            className="form-check-input"
            type="checkbox"
            value="Social"
            id="flexCheckSocial"
          ></input>
          <label className="form-check-label" htmlFor="flexCheckSocial">
            Social
          </label>
        </div>
        <div className="form-check" onClick={handleActivitySelection}>
          <input
            className="form-check-input"
            type="checkbox"
            value="Hobbies"
            id="flexCheckHobbies"
          ></input>
          <label className="form-check-label" htmlFor="flexCheckHobbies">
            Hobbies
          </label>
        </div>
        <div className="form-check" onClick={handleActivitySelection}>
          <input
            className="form-check-input"
            type="checkbox"
            value="Exercise"
            id="flexCheckExercise"
          ></input>
          <label className="form-check-label" htmlFor="flexCheckExercise">
            Exercise
          </label>
        </div>
        <div className="form-check" onClick={handleActivitySelection}>
          <input
            className="form-check-input"
            type="checkbox"
            value="Housework"
            id="flexCheckSocialising"
          ></input>
          <label className="form-check-label" htmlFor="flexCheckHousework">
            Housework
          </label>
        </div>
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-info">
        Enter
      </button>
    </div>
  );
}
