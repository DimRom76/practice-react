import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "./App.css";

import Reminder from "./1-birthday-reminder/App";
import Tours from "./2-tours/App";
import Reviews from "./3-reviews/App";
import Accordion from "./4-accordion/App";
import Menu from "./5-menu/App";
import Tabs from "./6-tabs/App";
import Slider from "./7-slider/App";
import Lorem from "./8-lorem-ipsum/App";
import Color from "./9-color-generator/App";

function App() {
  return (
    <>
      <Router>
        <div className="div-main">
          <nav>
            <li>
              <NavLink exact to="/reminder">
                Reminder
              </NavLink>
            </li>
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
            <li>
              <NavLink exact to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/tabs">
                Tabs
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/slider">
                Slider
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/lorem">
                Lorem
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/color">
                Color
              </NavLink>
            </li>
          </nav>
          <div>
            <Switch>
              <Route path="/reminder" component={Reminder} />
              <Route path="/tours" component={Tours} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/accordion" component={Accordion} />
              <Route path="/menu" component={Menu} />
              <Route path="/tabs" component={Tabs} />
              <Route path="/slider" component={Slider} />
              <Route path="/lorem" component={Lorem} />
              <Route path="/color" component={Color} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
