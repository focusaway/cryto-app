import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import CryptoList from "./CryptoList/CryptoList";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

export default function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className="bg-gray-50 h-full overflow-y-auto">
        <div className="page-content py-8 text-gray-600">
          <Router>
            <Switch>
              <Route exact path="/">
                <CryptoList />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}