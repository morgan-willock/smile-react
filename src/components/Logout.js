import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Logout() {
  const logout = true;
  axios.get("/logout");

  return <div>{logout ? <Redirect to="/login" /> : ""}</div>;
}
