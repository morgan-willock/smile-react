import './App.css';
import DayPickerContainer from './DayPickerContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login'
import BootstrapLogin from './BootstrapLogin'
import './BootstrapLogin.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login-form">
          <Login />
        </Route>
        <Route path="/bootstrap-login">
          <BootstrapLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
