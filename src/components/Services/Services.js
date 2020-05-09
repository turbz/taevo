import React from "react";

import imageHR from "../assets/hr-atoms.png";
import imageRecruiting from "../assets/recruiting-atoms.png";
import imageTraining from "../assets/imageTraining.png";
import imageReporting from "../assets/imageReporting.png";

import "./Services.css";

export default function Services() {
  return (
    <section className="Services">
      <article className="Service-Card">
        <div>
          <h2>Stunning Design Tools</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Get Started</button>
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
          <h2>Stunning Design Tools</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Get Started</button>
        </div>
      </article>
      <article className="Service-Card">
        <div>
          <h2>Stunning Design Tools</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Get Started</button>
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
          <h2>Stunning Design Tools</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Get Started</button>
        </div>
      </article>
    </section>
  );
}
