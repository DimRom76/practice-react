import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "./App.css";

import Tours from "./2-tours/App";
import Reviews from "./3-reviews/App";
import Accordion from "./4-accordion/App";

function App() {
  return (
    <>
      <Router>
        <div className="div-main">
          <nav>
            <li>
              <NavLink exact to="/tours">
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/reviews">
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/accordion">
                Accordion
              </NavLink>
            </li>
          </nav>
          <div>
            <Switch>
              <Route path="/tours" component={Tours} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/accordion" component={Accordion} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
