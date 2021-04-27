import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Smile from "./Smile.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      return alert("no email or password entered");
    }

    const user = { email, password };

    axios.post("/register", user).then((response) => {
      if (response.data.register === "success") {
        setRegisterSuccess(true);
      } else if (response.data.register === "failed") {
        alert("email aleady taken");
        setRegisterSuccess(false);
      }
    });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    axios.get('/protected-route').then((response) => {
      if (response.data.authorized === true) {
        setRegisterSuccess(true);
      }
    });
  })

  return (
    <div className="register-container">
      <Smile />
      <p className="info-header">A simple mood tracker to keep you smiling</p>
      <p className="login-header">Register:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <small id="passwordHelp" className="form-text text-muted">
            Must be over 6 char
          </small>
        </div>
        <button type="submit" className="btn btn-info">
          Register
        </button>
        <Link to="/login">
          <p className="register-login-link">
            Already a member? click here to login!
          </p>
        </Link>
      </form>
      {registerSuccess ? <Redirect to="/login" /> : ""}
    </div>
  );
}
