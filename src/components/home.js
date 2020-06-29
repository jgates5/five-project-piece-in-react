import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import {withRouter} from "react-router";
export  default class Home extends Component {
  constructor() {
    super ()
  }   
  render () {
      return (
        <div className="Links">
          {/* <NavLink exact to="/">
            Home
          </NavLink> */}
          <NavLink to="/toggle">
            Toggle
          </NavLink>
          <NavLink to="/hideme">
            HideMe
          </NavLink>
          <NavLink to="/numbers">
            Numbers
          </NavLink>
          <NavLink to="/numberpixels">
            NumberPixels
          </NavLink>
          <NavLink to="/color">
            Color
          </NavLink>
          
        </div>
      );
  }
}
