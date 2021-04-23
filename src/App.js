import './App.css';
import DayPickerContainer from './DayPickerContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from './Register'
import BootstrapLogin from './BootstrapLogin'
import './BootstrapLogin.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register-form">
          <Register />
        </Route>
        <Route path="/bootstrap-login">
          <BootstrapLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
