import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Workout from "./pages/Tracker";
import WorkoutInfo from "./pages/workout";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Workout} />
          <Route exact path="/workout/:id" component={WorkoutInfo} />
        </Switch>
      </React.Fragment>
    </Router>
    </div>
  );
}

export default App;
