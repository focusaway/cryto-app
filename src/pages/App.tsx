import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CriptoList from "./CriptoList/CriptoList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CriptoList />
        </Route>
      </Switch>
    </Router>
  );
}