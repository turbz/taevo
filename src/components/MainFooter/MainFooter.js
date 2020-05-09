import React from "react";

import "./MainFooter.css";

import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin-icon.svg";

export default function MainFooter() {
  return (
    <section className="Main-Footer">
      <div className="taevo-style">
        <span></span>
        <span></span>
      </div>
      <footer>
        <div>
          <h2>About us</h2>
          <span></span>
          <p>
            taevo provides cutting-edge cloud-based software solutions to SMEs
            through the automation of HR functions, such as training &
            development, leave management, recruiting, headcount management, and
            reporting.
            <br></br>
            <br></br>
            taevo helps talent leaders to understand their workforce better and
            drive talent decision based on a deep understanding and insightful
            analysis or data.
          </p>
        </div>
        <div>
          <h2>Customers</h2>
          <span></span>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <span></span>
          <ul>
            <li>
              <a href="#features">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Customers</h2>
          <span></span>
          <ul>
            <li>
              <span>
                <img src={facebook} alt="facebook" />{" "}
              </span>

              <a
                href="https://tinyurl.com/uc9fsz6"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <span>
                <img src={twitter} alt="twitter" />{" "}
              </span>
              <a
                href="https://twitter.com/taevo_softwares"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <span>
                <img src={linkedin} alt="linkedin" />{" "}
              </span>
              <a
                href="https://tinyurl.com/un4s4o5"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
