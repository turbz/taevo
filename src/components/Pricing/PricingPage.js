import React from "react";

import "./PricingPage.css";

import job from "../assets/job.svg";
import office from "../assets/office.svg";
import work from "../assets/work.svg";
import tick from "../assets/tick.svg";

export default function PricingPage() {
  return (
    <section id="pricing" className="Pricing">
      <header className="call-to-action">
        <h3>Not satisfied? No payment is necessary.</h3>
        <p>We let you test our complete suite of features - with zero risk</p>

        <a href="#contact">TRY OUR SERVICE</a>
      </header>
      <div className="Card">
        <article>
          <header>
            <img src={job} alt="swing" />
            <ul>
              <li>Recruiting</li>
              <li></li>
              <li>ZAR</li>
              <li>49</li>
              <li>per month</li>
            </ul>
          </header>
          <ul>
            <li>
              <img src={tick} alt="facebook" />
              <span>Job Posting</span>
            </li>
            <li>
              <img src={tick} alt="twitter" />
              <span>Unlimited users</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>Career Portal</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>Document Storage</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>200+ Job Application</span>
            </li>
          </ul>
          <footer>
            <div className="taevo-style">
              <span></span>
              <span></span>
            </div>

            <a href="#contact">TRY OUR SERVICE</a>
          </footer>
        </article>
        <article>
          <header>
            <img src={office} alt="swing" />
            <ul>
              <li>Headcount</li>
              <li></li>
              <li>ZAR</li>
              <li>49</li>
              <li>per month</li>
            </ul>
          </header>
          <ul>
            <li>
              <img src={tick} alt="facebook" />
              <span>Employee management</span>
            </li>
            <li>
              <img src={tick} alt="twitter" />
              <span>Unlimited users</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>EE Reportiing</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>Document Storage</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>2+ Employees</span>
            </li>
          </ul>
          <footer>
            <div className="taevo-style">
              <span></span>
              <span></span>
            </div>

            <a href="#contact">TRY OUR SERVICE</a>
          </footer>
        </article>
        <article>
          <header>
            <img src={work} alt="swing" />
            <ul>
              <li>Training</li>
              <li></li>
              <li>ZAR</li>
              <li>49</li>
              <li>per month</li>
            </ul>
          </header>
          <ul>
            <li>
              <img src={tick} alt="facebook" />
              <span>Training Planning</span>
            </li>
            <li>
              <img src={tick} alt="twitter" />
              <span>Unlimited users</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>Seta Reporting</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>Document Storage</span>
            </li>
            <li>
              <img src={tick} alt="linkedin" />
              <span>2+ Trainees</span>
            </li>
          </ul>
          <footer>
            <div className="taevo-style">
              <span></span>
              <span></span>
            </div>

            <a href="#contact">TRY OUR SERVICE</a>
          </footer>
        </article>
      </div>
    </section>
  );
}
