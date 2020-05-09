import React from "react";

import "./AppBanner.css";

import html from "../assets/html.svg";
import report from "../assets/document-settings.svg";
import password from "../assets/password.svg";

export default function AppBanner() {
  return (
    <section className="App-Banner">
      <div>
        <div>
          <h4>
            <span></span>
            <span>Pour les TPE</span>
          </h4>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>En savoiur plus</li>
            <li>
              <span>from</span>
              <span>69</span>
              <span>
                <span>ZAR</span>
                <span></span>/month
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>
          <span>Soyez serien</span>
          <span>Dougs vous simplifie la vie</span>
        </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <ul>
          <li>
            <img src={html} alt="icon" />
            <span>Lorem ipsum dolor sit amet, consectetur</span>
          </li>
          <li>
            <img src={report} alt="icon" />
            <span>Lorem ipsum dolor sit amet, consectetur</span>
          </li>
          <li>
            <img src={html} alt="icon" />
            <span>Lorem ipsum dolor sit amet, consectetur</span>
          </li>
          <li>
            <img src={password} alt="icon" />
            <span>Lorem ipsum dolor sit amet, consectetur</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
