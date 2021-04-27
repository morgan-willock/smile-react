import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GuardedRoute from "./components/GuardedRoute";
import Register from "./components/Register";
import LoginPage from "./components/LoginPage";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import Mood from "./components/Mood";
import EditMood from "./components/EditMood";
import "./styles/App.css";
import "./styles/LoginPage.css";
import "./styles/Register.css";
import "./styles/DayPickerContainer.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <GuardedRoute path="/dashboard" component={Dashboard} />
        <GuardedRoute path="/mood/:date" component={EditMood} />
        <GuardedRoute path="/mood" component={Mood} />
      </Switch>
      <div className="logout-footer">
        <Link to="/logout">
          Logout
        </Link>
      </div>
    </Router>
  );
}

export default App;
