import DayPickerContainer from "./DayPickerContainer";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Dashboard({ userId }) {
  const [loading, setLoading] = useState(true);
  const [verifyTodaysMood, setVerifyTodaysMood] = useState(false);

  useEffect(() => {
    const todaysDate = new Date();
    const todaysDateConverted = todaysDate.toLocaleDateString("en-US");

    const request = { userId, todaysDateConverted };

    axios.post("/verify-mood", request).then((response) => {
      if (response.data.message === "success") {
        setLoading(false);
      } else if (response.data.message === "failed") {
        setVerifyTodaysMood(true);
        setLoading(false);
      }
    });
  });

  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : verifyTodaysMood ? (
        <Redirect to="/mood" />
      ) : (
        <DayPickerContainer userId={userId} />
      )}
    </div>
  );
}