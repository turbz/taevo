import React, { useState } from "react";

import "./AppHeader.css";

import logo from "../assets/logo-full-color.svg";
import smartphone from "../assets/smartphone.svg";
import menu from "../assets/menu-icon.svg";

export default function AppHeader() {
  const [addClass, setAddClass] = useState(false);
  return (
    <header className="App-header">
      <h1>
        <img src={logo} alt="taevo" />
        <span></span>
        <img src={smartphone} alt="phone" />
        <span>+27 67 060 0708</span>{" "}
      </h1>
      <nav className={!addClass ? "nav" : "nav addClass"}>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li></li>
          <li>Connect</li>
          <li>Subscribe</li>
        </ul>
      </nav>
      <img src={menu} alt="menu" className="menu" />
    </header>
  );
}
