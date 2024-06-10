import React from "react";
import { getImageUrl } from "../../utils,js";
// import styles from "./Hero.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import dark_arrow from '../../image/dark-arrow.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>ZodosTech Software Solutions</h1>
        <p>ZodosTech is a provider of innovative technology solutions tailored to meet the unique needs of businesses across various industries.</p>
        <button className='btn'><Link to="contact" smooth={true} offset={-260} duration={500}>Get Started <img src={dark_arrow} alt="" />
          </Link></button>
      </div>
      {/* <img src={getImageUrl ("hero/heroImage.jpg")} alt="hero image of zodo" className={styles.heroImg}/> */}
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}

    </section>
  );
};

export default Hero;
