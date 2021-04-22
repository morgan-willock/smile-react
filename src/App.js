import './App.css';
import DayPickerContainer from './DayPickerContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login'

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/login-form">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
