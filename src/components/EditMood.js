import MoodForm from "./MoodForm";
import { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

export default function EditMood({ userId }) {
  const [redirectBool, setRedirectBool] = useState(false);
  const [loading, setLoading] = useState(true);

  const { date } = useParams();

  function handleFormChanges(activities, moodSelection) {
    const mood = { userId, date, moodSelection, activities };

    axios.post("/edit-mood", mood).then((response) => {
      if (response.data.message === "success") {
        setRedirectBool(true);
      } else if (response.data.message === "updated") {
        setRedirectBool(true);
      }
    });
  }

  useEffect(() => {
    setLoading(false);
  });

  return (
    <div>
      <h1>edit mood</h1>
      <h2>{date}</h2>
      {loading ? (
        <div>"loading"</div>
      ) : (
        <MoodForm onFormChange={handleFormChanges} />
      )}
      {redirectBool && <Redirect to="/dashboard" />}
    </div>
  );
}
