import React from "react";

import imageHR from "../assets/hr-atoms.png";
import imageRecruiting from "../assets/recruiting-atoms.png";
import imageTraining from "../assets/imageTraining.png";
import imageReporting from "../assets/imageReporting.png";

import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="Services">
      <article className="Service-Card">
        <div>
          <h2>Headcount Management</h2>
          <p>
            Find exactly who you need, when you need them. Utilize our headcount
            management tool for both onboarding and offboarding employees. Get
            comprehensive data insight about each employee/department based on
            demographics, department spending, employee job history, etc.
          </p>

          <a href="#contact">Try Our Services</a>
        </div>

        <div>
          <img src={imageHR} alt="Human Resources Tools" />
        </div>
      </article>
      <article className="Service-Card">
        <div>
          <img src={imageRecruiting} alt="Human Resources Tools" />
        </div>

        <div>
          <h2>Recruiting & Hiring</h2>
          <p>
            Talent armed with the skills of the future is more in demand than
            ever. Attract relevant talent and gain more insight about your
            candidates without leaving your screen.
          </p>

          <a href="#contact">Try Our Services</a>
        </div>
      </article>
      <article className="Service-Card">
        <div>
          <h2>Training & Development</h2>
          <p>
            Talent has never been more important to the success of a
            corporation. Customize training to fit the needs of your
            organization's most talented individuals.
          </p>

          <a href="#contact">Try Our Services</a>
        </div>

        <div>
          <img src={imageTraining} alt="Recruiting" />
        </div>
      </article>
      <article className="Service-Card">
        <div>
          <img src={imageReporting} alt="Human Resources Tools" />
        </div>

        <div>
          <h2>Reporting</h2>
          <p>
            There's nothing more frustrating than filling forms. Get live and
            automated reports directly from your browser. Which can also be
            downloaded!
          </p>

          <a href="#contact">Try Our Services</a>
        </div>
      </article>
    </section>
  );
}
