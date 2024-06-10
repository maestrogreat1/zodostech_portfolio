// import React from "react";
import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";

import { getImageUrl } from "../../utils,js";
import "./Contact.css";
import msg_icon from "../../image/msg-icon.png";
import mail_icon from "../../image/mail-icon.png";
import phone_icon from "../../image/phone-icon.png";
import location_icon from "../../image/location-icon.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ob8urwy", "template_ag5f1uq", form.current, {
        publicKey: "ScgA-FjXzl2RIIhhy",
      })
      .then(
        () => {
          console.log("Message Sent Successfully!");
        },
        (error) => {
          console.log("Failed To Send...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          information below. Your feedback, questions and suggestions are
          important to us as we strive to provide exceptional service to our
          clients.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Contact@zodostech.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" /> Mulliner Towers, Alfred Rewane,
            Ikoyi
            <br /> LA 10102, Nigeria
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Tell us your requests"
            required
          />
          <button type="submit" value={send} className="btn dark-btn">
          {/* <input type="submit" value="Send"/> */}
          Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
// <footer id="contact" className={styles.container}>
//   <div className={styles.text}>
//     <h2>Contact</h2>
//     <p>Feel free to reach out</p>
//   </div>
//   <div className={styles.form}>
//     <div className={styles.link}>

//     </div>
//   </div>
// </footer>

export default Contact;
