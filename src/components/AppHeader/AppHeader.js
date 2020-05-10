import React, { useState } from "react";

import "./AppHeader.css";

import logo from "../assets/logo-full-color.svg";
import smartphone from "../assets/smartphone.svg";
import menu from "../assets/menu-icon.svg";
import close from "../assets/exit.svg";

export default function AppHeader() {
  const [addClass, setAddClass] = useState(false);

  const onToggleClass = () => {
    setAddClass(!addClass);
  };
  return (
    <header className="App-header">
      <h1>
        <img src={logo} alt="taevo" />
        <span></span>
        <img src={smartphone} alt="phone" />
        <span>+27 061 582 4952</span>{" "}
      </h1>
      <nav
        className={
          !addClass
            ? "nav"
            : "nav addClass animate__animated animate__slideInRight"
        }
      >
        <img
          src={close}
          alt="close"
          className="close"
          onClick={onToggleClass}
        />
        <ul>
          <li>
            <a onClick={onToggleClass} href="#Home">
              Home
            </a>
          </li>
          <li>
            <a onClick={onToggleClass} href="#about">
              About Us
            </a>
          </li>
          <li>
            <a onClick={onToggleClass} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={onToggleClass} href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a onClick={onToggleClass} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <ul>
          <li></li>
          <li>Connect</li>
          <li>
            <a onClick={onToggleClass} href="#contact">
              Try Our Services
            </a>
          </li>
        </ul>
      </nav>
      <img src={menu} alt="menu" className="menu" onClick={onToggleClass} />
    </header>
  );
}
