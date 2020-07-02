import React from "react";

import "./AppBanner.css";

import html from "../assets/user-friendly-icon.svg";
import report from "../assets/customer-icon.svg";
import password from "../assets/password.svg";
import reporting from "../assets/reporting-icon.svg";
import Slider from "./Slider/Slider";

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

export default function AppBanner() {
  return (
    <section className="App-Banner">
      <div>
        <div className="content">
          <h4>
            <span></span>
            <span>Get Work Done</span>
          </h4>
          <h2>Forge the Tools of Transformation</h2>
          <p>
            A cloud-based Human resource information system that elevates an
            organization's ability to identify, recruit and develop its
            workforce and help organizations create the HR function that the
            business needs.
          </p>
          <ul>
            <li>
              {" "}
              <a href="#contact">Try Our Services</a>
            </li>
            <li>
              <span>from</span>
              <span>49</span>
              <span>
                <span>ZAR</span>
                <span></span>/month
              </span>
            </li>
          </ul>
        </div>
        <Slider slides={images} />
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
