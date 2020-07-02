import React from "react";
import "./Navbar.scss";
import { Component } from "react";

export class Navb extends Component {
  render() {
    return (
      <div>
        <div className="nv mr-5  ">
          <ul className="nav flex-column mr-5">
            <li className="social nav-item slide-bottom1">
              <a className="nav-link mr-5 " href="https://www.facebook.com/changecy/">
                facebook
              </a>
            </li>
            <li className="social nav-item slide-bottom2">
              <a className="nav-link mr-5 " href="https://www.instagram.com/changeagencyofficial/">
                instagram
              </a>
            </li>
            <li className="social nav-item slide-bottom3">
              <a className="nav-link mr-5 " href="https://www.behance.net/changeagency/">
                behance
              </a>
            </li>
            <li className="social nav-item slide-bottom4">
              <a className="nav-link mr-5 " href="https://www.behance.net/changeagency/">
                dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navb;
