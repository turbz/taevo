import React, { useState } from "react";
import axios from "axios";

import "./ContactPage.css";

import close from "../assets/exit-white.svg";

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [hide, setHide] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "https://taevo.co.za/send",
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        setSuccessMessage("message sent");
        resetForm();
        setSuccessMessage(
          <div className="contact-message">
            <span>massage sent</span>

            <img src={close} alt="close" onClick={() => setHide(!false)} />
          </div>
        );
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    document.getElementById("contact").reset();
  };

  return (
    <>
      {!hide ? successMessage : null}
      <section className="Contact-Page ">
        <div className="info">
          <h2>Contact Us</h2>
          <p>
            Talent has never been more important to the success of a business.
            Please contact us on:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> info@taevo.co.za
            </li>
            <li>
              <strong>Cellphone:</strong> +27 061 582 4952
            </li>
          </ul>
        </div>
        <form
          id="contact"
          onSubmit={handleSubmit}
          // method="POST"
        >
          <input
            type="text"
            name="name"
            className="contact"
            id="name"
            placeholder="name"
            required
          />
          <input
            type="email"
            name="email"
            className="contact"
            id="email"
            placeholder="email address"
            required
          />
          <textarea
            id="message"
            className="contact"
            placeholder="Message"
            rows="5"
            required
          ></textarea>

          <button>Send</button>
        </form>
      </section>
    </>
  );
}
