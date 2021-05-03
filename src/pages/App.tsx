import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CryptoList from "./CryptoList/CryptoList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CryptoList />
        </Route>
      </Switch>
    </Router>
  );
}