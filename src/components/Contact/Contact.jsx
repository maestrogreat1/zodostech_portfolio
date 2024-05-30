// import React from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { getImageUrl } from "../../utils,js";
import styles from "./Contact.module.css";

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
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <div className={styles.link}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      {/* <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com">linkedin.com/myname</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.Github.com">github.com</a>
        </li>
      </ul> */}
    </footer>
  );
};

export default Contact;
