import MoodForm from "./MoodForm";
import Smile from "../components/Smile"
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Mood({ userId }) {
  const [redirectBool, setRedirectBool] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleFormChanges(activities, moodSelection) {
    const mood = { userId, moodSelection, activities };

    axios.post("/mood", mood).then((response) => {
      if (response.data.message === "success") {
        setRedirectBool(true);
      } else if (response.data.message === "failed") {
        console.log("failed");
      }
    });
  }

  useEffect(() => {
    const request = { userId };

    axios.post("/verify-mood", request).then((response) => {
      if (response.data.message === "success") {
        setRedirectBool(true);
      } else if (response.data.message === "failed") {
        setLoading(false);
      }
    });
  });

  return (
    <div>
      {loading ? (
        <div>"loading"</div>
      ) : (
        <div className="mood-input-form">
          <Smile />
          <p className="info-header">A simple mood tracker to keep you smiling</p>
          <MoodForm onFormChange={handleFormChanges} />
        </div>
      )}
      {redirectBool && <Redirect to="/dashboard" />}
    </div>
  );
}
