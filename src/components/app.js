import React, { Component } from 'react';
import Home from "./home";
import Toggle from "./toggle";
import HideMe from "./hideme";
import Numbers from "./numbers";
import NumberPixels from "./numberpixels";
import Color from "./color";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
          <div>
            <Home />
          
            <Switch>      
              {/* <Route exact path="/" component={Home}>
              </Route> */}
              <Route path="/toggle" component={Toggle}>
              </Route>
              <Route path="/hideme" component={HideMe}>
              </Route>
              <Route path="/numbers">
                <Numbers />
              </Route>
              <Route path="/numberpixels">
                <NumberPixels />
              </Route>
              <Route path="/color">
                <Color />
              </Route>
            </Switch>
          </div>
          </Router>
        </div>
    );
  }
}

