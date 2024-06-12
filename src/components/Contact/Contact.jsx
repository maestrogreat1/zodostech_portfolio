// import React from "react";
import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";

// import { getImageUrl } from "../../utils,js";
import "./Contact.css";
// import msg_icon from "../../image/msg-icon.png";
// import mail_icon from "../../image/mail-icon.png";
// import phone_icon from "../../image/phone-icon.png";
// import location_icon from "../../image/location-icon.png";

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
          Send us a message <br /> Our experts will be in touch
        </h3>
        {/* <p>Our experts will be in touch</p> */}
        <ul>
          {/* <li>
            <img src={mail_icon} alt="" /> Contact@zodostech.com
          </li> */}
          {/* <li>
            <img src={phone_icon} alt="" /> +1 123-456-7890
          </li> */}
          {/* <li>
            <img src={location_icon} alt="" /> Mulliner Towers, Alfred Rewane,
            Ikoyi
            <br /> LA 10102, Nigeria
          </li> */}
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-name">
            <label>First Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your first name"
              required
              maxLength={40}
            />

            <label>Last Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your last name"
              required
              maxLength={40}
            />
          </div>

          <span>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              required
              maxLength={62}
            />
            <label>Country</label>
            <input
              type="country"
              name="user_location"
              placeholder="Enter your Country"
              required
              maxLength={45}
            />
            <label>Your Interests</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" value={send} className="btn dark-btn">
              {/* <input type="submit" value="Send"/> */}
              Submit
            </button>
          </span>
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
