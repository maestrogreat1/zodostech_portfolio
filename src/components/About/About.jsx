import React from "react";
import { getImageUrl } from "../../utils,js";
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}><img src={getImageUrl("about/aboutImage.jpg")} alt="Our team photo" className={styles.aboutImage}/>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemtext}>
                <h3>Fullstack Development</h3>
                <p>
                    At ZodosTech Solutions, we specialize in developing customized software and web applications, implementing robust IT infrastructure and providing comprehensive cybersecurity services. Our team of experienced engineers, developers and consultants work closely with clients to understand thier objectives and deliver tailored solutions that drive tangible results. 
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="server icon" />
            <div className={styles.aboutItemtext}>
                <h3>Cloud Computing</h3>
                <p>
                    From cloud computing and data analytics to network security and digital transformation, we offer a full spectrum of services designes to address the complex challenges facing modern businesses. With a proven track record of success and a dedication to customer satisfaction, ZodosTech Solutions is your trusted partner for all your technology needs. 
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemtext}>
                <h3>Mobile App Development</h3>
                <p>
                    We have designed multiple scalable mobile applications with years of experience.
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemtext}>
                <h3>SEO and Digital Marketing Services</h3>
                <p>
                   Take advantage of our premuim SEO services and get your business on the map in rapid time. Our experts with years of valid experience will help you access the best of quality reach and conversions for any kind of business module you may be working with. 
                </p>
            </div>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default About;
