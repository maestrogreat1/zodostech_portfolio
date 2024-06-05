import React, { useRef } from "react";

import projects from "../../data/projects.json";
import { ProjectCard }  from "./ProjectCard";
import styles from "./Projects.module.css"
import './Projects.css'
import next_icon from '../../image/next-icon.png'
import back_icon from '../../image/back-icon.png'
import user_1 from '../../image/user-1.png'
import user_2 from '../../image/user-2.png'
import user_3 from '../../image/user-3.png'
import user_4 from '../../image/user-4.png'

// export const Projects = () => {

export const Projects = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };



  return (
    // <section className={styles.container} id="projects">
    //   <h2 className={styles.title}>Projects</h2>
    //   <div className={styles.projects}>
    //     {projects.map((project, id) => {
    //       return <ProjectCard key={id} project={project} />;
    //     })}
    //   </div>
    // </section>
    <div className="testimonials" id="projects">
    <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
    <img
      src={back_icon}
      alt=""
      className="back-btn"
      onClick={slideBackward}
    />
    <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt="" />
              <div>
                <h3>Pia Curtis</h3>
                <span>XpressTokens UK</span>
              </div>
            </div>
            <p>
              Choosing to enhance my career with the Berry group is one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilties and commitment to business excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Khalifa Group, UAE</span>
              </div>
            </div>
            <p>
              Choosing to enhance my career with the Berry group is one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilties and commitment to business excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3>Anne Stryder</h3>
                <span>Aims Assets, South Africa</span>
              </div>
            </div>
            <p>
              Choosing to enhance my career with the Berry group is one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilties and commitment to business excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3>Jullian McBridge</h3>
                <span>Pixel Arts, USA</span>
              </div>
            </div>
            <p>
              Choosing to enhance my career with the Berry group is one of the
              best decisions I've ever made. The supportive community,
              state-of-the-art facilties and commitment to business excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  );
};

export default Projects;
