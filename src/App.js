import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register'
import BootstrapLogin from './BootstrapLogin'
import Dashboard from './Dashboard'
import Logout from './Logout'
import './BootstrapLogin.css'
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
          <BootstrapLogin />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
