import React, { useRef } from "react";

import projects from "../../data/projects.json";
import { ProjectCard }  from "./ProjectCard";
import styles from "./Projects.module.css"
import './Projects.css'
import next_icon from '../../image/next-icon.png'
import back_icon from '../../image/back-icon.png'
import user_1 from '../../image/gynbudlog.jpg'
import user_2 from '../../image/elim.png'
import user_3 from '../../image/intell.jpg'
import user_4 from '../../image/mullog.jpg'

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
                <h3><a href="">GymBud App</a></h3>
                <span>Germany EU</span>
              </div>
            </div>
            <p>
              A simple app built for the purpose of connecting gym/fitness enthusiasts within the same location.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3><a href="https://www.e-limu.org/">Elimu Website</a></h3>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
            <p>
              This is a simple kiddies learning app, to build cognitive thinking on a variety of fields spanning from arithmetics to social building curriculum.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3><a href="Intelligentsiatalk.com">Intelligentsia Talk</a></h3>
                <span>London, UK</span>
              </div>
            </div>
            <p>
              A vast community of deep thinkers, interested in growth and building humane values and consistently seeking more knowledge. 
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3><a href="https://www.instagram.com/mustmultiply?igsh=cHI0MDl2OGIyejI1&utm_source=qr">Must Mulitply</a></h3>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
            <p>
              Social media platform management and general product handling for a rising fintech startup in Africa.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  );
};

export default Projects;
