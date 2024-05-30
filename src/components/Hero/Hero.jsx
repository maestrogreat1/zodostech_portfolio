import React from "react";
import { getImageUrl } from "../../utils,js";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, We Are ZodosTech</h1>
        <p className={styles.description}>ZodosTech Solutions is a provider of innovative technology solutions tailored to meet the unique needs of businesses across various industries. With a commitment to excellence and a focus to delivering cutting-edge solutions, we empower organizations to thrive in todays rapidly evolving digital landscape.</p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact US</a>
      </div>
      <img src={getImageUrl ("hero/heroImage.jpg")} alt="hero image of zodo" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  );
};

export default Hero;
