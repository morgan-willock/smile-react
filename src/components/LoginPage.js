import { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Smile from "./Smile.js";
import '../styles/LoginPage.css'


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      return alert("no email or password entered");
    }

    const user = { email, password };

    axios.post("/login", user).then((response) => {
      if (response.data.login === "success") {
        setLoginSuccess(true);
      } else if (response.data.login === "failed") {
        setLoginSuccess(false);
      }
    });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="bootstrap-container">
      <Smile />
      <p className="info-header">A simple mood tracker to keep you smiling</p>
      <p className="login-header">Login:</p>
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
          <small id="emailHelp" className="form-text text-muted"></small>
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
          Login
        </button>
        <Link to="/register">
          <p className="register-login-link">
            Not a member? click here to register!
          </p>
        </Link>
      </form>
      {loginSuccess && <Redirect to="/dashboard" />}
    </div>
  );
}
