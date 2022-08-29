import React from "react";
import logo from "../../images/logo.PNG";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="company__name">Cryptotogether</p>
      </div>
      <div className="menu">
        <div className="nav">
          <ul className="nav__lists">
            <li>
              <span className="nav__heading">Admin Tools</span>
            </li>
            <li className="link">
              <i class="uil uil-home"></i>
              <span className="nav__text">Dashboard</span>
            </li>
            <li className="link">
              <i class="uil uil-water-glass"></i>
              <span className="nav__text">Market</span>
            </li>
            <li className="link">
              <i class="uil uil-briefcase-alt"></i>
              <span className="nav__text">Portfolio</span>
            </li>
            <li className="link">
              <i class="uil uil-briefcase-alt"></i>
              <span className="nav__text">Discover</span>
            </li>
            <li className="link">
              <i class="uil uil-user-circle"></i>
              <span className="nav__text">Profile</span>
            </li>
          </ul>
          <ul className="nav__lists">
            <li>
              <span className="nav__heading">Insight Tools</span>
            </li>
            <li className="link">
              <i class="uil uil-inbox"></i>
              <div className="nav__extra">
                <span className="nav__text">Inbox</span>
                <span className="count">3</span>
              </div>
            </li>
            <li className="link">
              <i class="uil uil-bell"></i>
              <div className="nav__extra">
                <span className="nav__text">Notification</span>
                <span className="count">15</span>
              </div>
            </li>
            <li className="link">
              <i class="uil uil-setting"></i>
              <span className="nav__text">Setting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
