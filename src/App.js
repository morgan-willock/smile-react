import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GuardedRoute from './GuardedRoute'
import Register from './Register'
import LoginPage from './LoginPage'
import Logout from './Logout'
import Dashboard from './Dashboard'
import Mood from './Mood'
import './LoginPage.css'
import './Register.css'
import './DayPickerContainer.css'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <GuardedRoute path="/dashboard" component={Dashboard} />
        <GuardedRoute path="/mood" component={Mood} />
      </Switch>
    </Router>
  );
}

export default App;
