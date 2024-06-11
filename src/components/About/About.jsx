import React from "react";
import { getImageUrl } from "../../utils,js";
import image_1 from "../../image/cursorIcon.png";
import image_2 from "../../image/uiIcon.png";
import image_3 from "../../image/serverIcon.png";
import image_4 from "../../image/cart.png";
import about_1 from "../../image/webdev.png";
import about_2 from "../../image/cloud.png";
import about_3 from "../../image/appdev.png";
import about_4 from "../../image/seo.png";

import "./About.css";
import about_img from "../../image/aboutImage.jpg";

const About = () => {
  return (
    // <section className={styles.container} id="about">
    //   {/* <h2 className={styles.title}>About</h2> */}
    //   <div className={styles.content}><img src={getImageUrl("about/aboutImage.jpg")} alt="Our team photo" className={styles.aboutImage}/>
    //   <ul className={styles.aboutItems}>
    //     <li className={styles.aboutItem}>
    //         <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
    //         <div className={styles.aboutItemtext}>
    //             <h3>Fullstack Development</h3>
    //             <p>
    //                 At ZodosTech Solutions, we specialize in developing customized software and web applications, implementing robust IT infrastructure.
    //             </p>
    //         </div>
    //     </li>
    //     <li className={styles.aboutItem}>
    //         <img src={getImageUrl("about/uiIcon.png")} alt="server icon" />
    //         <div className={styles.aboutItemtext}>
    //             <h3>Cloud Computing</h3>
    //             <p>
    //                 From cloud computing and data analytics to network security and digital transformation, we offer a full spectrum of services designed to address the complex challenges facing modern businesses.
    //             </p>
    //         </div>
    //     </li>
    //     <li className={styles.aboutItem}>
    //         <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
    //         <div className={styles.aboutItemtext}>
    //             <h3>Mobile App Development</h3>
    //             <p>
    //                 We have designed multiple scalable mobile applications with years of experience.
    //             </p>
    //         </div>
    //     </li>
    //     <li className={styles.aboutItem}>
    //         <img src={getImageUrl("about/cart.png")} alt="UI icon" />
    //         <div className={styles.aboutItemtext}>
    //             <h3>SEO and Digital Marketing Services</h3>
    //             <p>
    //                Take advantage of our premuim SEO services and get your business on the map in rapid time.
    //             </p>
    //         </div>
    //     </li>
    //   </ul>
    //   </div>
    // </section>

    <div className="about">
      <div className="aboutItems">
        <img src={about_1} alt="" />
        <div className="caption">
          <p>Fullstack Development</p>
        </div>
      </div>
      <div className="aboutItems">
        <img src={about_2} alt="" />
        <div className="caption">
          <p>Cloud Computing</p>
        </div>
      </div>
      <div className="aboutItems">
        <img src={about_3} alt="" />
        <div className="caption">
          <p>Mobile App Development</p>
        </div>
      </div>
      <div className="aboutItems">
        <img src={about_4} alt="" />
        <div className="caption">
          <p>SEO and Digital Marketing</p>
        </div>
      </div>
      {/* <div className="about-left">
      <img src={about_img} alt="" className='about_img'/>
    </div> */}
      {/* <div className="about-right">
    <ul className="aboutItems">
        <li className="aboutItem">
            <img src={image_1} alt="cursor icon" className="abs"/>
            <div className="aboutItemText">
                <h3>Fullstack Development</h3>
                <p>
                    We specialize in developing customized software and web applications, implementing robust IT infrastructure.
                </p>
            </div>
        </li>
        <li className="aboutItem">
            <img src={image_2} alt="server icon" className="abs"/>
            <div className="aboutItemText">
                <h3>Cloud Computing</h3>
                <p>
                    From cloud computing & data analytics to network security and digital transformation, we offer a full spectrum of services design. 
                </p>
            </div>
        </li>
        <li className="aboutItem">
            <img src={image_3} alt="UI icon" className="abs"/>
            <div className="aboutItemText">
                <h3>Mobile App Development</h3>
                <p>
                    We have designed multiple scalable mobile applications with years of experience.
                </p>
            </div>
        </li>
        <li className="aboutItem">
            <img src={image_4} alt="UI icon" className="abs"/>
            <div className="aboutItemText">
                <h3>SEO and Digital Marketing Services</h3>
                <p>
                   Take advantage of our premuim SEO services and get your business on the map in rapid time. 
                </p>
            </div>
        </li>
      </ul> */}

      {/* <h3>ABOUT BERRY.CO</h3>
      <h2>Nuturing the Future Today</h2>
      <p>Embark on a transfromative business journey with our company's comprehensive business modules. Our cutting-edge packages is designed to empower businesses with the resources, skills and experince needed to excel in the dynamic business world.</p>
      <p>With a focus on innovation, hands-on practice and personalised services, our modules prepare both veteran and aspiring business persons to make an impact around the globe.</p>
      <p>Wether you aspire to be an entrepreneur, administrator, analyst, consultant or business trainer, our diverse range of modules offers you the perfect pathway to achieve your goals and unlock your full potential in shaping your future now.</p> */}
    </div>
    //   </div>
  );
};

export default About;
