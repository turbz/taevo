import React from "react";

import "./AppBanner.css";

import html from "../assets/user-friendly-icon.svg";
import report from "../assets/customer-icon.svg";
import password from "../assets/password.svg";
import reporting from "../assets/reporting-icon.svg";

export default function AppBanner() {
  return (
    <section className="App-Banner">
      <div>
        <div>
          <h4>
            <span></span>
            <span>Get Work Done</span>
          </h4>
          <h2>Forge the Tools of Transformation</h2>
          <p>
            A cloud-based Human resource information system that elevates a
            organizations ability to identify, recruit and develop its workforce
            and help organizations create the HR function that the business
            needs.
          </p>
          <ul>
            <li>
              {" "}
              <a href="#contact">Try Our Services</a>
            </li>
            <li>
              <span>from</span>
              <span>499</span>
              <span>
                <span>ZAR</span>
                <span></span>/month
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div id="features">
        <h3>
          <span>Our Solutions</span>
          <span>Transform your employee experience.</span>
        </h3>
        <p>
          Simple and easy-to-follow software solution that reduce human errors.
        </p>
        <ul>
          <li>
            <img src={html} alt="icon" />
            <span>
              Provide trustworthy data to complete day-to-day task more
              efficient.
            </span>
          </li>
          <li>
            <img src={report} alt="icon" />
            <span>
              {" "}
              Generate value using people analytics to solve business problems.
            </span>
          </li>
          <li>
            <img src={reporting} alt="icon" />
            <span>
              Automate human resources processes and reporting systems.
            </span>
          </li>
          <li>
            <img src={password} alt="icon" />
            <span>
              Maximizes connectivity and collaboration while mitigating risks.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
